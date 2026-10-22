/* ECE 321 study sessions: keyboard-first, adaptive, never scrolls.
   Banks register with window.CourseStudy.registerBank({...}) (see assets/study/banks/).
   Progress lives in this browser only (localStorage). */
(() => {
  'use strict';

  const KEY = 'ece321-study-v2', OLD_KEY = 'ece321-study-progress-v1', SETTINGS_KEY = 'ece321-study-settings-v1', INTRO_KEY = 'ece321-study-ai-intro-v1';
  const registry = window.CourseStudyBanks = window.CourseStudyBanks || {};
  const catalog = Array.isArray(window.CourseStudyCatalog) ? window.CourseStudyCatalog : [];
  const loading = new Map();
  const PRIOR = 0.35;                       // assumed mastery of anything not yet seen
  const GAPS = [5, 12, 28, 70, 150];        // review spacing (in answered questions) by correct streak

  /* ---------- storage ---------- */
  const read = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) || d; } catch (e) { return d; } };
  const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* private mode */ } };
  const store = read(KEY, {});
  const settings = Object.assign({auto: true, mode: 'mixed'}, read(SETTINGS_KEY, {}));
  const MODES = [['concept', 'Conceptual'], ['workout', 'Workout'], ['mixed', 'Mixed']];
  const save = () => write(KEY, store);

  function bankState(id) {
    if (!store[id]) {
      store[id] = {turn: 0, q: {}, recent: [], total: 0, right: 0};
      const old = read(OLD_KEY, {})[id];       // carry over what the first version recorded
      if (old && old.questions) Object.entries(old.questions).forEach(([qid, r]) => {
        if (r.attempts > 0) store[id].q[qid] = {n: r.attempts, c: r.correctCount || 0, m: r.mastered ? 0.75 : 0.3, streak: r.mastered ? 1 : 0, seenTurn: 0, seenAt: Date.now(), retryAt: null};
      });
    }
    return store[id];
  }

  /* ---------- state ---------- */
  let bank = null, entry = null, st = null, topics = [], byTopic = {};
  let screen = 'menu', cur = null, last = null, focusMode = false, resetArmed = false;
  let timer = null, askOpen = false, askLog = [];
  const sess = {answered: 0, right: 0, streak: 0};
  const $ = s => document.querySelector(s);
  const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x));
  const aiReady = kind => { try { const s = window.CourseAI && window.CourseAI.getSettings(); return !!(s && s.configured[kind === 'decision' ? s.decisionProvider : s.llmProvider]); } catch (e) { return false; } };

  /* ---------- bank loading ---------- */
  function loadBank(e) {
    if (registry[e.id]) return Promise.resolve(registry[e.id]);
    if (loading.has(e.id)) return loading.get(e.id);
    const p = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = new URL(e.bank, document.baseURI).href; s.async = true;
      s.onload = () => registry[e.id] ? resolve(registry[e.id]) : reject(new Error('The study set did not register.'));
      s.onerror = () => reject(new Error('Could not load this study set.'));
      document.head.append(s);
    });
    loading.set(e.id, p); return p;
  }
  function validate(b, e) {
    if (!b || b.id !== e.id || !Array.isArray(b.questions) || !b.questions.length) throw new Error('This study set has no questions.');
    if (b.policy?.requiresCalculations !== false) throw new Error('This study set does not declare the no-calculation policy.');
    const ids = new Set();
    b.questions.forEach(q => {
      if (!q.id || ids.has(q.id)) throw new Error('Question IDs must be unique.'); ids.add(q.id);
      if (!['choice', 'multi-select', 'text', 'sequence', 'true-false', 'problem'].includes(q.type) || !q.prompt || !q.answer || !q.explanation || (q.type === 'problem' && !(Array.isArray(q.steps) && q.steps.length))) throw new Error(`Question ${q.id} is incomplete.`);
    });
  }
  async function start(e) {
    paintMessage('Loading…');
    try {
      const b = await loadBank(e); validate(b, e);
      entry = e; bank = b; st = bankState(b.id);
      topics = []; byTopic = {};
      b.questions.forEach(q => { const t = q.topic || 'General'; if (!byTopic[t]) { byTopic[t] = []; topics.push(t); } byTopic[t].push(q); });
      focusMode = false; last = null;
      if (!read(INTRO_KEY, null)) introScreen(); else next();
    } catch (err) { paintMessage(err.message || 'Could not open this study set.'); }
  }

  /* ---------- adaptive engine ---------- */
  const rec = q => st.q[q.id];
  const mastery = q => (rec(q) ? rec(q).m : PRIOR);
  const age = r => (st.turn - r.seenTurn) + Math.floor(Math.max(0, Date.now() - r.seenAt) / 3600000 * 1.5);  // time away counts as extra turns
  function topicInfo(t) {
    const qs = byTopic[t]; let seen = 0, att = 0, sum = 0;
    qs.forEach(q => { const r = rec(q); if (r) { seen++; att += r.n; } sum += mastery(q); });
    return {t, size: qs.length, seen, att, mast: sum / qs.length, cov: seen / qs.length};
  }
  function pickNext() {
    const info = {}; topics.forEach(t => info[t] = topicInfo(t));
    let pool = bank.questions.filter(q => !last || q.id !== last.id);
    const mode = settings.mode, byMode = pool.filter(q => mode === 'concept' ? q.type !== 'problem' : mode === 'workout' ? q.type === 'problem' : true);
    if (byMode.length) pool = byMode;                                          // Conceptual = single questions, Workout = multi-step problems, Mixed = both
    if (focusMode) {
      const weak = topics.slice().sort((a, b) => info[a].mast - info[b].mast).slice(0, 4);
      pool = pool.filter(q => weak.includes(q.topic || 'General'));
    }
    // 1. questions the learner just missed come back after a short gap
    const retry = pool.filter(q => rec(q) && rec(q).retryAt != null && rec(q).retryAt <= st.turn).sort((a, b) => rec(a).retryAt - rec(b).retryAt);
    if (retry.length && !st.lastRetry) { st.lastRetry = true; return retry[0]; }   // never two retries in a row, so new material keeps flowing
    st.lastRetry = false;
    // 2. breadth sweep: reach every untouched topic as fast as possible, quick formats first
    const untouched = topics.filter(t => info[t].att === 0 && pool.some(q => (q.topic || 'General') === t && !rec(q)));
    if (untouched.length) {
      const lastTopic = last && (last.topic || 'General');
      const choices = untouched.filter(t => t !== lastTopic); const t = shuffle((choices.length ? choices : untouched).slice())[0];
      const qs = pool.filter(q => (q.topic || 'General') === t && !rec(q));
      const quick = qs.filter(q => q.type === 'choice' || q.type === 'true-false');
      return shuffle((quick.length ? quick : qs).slice())[0];
    }
    // 3. weighted mix of weakness, spacing, novelty and variety (Mixed: a multi-step problem about every 9 questions)
    const probs = pool.filter(q => q.type === 'problem');
    const forceProblem = mode === 'mixed' && probs.length && (st.turn - (st.lastProblemTurn == null ? -99 : st.lastProblemTurn)) >= 9;
    const recentT = st.recent.slice(-3).map(id => (bank.questions.find(q => q.id === id) || {}).topic);
    const lastType = last && last.type;
    let best = null;
    (forceProblem ? probs : pool).forEach(q => {
      const r = rec(q), ti = info[q.topic || 'General'];
      let s = (1 - ti.mast) * 0.7 + Math.random() * 0.12;
      if (!r) s += 0.55 + 0.3 * (1 - ti.cov);                                   // unseen: coverage bonus, more for thin topics
      else {
        s += (1 - r.m) * 0.9;                                                   // personal struggle with this question
        const due = age(r) / (GAPS[clamp(r.streak, 0, GAPS.length - 1)] * (r.m < 0.5 ? 0.6 : 1));
        s += due >= 1 ? Math.min(due - 1, 1.5) * 0.6 : -(1 - due) * 0.9;         // overdue = review, too soon = hold back
      }
      if (ti.att < 2) s += 0.4;                                                 // second quick pass over thin topics
      s -= 0.4 * recentT.filter(t => t === (q.topic || 'General')).length;      // spread topics
      if (lastType && q.type === lastType) s -= 0.1;                            // vary the format
      if (!best || s > best.s) best = {q, s};
    });
    return best.q;
  }

  function record(q, result) {                  // result: 1 right, 0 wrong, 0.25 skipped/revealed, 0.5 partly
    const r = st.q[q.id] || (st.q[q.id] = {n: 0, c: 0, m: PRIOR, streak: 0, seenTurn: 0, seenAt: 0, retryAt: null, miss: 0});
    r.n++; r.seenTurn = st.turn; r.seenAt = Date.now();
    r.m = clamp(0.55 * r.m + 0.45 * result, 0, 1);
    if (result >= 1) { r.c++; r.streak++; r.retryAt = null; }
    else { r.streak = 0; r.miss = (r.miss || 0) + 1; r.retryAt = st.turn + (result === 0 ? 3 + Math.floor(Math.random() * 3) : result === 0.25 ? 14 : 6); }
    if (q.type === 'problem') st.lastProblemTurn = st.turn;
    st.turn++; st.total++; if (result >= 1) st.right++;
    st.recent.push(q.id); if (st.recent.length > 40) st.recent.shift();
    sess.answered++; if (result >= 1) { sess.right++; sess.streak++; } else sess.streak = 0;
    last = q; save();
  }

  /* ---------- screens ---------- */
  function root() { return $('#sx'); }
  function clearTimer() { if (timer) { clearTimeout(timer); timer = null; } }
  function paint(top, main, keys) {
    const r = root(); if (!r) return; r.replaceChildren(top, main, keys);
    fit(main);
  }
  function paintMessage(text) { const m = el('div', 'sx-main'); m.append(el('p', 'sx-msg', text)); paint(el('div', 'sx-top'), m, el('div', 'sx-keys')); }
  function actions(list) {                      // [key label, text, handler]
    const k = el('div', 'sx-keys');
    list.forEach(([key, label, fn]) => {
      const b = el('button', 'sx-act'); b.type = 'button';
      b.append(el('kbd', '', key), document.createTextNode(label)); b.addEventListener('click', fn); k.append(b);
    });
    return k;
  }
  function topBar() {
    const t = el('div', 'sx-top');
    const left = el('div', 'sx-left');
    if (cur && (screen === 'question' || screen === 'feedback' || screen === 'psum')) {
      left.append(el('span', 'sx-topic', cur.q.topic || 'General'), el('span', 'sx-type', cur.problem ? (screen === 'psum' ? 'problem complete' : `step ${cur.i + 1} of ${cur.problem.steps.length}`) : typeLabel(cur.q.type)));
    } else left.append(el('span', 'sx-topic', bank ? bank.title : 'Study sessions'));
    const dots = el('div', 'sx-dots'); dots.setAttribute('aria-hidden', 'true');
    topics.forEach(tp => { const i = topicInfo(tp); const d = el('span', 'sx-dot ' + (i.att === 0 ? 'u' : i.mast < 0.4 ? 'w' : i.mast < 0.65 ? 'm' : 's')); d.title = `${tp}: ${Math.round(i.mast * 100)}%`; dots.append(d); });
    const seenTopics = topics.filter(tp => topicInfo(tp).att > 0).length;
    const stats = el('div', 'sx-stats');
    const acc = sess.answered ? Math.round(100 * sess.right / sess.answered) : null;
    stats.append(el('span', '', `${seenTopics}/${topics.length} topics`), el('span', '', sess.answered ? `${sess.answered} answered · ${acc}%` : 'new session'), ...(sess.streak > 1 ? [el('span', 'sx-streak', `streak ${sess.streak}`)] : []));
    const right = el('div', 'sx-right'); right.append(stats, modeSwitch()); t.append(left, dots, right); return t;
  }
  function modeSwitch() {                      // top right: Conceptual / Workout / Mixed
    const g = el('div', 'sx-modes'); g.setAttribute('role', 'radiogroup'); g.setAttribute('aria-label', 'Question mode (Tab switches)'); g.title = 'Tab switches mode';
    MODES.forEach(([id, label]) => { const b = el('button', '', label); b.type = 'button'; b.setAttribute('role', 'radio'); b.setAttribute('aria-checked', String(settings.mode === id)); b.addEventListener('click', () => setMode(id)); g.append(b); });
    return g;
  }
  function setMode(id) {
    if (settings.mode === id) return; settings.mode = id; write(SETTINGS_KEY, settings);
    const untouched = cur && screen === 'question' && !cur.picks.length && !(cur.problem && cur.i > 0);
    if (untouched && ((id === 'concept' && (cur.problem || cur.q.type === 'problem')) || (id === 'workout' && !cur.problem))) next(); else render();
  }
  function cycleMode(dir) { const i = MODES.findIndex(m => m[0] === settings.mode); setMode(MODES[(i + dir + MODES.length) % MODES.length][0]); }
  const typeLabel = t => ({choice: 'one answer', 'multi-select': 'select all', 'true-false': 'true / false', sequence: 'put in order', text: 'short answer'}[t] || t);

  function menu() {
    screen = 'menu'; clearTimer(); cur = null;
    const m = el('div', 'sx-main sx-menu');
    m.append(el('h2', '', 'Study sessions'), el('p', 'sx-sub', 'Questions adapt to what you miss and spread across every topic. Use the keyboard: digits to answer, Enter for next.'));
    const list = el('div', 'sx-banks');
    catalog.forEach((e, i) => {
      const s = store[e.id]; const answered = s ? s.total : 0;
      const b = el('button', 'sx-bank'); b.type = 'button';
      b.append(el('kbd', '', String(i + 1)), el('span', 'sx-bt', e.title), el('span', 'sx-bd', e.description || ''), el('span', 'sx-bm', `${e.questionCount || '?'} questions · ${answered ? answered + ' answered' : 'not started'}`));
      b.addEventListener('click', () => start(e)); list.append(b);
    });
    if (!catalog.length) list.append(el('p', 'sx-msg', 'No study sets are available yet.'));
    m.append(list);
    catalog.filter(e => e.cram).forEach(e => {
      const a = el('a', 'sx-cram'); a.href = e.cram; a.append(el('kbd', '', 'C'), el('span', 'sx-bt', `${e.title.split(' · ')[0]} cram slides`), el('span', 'sx-bd', 'Short slides on every topic with worked examples and a few questions. Prints as a packet.'));
      m.append(a);
    });
    paint(el('div', 'sx-top'), m, actions([['Enter', catalog.length ? 'Start' : '', () => catalog[0] && start(catalog[0])], ...(catalog.some(e => e.cram) ? [['C', 'Cram slides', () => { const e = catalog.find(x => x.cram); if (e) location.href = e.cram; }]] : []), ['H', 'Keys', help]]));
  }

  function openAI() { if (window.CourseAI && window.CourseAI.openSettings) window.CourseAI.openSettings(); }
  function introScreen() {                      // shown once, the first time any session is opened
    screen = 'intro'; clearTimer(); cur = null;
    const m = el('div', 'sx-main sx-intro ctr'), card = el('div', 'sx-card');
    const link = el('a', 'sx-link', 'How it works and how to get a key ↗'); link.href = 'course-docs/ai-setup.html'; link.target = '_blank'; link.rel = 'noopener';
    card.append(el('h2', '', 'Optional: connect an AI provider'),
      el('p', 'sx-sub', 'It adds two things: short written answers graded by meaning, and a tutor you can ask about any question (press ?).'),
      el('p', 'sx-sub', 'Everything else works without it: adaptive questions, explanations and progress. Your key stays in this browser. You can set it up any time from the AI button.'), link);
    m.append(card);
    paint(topBar(), m, actions([['N', 'Not now', () => introDone(false)], ['Y', 'Set up AI', () => introDone(true)]]));
  }
  function introDone(setup) { write(INTRO_KEY, 1); next(); if (setup) openAI(); }

  function next() {
    clearTimer(); askOpen = false; askLog = [];
    const q = pickNext();
    if (q.type === 'problem') { cur = {q, problem: q, i: 0, results: [], picks: [], order: null, chosen: null}; startStep(0); return; }
    cur = {q, picks: [], order: null, chosen: null, t0: Date.now()};
    if (q.type === 'choice' || q.type === 'multi-select') cur.order = shuffle(q.options.slice());
    else if (q.type === 'true-false') cur.order = q.options.slice().sort((a, b) => (a.id === 'true' ? -1 : 1));
    else if (q.type === 'sequence') cur.order = shuffle(q.steps.slice());
    screen = 'question'; render();
  }

  function startStep(i) {
    const p = cur.problem, stp = p.steps[i]; cur.i = i;
    cur.q = {id: stp.id, type: 'choice', topic: p.topic, prompt: stp.prompt, options: stp.options, answer: stp.answer, distractors: stp.distractors, explanation: stp.explanation, resources: [], _step: true};
    cur.order = shuffle(stp.options.slice()); cur.picks = []; cur.chosen = null; cur.result = null; cur.how = null; cur.hi = null;
    screen = 'question'; render();
  }
  function advance() {                          // after feedback: next step, the summary, or the next question
    if (!cur || screen === 'psum' || !cur.problem) return next();
    if (cur.i + 1 < cur.problem.steps.length) return startStep(cur.i + 1);
    const total = cur.problem.steps.length, right = cur.results.filter(x => x === 1).length, frac = right / total;
    cur.sumResult = frac === 1 ? 1 : frac >= 0.5 ? 0.5 : 0; record(cur.problem, cur.sumResult); screen = 'psum'; render();
  }
  function problemPanel() {
    const p = cur.problem, box = el('div', 'sx-pleft');
    const fig = el('figure', 'sx-fig'), img = el('img'); img.src = new URL(p.image.src, document.baseURI).href; img.alt = p.image.alt || ''; fig.append(img);
    const dots = el('div', 'sx-sdots'); p.steps.forEach((x, i) => dots.append(el('span', 'sx-sd ' + (cur.results[i] === 1 ? 'ok' : cur.results[i] === 0 ? 'no' : (i === cur.i && screen !== 'psum' ? 'now' : '')))));
    const crumbs = el('ol', 'sx-crumbs'); cur.results.forEach((r, i) => { if (r !== undefined && !(i === cur.i && screen === 'question')) crumbs.append(el('li', r === 1 ? 'ok' : 'no', p.steps[i].brief || p.steps[i].prompt)); });
    box.append(el('p', 'sx-ptitle', p.prompt), fig, el('p', 'sx-setup', p.setup), dots, crumbs); return box;
  }
  function problemWrap(m) { const w = el('div', 'sx-main sx-prob'); m.className = m.className.replace('sx-main', 'sx-pr'); w.append(problemPanel(), m); return w; }
  function figWrap(m, q) {
    const w = el('div', 'sx-main sx-prob sx-qfig'), box = el('div', 'sx-pleft'), fig = el('figure', 'sx-fig'), img = el('img');
    img.src = new URL(q.image.src, document.baseURI).href; img.alt = q.image.alt || ''; fig.append(img); box.append(fig);
    m.className = m.className.replace('sx-main', 'sx-pr'); w.append(box, m); return w;
  }
  function drawProblemSummary() {
    const p = cur.problem, total = p.steps.length, right = cur.results.filter(x => x === 1).length, m = el('div', 'sx-pr sx-fb ctr');
    m.append(el('div', 'sx-verdict ' + (right === total ? 'ok' : 'no'), right === total ? '✓ Problem complete' : `${right} of ${total} steps right`), el('p', 'sx-exp', p.explanation));
    paint(topBar(), problemWrap(m), actions([['Enter', 'Next question', next], ['Esc', 'Overview', goOverview]]));
  }
  function goOverview() { if (cur) cur.prev = screen; screen = 'overview'; overview(); }
  function resume() { if (!cur) return next(); screen = cur.prev || (cur.result == null && !cur.selfCheck ? 'question' : 'feedback'); render(); }

  function render() {
    if (screen === 'question') drawQuestion();
    else if (screen === 'feedback') drawFeedback();
    else if (screen === 'psum') drawProblemSummary();
    else if (screen === 'overview') overview();
    else menu();
  }

  function drawQuestion() {
    const q = cur.q, m = el('div', 'sx-main ctr'), box = el('div', 'sx-q');
    box.append(el('h2', 'sx-prompt', q.prompt));
    const notes = (q.resources || []).filter(r => r.type === 'text');
    if (notes.length) box.append(el('p', 'sx-note', notes[0].text));
    m.append(box);
    if (q.type === 'text') {
      const ta = el('textarea', 'sx-text'); ta.rows = 4; ta.placeholder = 'Type a short answer, then Enter'; ta.setAttribute('aria-label', 'Your answer');
      ta.addEventListener('keydown', ev => { if (ev.key === 'Enter' && !ev.shiftKey) { ev.preventDefault(); submitText(ta.value); } });
      m.append(ta); setTimeout(() => ta.focus(), 0);
    } else if (q.type === 'sequence') {
      const list = el('div', 'sx-opts');
      cur.order.forEach((s, i) => {
        const b = el('button', 'sx-opt'); b.type = 'button'; b.dataset.id = s.id;
        b.append(el('kbd', '', String(i + 1)), el('span', 'sx-ot', s.text), el('span', 'sx-pos', '')); b.addEventListener('click', () => pickStep(i)); list.append(b);
      });
      m.append(list, el('p', 'sx-hint', 'Press the numbers in the order the steps happen. Backspace undoes.'));
    } else {
      const list = el('div', 'sx-opts' + (isPair(q) ? ' pair' : (cur.order.every(o => o.text.length < 46) ? ' short' : '')));
      cur.order.forEach((o, i) => {
        const b = el('button', 'sx-opt'); b.type = 'button'; b.dataset.i = i;
        b.append(el('kbd', '', q.type === 'true-false' ? (i === 0 ? 'T' : 'F') : String(i + 1)), el('span', 'sx-ot', o.text));
        b.addEventListener('click', () => choose(i)); list.append(b);
      });
      m.append(list);
      if (q.type === 'multi-select') m.append(el('p', 'sx-hint', 'Select every correct answer, then press Enter.'));
    }
    const acts = [['Space', 'Skip', skip], ['R', 'Show answer', reveal], ['Esc', 'Overview', () => { goOverview(); }]];
    if (q.type === 'multi-select') acts.unshift(['Enter', 'Check', submitMulti]);
    const keysBar = actions(acts);
    if (isPair(q)) keysBar.prepend(el('span', 'sx-keyhint', 'Arrows or WASD: first press highlights two answers, second picks (or press a number)'));
    paint(topBar(), cur.problem ? problemWrap(m) : q.image ? figWrap(m, q) : m, keysBar);
  }

  /* ---------- two-press arrow answering ----------
     Options sit in a 2-column grid. First arrow highlights the pair on that side (up = top row,
     down = bottom row, left = left column, right = right column); a pair of one is picked at once.
     The second arrow picks inside the pair; the opposite arrow switches to the other pair. */
  const isPair = q => (q.type === 'choice' || q.type === 'true-false') && q.options.length <= 6;
  function sideCandidates(side) {
    const n = cur.order.length, rows = Math.ceil(n / 2), idx = [...Array(n).keys()];
    if (side === 'up') return idx.filter(i => Math.floor(i / 2) === 0);
    if (side === 'down') return idx.filter(i => Math.floor(i / 2) === rows - 1);
    if (side === 'left') return idx.filter(i => i % 2 === 0);
    return idx.filter(i => i % 2 === 1);
  }
  function showHi() {
    const set = cur.hi ? sideCandidates(cur.hi) : [];
    document.querySelectorAll('.sx-opt').forEach(b => b.classList.toggle('hl', set.includes(+b.dataset.i)));
  }
  function hiClear() { cur.hi = null; showHi(); }
  const opposite = {up: 'down', down: 'up', left: 'right', right: 'left'};
  function arrow(dir) {
    if (screen !== 'question' || !isPair(cur.q)) return;
    if (!cur.hi) {
      const c = sideCandidates(dir);
      if (!c.length) return;
      if (c.length === 1) { choose(c[0]); return; }
      cur.hi = dir; showHi(); return;
    }
    if (dir === cur.hi) return;                                  // same direction again: nothing new
    if (dir === opposite[cur.hi]) {                              // flip to the other pair
      const c = sideCandidates(dir);
      if (c.length === 1) { choose(c[0]); return; }
      cur.hi = dir; showHi(); return;
    }
    const cand = sideCandidates(cur.hi);                         // perpendicular arrow: pick inside the pair
    const horizontal = cur.hi === 'up' || cur.hi === 'down';
    const pickIdx = horizontal
      ? cand.find(i => i % 2 === (dir === 'left' ? 0 : 1))
      : (dir === 'up' ? cand[0] : cand[cand.length - 1]);
    if (pickIdx !== undefined) choose(pickIdx);
  }

  /* ---------- answering ---------- */
  function choose(i) {
    const q = cur.q, o = cur.order[i]; if (!o || screen !== 'question') return;
    if (q.type === 'multi-select') {
      cur.picks = cur.picks.includes(i) ? cur.picks.filter(x => x !== i) : cur.picks.concat(i);
      document.querySelectorAll('.sx-opt').forEach(b => b.classList.toggle('on', cur.picks.includes(+b.dataset.i))); return;
    }
    cur.chosen = o; finish(!!o.correct ? 1 : 0, o);
  }
  function submitMulti() {
    if (screen !== 'question' || cur.q.type !== 'multi-select') return;
    if (!cur.picks.length) return;
    const want = new Set(cur.q.answer.ids), got = new Set(cur.picks.map(i => cur.order[i].id));
    const ok = want.size === got.size && [...want].every(x => got.has(x));
    finish(ok ? 1 : 0, null);
  }
  function pickStep(i) {
    if (screen !== 'question' || cur.q.type !== 'sequence' || cur.picks.includes(i) || !cur.order[i]) return;
    cur.picks.push(i);
    document.querySelectorAll('.sx-opt').forEach(b => { const p = cur.picks.indexOf(cur.order.findIndex(s => s.id === b.dataset.id)); b.classList.toggle('on', p >= 0); b.querySelector('.sx-pos').textContent = p >= 0 ? String(p + 1) : ''; });
    if (cur.picks.length === cur.order.length) {
      const got = cur.picks.map(j => cur.order[j].id), want = cur.q.answer.ids;
      finish(got.every((id, k) => id === want[k]) ? 1 : 0, null);
    }
  }
  function undoStep() { if (screen === 'question' && cur.q.type === 'sequence' && cur.picks.length) { cur.picks.pop(); document.querySelectorAll('.sx-opt').forEach(b => { const p = cur.picks.indexOf(cur.order.findIndex(s => s.id === b.dataset.id)); b.classList.toggle('on', p >= 0); b.querySelector('.sx-pos').textContent = p >= 0 ? String(p + 1) : ''; }); } }
  async function submitText(value) {
    const v = (value || '').trim(); if (!v || screen !== 'question') return;
    cur.typed = v;
    if (aiReady('decision') && window.CourseAI && window.CourseAI.decide) {
      paintMessage('Checking your answer…');
      try {
        const res = await window.CourseAI.decide({
          input: {question: cur.q.prompt, student_answer: v, expected_answer: cur.q.answer.text, rubric: cur.q.rubric || [], context: cur.q.gradingContext || ''},
          questions: [{name: 'meets_answer_key', type: 'predicate', instructions: 'Does the student response demonstrate the key conceptual points in the expected answer and rubric? Accept equivalent wording and correct reasoning. Do not require calculations.'}]});
        const a = res.answers && res.answers.meets_answer_key || {}; const p = Number(a.noul ?? a.probability ?? 0);
        cur.judged = true; finish(p >= 0.72 ? 1 : 0, null); return;
      } catch (e) { /* fall back to self-check below */ }
    }
    cur.selfCheck = true; screen = 'feedback'; render();
  }
  function skip() { if (screen === 'question') finish(0.25, null, 'skipped'); }
  function reveal() { if (screen === 'question') finish(0.25, null, 'revealed'); }
  function finish(result, chosen, how) {
    cur.result = result; cur.how = how || null; cur.chosen = chosen || cur.chosen;
    if (cur.problem) { cur.results[cur.i] = result >= 1 ? 1 : 0; screen = 'feedback'; render(); if (result >= 1 && settings.auto) startAuto(); return; }
    if (!cur.selfCheck) record(cur.q, result);
    screen = 'feedback'; render();
    if (result >= 1 && settings.auto && !cur.selfCheck) { startAuto(); }
  }
  function rate(result) { if (screen === 'feedback' && cur.selfCheck && cur.result == null) { cur.result = result; record(cur.q, result); cur.selfCheck = false; cur.rated = true; drawFeedback(); } }

  /* ---------- feedback ---------- */
  function answerText(q) {
    if (q.type === 'choice' || q.type === 'true-false') return q.answer.text;
    if (q.type === 'multi-select') return q.options.filter(o => o.correct).map(o => o.text).join('  •  ');
    if (q.type === 'sequence') return q.answer.ids.map(id => q.steps.find(s => s.id === id).text).map((t, i) => `${i + 1}. ${t}`).join('  ');
    return q.answer.text;
  }
  function ansBlock(q) {
    if (q.type !== 'sequence') return el('p', 'sx-ans', answerText(q));
    const ol = el('ol', 'sx-ans sx-seq');
    q.answer.ids.forEach(id => ol.append(el('li', '', q.steps.find(x => x.id === id).text)));
    return ol;
  }
  function whyWrong(q) {
    if (cur.chosen && !cur.chosen.correct) {
      const d = (q.distractors || []).find(x => x.id === cur.chosen.id);
      return {pick: cur.chosen.text, why: [d && d.misconception, cur.chosen.rationale || (d && d.rationale)].filter(Boolean).join(' ')};
    }
    if (q.type === 'multi-select' && cur.picks.length) {
      const bad = cur.picks.map(i => cur.order[i]).filter(o => !o.correct), miss = q.options.filter(o => o.correct && !cur.picks.map(i => cur.order[i].id).includes(o.id));
      return {pick: bad.length ? bad.map(o => o.text).join('  •  ') : null, why: [...bad.map(o => o.rationale), miss.length ? 'Missed: ' + miss.map(o => o.text).join('  •  ') : ''].filter(Boolean).join(' ')};
    }
    return null;
  }
  function drawFeedback() {
    clearTimer(); const q = cur.q, m = el('div', 'sx-main sx-fb ctr');
    const ok = cur.result >= 1, partial = cur.result > 0 && cur.result < 1;
    if (cur.selfCheck && cur.result == null) {
      m.append(el('div', 'sx-verdict', 'Compare with the reference answer'), el('p', 'sx-yours', cur.typed || ''), ansBlock(q));
      (q.rubric || []).length && m.append(el('p', 'sx-note', 'Look for: ' + q.rubric.join('; ')));
      paint(topBar(), m, actions([['1', 'Got it', () => rate(1)], ['2', 'Partly', () => rate(0.5)], ['3', 'Missed', () => rate(0)]])); return;
    }
    const v = el('div', 'sx-verdict ' + (ok ? 'ok' : 'no'), ok ? '✓ Correct' : cur.how === 'skipped' ? 'Skipped — here is the answer' : cur.how === 'revealed' ? 'Here is the answer' : partial ? 'Partly right' : '✗ Not quite');
    m.append(v);
    if (!ok || cur.how) m.append(ansBlock(q));
    const w = !ok && !cur.how ? whyWrong(q) : null;
    if (w) { if (w.pick) m.append(el('p', 'sx-yours', 'You chose: ' + w.pick)); if (w.why) m.append(el('p', 'sx-why', w.why)); }
    m.append(el('p', 'sx-exp', q.explanation));
    const links = ((cur.problem || q).resources || []).filter(r => r.type === 'link');
    const acts = [['Enter', cur.problem && screen === 'feedback' ? (cur.i + 1 < cur.problem.steps.length ? 'Next step' : 'Finish') : 'Next', advance]];
    if (links.length) { acts.push(['G', links[0].label || 'Open guide', () => openGuide(links[0])]); }
    if (ok && settings.auto && !cur.rated) { const bar = el('div', 'sx-bar'); bar.append(el('i')); m.append(bar); }
    if (askOpen) m.append(askBox());
    acts.push(['?', 'Ask', toggleAsk], ['Esc', 'Overview', () => { goOverview(); }]);
    paint(topBar(), cur.problem ? problemWrap(m) : q.image ? figWrap(m, q) : m, actions(acts));
    if (askOpen) { const i = $('.sx-ask input'); i && i.focus(); }
  }
  function startAuto() {
    const bar = $('.sx-bar i'); if (bar) { bar.style.transition = 'width 1.7s linear'; requestAnimationFrame(() => { bar.style.width = '100%'; }); }
    timer = setTimeout(() => { if (screen === 'feedback') advance(); }, 1700);
  }
  function openGuide(l) { try { window.open(new URL(l.href, document.baseURI).href, '_blank', 'noopener'); } catch (e) { /* ignore */ } }

  /* ---------- ask (optional AI) ---------- */
  function toggleAsk() {
    if (screen !== 'feedback') return;
    if (!aiReady('text')) { flash('Add a text-provider key with the AI button to ask questions.'); return; }
    clearTimer(); askOpen = !askOpen; drawFeedback();
  }
  function askBox() {
    const b = el('div', 'sx-ask'); const log = el('div', 'sx-asklog');
    askLog.forEach(mm => log.append(el('p', mm.role, mm.content)));
    const inp = el('input'); inp.type = 'text'; inp.placeholder = 'Ask about this question, then Enter (Esc closes)'; inp.setAttribute('aria-label', 'Ask a question');
    inp.addEventListener('keydown', ev => {
      ev.stopPropagation();
      if (ev.key === 'Escape') { askOpen = false; drawFeedback(); }
      if (ev.key === 'Enter' && inp.value.trim()) sendAsk(inp.value.trim());
    });
    b.append(log, inp); return b;
  }
  function sendAsk(text) {
    const q = cur.q; askLog.push({role: 'u', content: text}); askLog.push({role: 'a', content: 'Thinking…'}); drawFeedback();
    window.CourseAI.complete({
      system: 'You are a patient ECE 321 Electronics I tutor. Use only the supplied question, answer and explanation as course evidence. Clarify concepts and the next solution step in a few sentences; do not do the student\'s calculations.',
      messages: [{role: 'user', content: `Question: ${q.prompt}\nAnswer: ${answerText(q)}\nExplanation: ${q.explanation}\n\nStudent asks: ${text}`}]
    }).then(r => { askLog[askLog.length - 1].content = r.text || 'No answer was returned.'; })
      .catch(e => { askLog[askLog.length - 1].content = e.message || 'Could not reach the text provider.'; })
      .finally(() => { if (screen === 'feedback') drawFeedback(); });
  }
  function flash(msg) { const k = $('.sx-keys'); if (!k) return; const f = el('span', 'sx-flash', msg); k.prepend(f); setTimeout(() => f.remove(), 2600); }

  /* ---------- overview / help ---------- */
  function overview() {
    clearTimer(); screen = 'overview';
    const m = el('div', 'sx-main sx-over'); const grid = el('div', 'sx-grid');
    const infos = topics.map(topicInfo);
    infos.forEach(i => {
      const row = el('div', 'sx-row'); const name = el('span', 'sx-rn', i.t);
      const bar = el('span', 'sx-rb'); const f = el('i', i.att === 0 ? 'u' : i.mast < 0.4 ? 'w' : i.mast < 0.65 ? 'm' : 's'); f.style.width = Math.round(i.mast * 100) + '%'; bar.append(f);
      row.append(name, bar, el('span', 'sx-rp', i.att ? `${Math.round(i.mast * 100)}%` : '–'), el('span', 'sx-rs', `${i.seen}/${i.size}`)); grid.append(row);
    });
    const weak = infos.filter(i => i.att > 0).sort((a, b) => a.mast - b.mast).slice(0, 3).map(i => i.t);
    m.append(grid, el('p', 'sx-sub', (weak.length ? 'Weakest so far: ' + weak.join('; ') + '. ' : '') + (focusMode ? 'Focus mode is ON: only your weakest topics.' : 'Questions already lean toward weak topics; focus mode makes it strict.')));
    paint(topBar(), m, actions([['Enter', 'Resume', resume], ['F', focusMode ? 'Focus: on' : 'Focus weak topics', toggleFocus], ['A', settings.auto ? 'Auto-continue: on' : 'Auto-continue: off', toggleAuto], ['M', 'Menu', menu], ['I', 'AI setup', openAI], ['X', resetArmed ? 'Press X again to erase progress' : 'Reset', resetProgress], ['H', 'Keys', help]]));
  }
  function toggleFocus() { focusMode = !focusMode; overview(); }
  function toggleAuto() { settings.auto = !settings.auto; write(SETTINGS_KEY, settings); overview(); }
  function resetProgress() {
    if (!resetArmed) { resetArmed = true; overview(); setTimeout(() => { resetArmed = false; }, 4000); return; }
    delete store[bank.id]; save(); st = bankState(bank.id); sess.answered = sess.right = sess.streak = 0; resetArmed = false; last = null; cur = null; overview();
  }
  function help() {
    clearTimer(); const prev = screen; const m = el('div', 'sx-main sx-help');
    const rows = [['↑ ← ↓ →  or  W A S D', 'Single choice: first press highlights two answers, second picks one'], ['1 – 9  /  T F', 'Answer by number (true/false: T or F)'], ['Enter', 'Next question, or check a multi-select'], ['Space', 'Pause the auto-continue to read the explanation'], ['Space / N', 'Skip'], ['R', 'Show the answer'], ['G', 'Open the lesson guide for this question'], ['I', 'AI setup (from the overview or menu)'], ['?', 'Ask about the question (needs an AI key)'], ['Tab', 'Switch mode: Conceptual / Workout (multi-step problems) / Mixed'], ['Esc', 'Overview: topic mastery, focus mode, reset'], ['Backspace', 'Undo a pick in ordering questions']];
    const l = el('div', 'sx-keylist'); rows.forEach(([k, t]) => { l.append(el('kbd', '', k), el('span', '', t)); });
    m.append(el('h2', '', 'Keys'), l);
    helpReturn = prev; screen = 'help'; paint(topBar(), m, actions([['Esc', 'Back', () => { screen = helpReturn === 'help' ? 'menu' : helpReturn; render(); }]]));
  }
  let helpReturn = 'menu';

  /* ---------- fitting: nothing scrolls ---------- */
  function fit(main) {
    if (!main) return; main.style.setProperty('--fs', '1');
    let s = 1; main.style.overflow = 'hidden';
    for (let i = 0; i < 14 && main.scrollHeight > main.clientHeight + 1 && s > 0.62; i++) { s -= 0.03; main.style.setProperty('--fs', s.toFixed(2)); }
    if (main.scrollHeight > main.clientHeight + 1) main.style.overflow = 'auto';
  }
  addEventListener('resize', () => { const m = $('.sx-main'); fit(m); });

  /* ---------- keyboard ---------- */
  function dialogOpen() { return !!document.querySelector('dialog[open]'); }
  function active() { const v = $('#study'); return v && !v.hidden && /^#study/.test(location.hash); }
  document.addEventListener('keydown', e => {
    if (!active() || dialogOpen() || e.ctrlKey || e.metaKey || e.altKey) return;
    const tag = (e.target.tagName || '').toLowerCase(); const typing = tag === 'input' || tag === 'textarea' || tag === 'select';
    if (typing) { if (e.key === 'Escape' && tag === 'textarea') { e.preventDefault(); goOverview(); } return; }
    const k = e.key, K = k.length === 1 ? k.toLowerCase() : k;
    const take = () => e.preventDefault();
    if (k === 'Tab' && (screen === 'question' || screen === 'feedback' || screen === 'psum' || screen === 'overview')) { take(); cycleMode(e.shiftKey ? -1 : 1); return; }
    if (screen === 'menu') {
      if (k === 'Enter') { take(); catalog[0] && start(catalog[0]); }
      else if (/^[1-9]$/.test(k) && catalog[+k - 1]) { take(); start(catalog[+k - 1]); }
      else if (K === 'a') { take(); openAI(); }
      else if (K === 'c' && catalog.some(x => x.cram)) { take(); location.href = catalog.find(x => x.cram).cram; }
      else if (K === 'h' || k === '?') { take(); help(); }
      return;
    }
    if (screen === 'intro') { if (K === 'y') { take(); introDone(true); } else if (K === 'n' || k === 'Enter' || k === 'Escape') { take(); introDone(false); } return; }
    if (screen === 'help') { if (k === 'Escape' || k === 'Enter' || K === 'h') { take(); screen = helpReturn === 'help' ? 'menu' : helpReturn; render(); } return; }
    if (screen === 'psum') {
      if (k === 'Enter' || k === 'ArrowRight' || K === 'n' || k === ' ') { take(); next(); }
      else if (k === 'Escape') { take(); goOverview(); } else if (K === 'h') { take(); help(); }
      return;
    }
    if (screen === 'overview') {
      if (k === 'Enter' || k === 'Escape' || k === ' ') { take(); resume(); }
      else if (K === 'f') { take(); toggleFocus(); } else if (K === 'a') { take(); toggleAuto(); } else if (K === 'm') { take(); menu(); }
      else if (K === 'x') { take(); resetProgress(); } else if (K === 'i') { take(); openAI(); } else if (K === 'h' || k === '?') { take(); help(); }
      return;
    }
    if (screen === 'question') {
      const q = cur.q;
      if ((k === 'Escape' || k === 'Backspace') && cur.hi) { take(); hiClear(); }
      else if (k === 'Escape') { take(); goOverview(); }
      else if (isPair(q) && k.indexOf('Arrow') === 0) { take(); arrow(k.slice(5).toLowerCase()); }
      else if (isPair(q) && !e.shiftKey && 'wasd'.indexOf(K) >= 0 && K.length === 1) { take(); arrow({w: 'up', a: 'left', s: 'down', d: 'right'}[K]); }   // WASD = arrow keys
      else if ((k === ' ' || K === 'n') && q.type !== 'text') { take(); skip(); }
      else if (K === 'r' && q.type !== 'text') { take(); reveal(); }
      else if (K === 'h' || k === '?') { take(); help(); }
      else if (q.type === 'multi-select' && k === 'Enter') { take(); submitMulti(); }
      else if (q.type === 'sequence' && k === 'Backspace') { take(); undoStep(); }
      else if (q.type === 'sequence' && /^[1-9]$/.test(k)) { take(); pickStep(+k - 1); }
      else if (q.type === 'true-false' && (K === 't' || K === 'f')) { take(); choose(K === 't' ? 0 : 1); }
      else if ((q.type === 'choice' || q.type === 'true-false' || q.type === 'multi-select') && /^[1-9]$/.test(k)) { take(); choose(+k - 1); }
      return;
    }
    if (screen === 'feedback') {
      if (cur.selfCheck && cur.result == null) { if (k === '1') rate(1); else if (k === '2') rate(0.5); else if (k === '3') rate(0); return; }
      if (k === 'Enter' || k === 'ArrowRight' || K === 'n') { take(); advance(); }
      else if (k === ' ' || K === 'e' || k === 'ArrowDown') { take(); clearTimer(); const b = $('.sx-bar'); b && b.remove(); }
      else if (K === 'g') { take(); const l = ((cur.problem || cur.q).resources || []).find(r => r.type === 'link'); l && openGuide(l); }
      else if (k === '?') { take(); toggleAsk(); }
      else if (k === 'Escape') { take(); goOverview(); }
      else if (K === 'h') { take(); help(); }
    }
  });

  /* ---------- init ---------- */
  function autoFromHash() {
    const m = /^#study\/([\w-]+)/.exec(location.hash); if (!m) return;
    const e = catalog.find(x => x.id === m[1]); if (e && (!bank || bank.id !== e.id)) start(e);
  }
  function init() {
    if (!$('#sx')) return;
    menu(); autoFromHash();
    addEventListener('hashchange', () => { autoFromHash(); const m = $('.sx-main'); setTimeout(() => fit(m), 0); });
  }
  window.CourseStudy = Object.freeze({
    registerBank(b) { if (b && b.id) registry[b.id] = b; },
    open(id) { const e = catalog.find(x => x.id === id); if (e) return start(e); }
  });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once: true}); else init();
})();
