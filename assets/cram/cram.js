/* ECE 321 cram pages: a keyboard-first slide deck with in-slide questions and a printable packet.
   A deck registers with window.CourseCram.registerDeck({...}) (see assets/cram/decks/ and
   relevant_skills/cram_page_skill.md). Progress is saved in this browser (localStorage). */
(() => {
  'use strict';

  const KEY = 'ece321-cram-v1';
  const decks = window.CourseCramDecks = window.CourseCramDecks || {};
  const banks = window.CourseStudyBanks = window.CourseStudyBanks || {};
  if (!window.CourseStudy) window.CourseStudy = {registerBank(b) { if (b && b.id) banks[b.id] = b; }};   // lets the study banks load here
  window.CourseCram = {registerDeck(d) { if (d && d.id) decks[d.id] = d; }, buildPacket: (o) => buildPacket(o), state: () => ({pos, flat: flat.length})};

  const $ = s => document.querySelector(s);
  const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x));
  const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const read = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } };
  const store = read();
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) { /* private mode */ } };

  let deck = null, flat = [], topics = [], prog = null, pos = 0, BASE = '../', bank = null;
  let qs = null, mode = 'slide';        // mode: slide | done
  let sideFocus = -1;

  /* ---------- inline text: **bold** ---------- */
  /* course symbols in running text: R_L, V_DD, g_m ... (italic base, upright subscript) */
  const SYMS = ('Avo Avo1 Avo2 Av Av1 Av2 Av3 Gv Ri Ro Ri1 Ri2 Ro1 Ro2 RL RS RD RC RE RG1 RG2 RB1 RB2 RS1 RS2 Rin Rth Rtest Rpot gm gm1 gm2 ro rπ Kn Vt VDD VCC VGS VDS VGD VOV Vov VG VS VD VT VA VBE VCE VRC VRE VRS VRD Vth ' +
    'ID IC IB IE iD iC iB iE ig IG IL IRB1 IRB2 vgs vds vin vo vi vs vd vg vbe Vpk Vpp Vrms Pdiss PD VGS,B VDS,B Vov,B ID,min ID,max IL,pk IRS,max vgs,pk vg,pk vd,pk ids,pk vds,pk VD,max VD,min Vo,pk Vload,pp Vin,pp Vout,pp VRS,min').split(' ');
  const SYMRE = new RegExp('(?<![A-Za-z0-9_])(' + SYMS.slice().sort((a, b) => b.length - a.length).join('|') + ')(?![A-Za-z0-9])', 'g');   // symbols hold only letters, digits and commas
  function symbolize(text) {
    const f = document.createDocumentFragment(); let last = 0, m; SYMRE.lastIndex = 0;
    while ((m = SYMRE.exec(text))) {
      if (m.index > last) f.append(document.createTextNode(text.slice(last, m.index)));
      const v = el('i', 'cr-v'); v.append(document.createTextNode(m[1][0])); if (m[1].length > 1) v.append(el('sub', '', m[1].slice(1))); f.append(v); last = m.index + m[1].length;
    }
    if (last < text.length) f.append(document.createTextNode(text.slice(last)));
    return f;
  }
  function fmt(text) {
    const f = document.createDocumentFragment();
    String(text).split('**').forEach((part, i) => { if (!part) return; if (i % 2) { const b = el('b'); b.append(symbolize(part)); f.append(b); } else f.append(symbolize(part)); });
    return f;
  }
  const withFmt = (tag, cls, text) => { const e = el(tag, cls); e.append(fmt(text)); return e; };
  /* a trailing "@S3 §4" tags a formula as printed on the official equation sheet (sheet 3, section 4) */
  const MARK = /\s*@S(\d)(?:\s*§\s*([\w.,\- ]+?))?\s*$/;
  const sheetChip = (n, sec) => { const c = el('span', 'cr-sheet', `Sheet ${n}${sec ? ' §' + sec : ''}`); c.title = `Printed on Equation Sheet ${n}${sec ? ', section ' + sec : ''}`; return c; };
  function eqRow(l) {
    if (typeof l === 'string') return marked('div', 'cr-eqrow', l);
    const row = el('div', 'cr-eqrow'); if (l.label) row.append(withFmt('span', 'cr-eql', l.label));
    const m = el('span', 'cr-math'); m.innerHTML = l.math; row.append(m);
    if (l.note) row.append(withFmt('span', 'cr-eqn', l.note));
    if (l.sheet) { const k = String(l.sheet).match(/^S(\d)(?:\s*§\s*(.+))?$/); row.append(sheetChip(k[1], k[2])); }
    return row;
  }
  function marked(tag, cls, text) {
    const m = String(text).match(MARK), e = withFmt(tag, cls, m ? String(text).replace(MARK, '') : text);
    if (m) { e.classList.add('has-sheet'); e.append(sheetChip(m[1], m[2])); }
    return e;
  }
  const url = src => new URL(BASE + src, document.baseURI).href;

  /* ---------- blocks (shared by the slides and the printed packet) ---------- */
  function block(b) {
    switch (b.t) {
      case 'p': return withFmt('p', 'cr-p', b.text);
      case 'ul': { const u = el('ul', 'cr-ul'); b.items.forEach(i => u.append(marked('li', '', i))); return u; }
      case 'eq': { const d = el('div', 'cr-eq'); b.lines.forEach(l => d.append(eqRow(l))); return d; }
      case 'call': { const d = el('div', 'cr-call ' + (b.kind || 'rule')), m = String(b.text).match(MARK); d.append(el('span', 'cr-ck', ({rule: 'Rule of thumb', watch: 'Watch out', tip: 'Remember', why: 'Why'})[b.kind || 'rule']), fmt(m ? String(b.text).replace(MARK, '') : b.text)); if (m) { d.classList.add('has-sheet'); d.append(sheetChip(m[1], m[2])); } return d; }
      case 'given': { const d = el('div', 'cr-given'); d.append(el('span', 'cr-ck', 'Given')); b.items.forEach(i => d.append(el('span', 'cr-chip', i))); return d; }
      case 'tbl': {
        const t = el('table', 'cr-tbl'), h = el('thead'), r = el('tr');
        b.head.forEach(x => r.append(withFmt('th', '', x))); h.append(r); t.append(h);
        const tb = el('tbody'); b.rows.forEach(row => { const tr = el('tr'); row.forEach((c, i) => tr.append(withFmt(i === 0 ? 'th' : 'td', '', c))); tb.append(tr); }); t.append(tb);
        if (!b.sheet) return t;
        const w = el('div', 'cr-tblw'); const m = String(b.sheet).match(/^S(\d)(?:\s*§\s*(.+))?$/); w.append(t, el('div', 'cr-tnote')); w.lastChild.append(sheetChip(m[1], m[2]), document.createTextNode(' this table is on the equation sheet')); return w;
      }
      case 'steps': {
        const o = el('ol', 'cr-steps');
        b.items.forEach(s => { const li = el('li'); li.append(el('span', 'cr-sh', s.h)); li.append(marked('span', 'cr-st', s.text)); if (s.res) li.append(marked('span', 'cr-res', s.res)); o.append(li); });
        return o;
      }
      case 'fig': {
        const f = el('figure', 'cr-fig'), i = el('img'); i.src = url(b.src); i.alt = b.alt || ''; f.append(i);
        if (b.caption) f.append(el('figcaption', '', b.caption)); return f;
      }
      default: return el('div');
    }
  }
  function slideBody(s) {                    // text blocks beside the figure(s)
    const figs = s.blocks.filter(b => b.t === 'fig'), rest = s.blocks.filter(b => b.t !== 'fig');
    const wrap = el('div', 'cr-body' + (figs.length ? ' has-fig' : ''));
    const text = el('div', 'cr-text'); rest.forEach(b => text.append(block(b))); wrap.append(text);
    if (figs.length) { const v = el('div', 'cr-vis'); figs.forEach(b => v.append(block(b))); wrap.append(v); }
    return wrap;
  }

  /* ---------- deck setup ---------- */
  function setup() {
    deck = decks[document.body.dataset.deck]; if (!deck) return false;
    BASE = document.body.dataset.base || '../';
    bank = deck.bank ? banks[deck.bank] : null;
    topics = deck.topics; flat = [];
    topics.forEach((t, ti) => t.slides.forEach((s, si) => flat.push(Object.assign({}, s, {topic: ti, idx: si, last: si === t.slides.length - 1}))));
    prog = store[deck.id] || (store[deck.id] = {done: {}, ans: {}, last: null});
    const li = flat.findIndex(s => s.id === prog.last);
    const hash = decodeURIComponent((location.hash || '').slice(1));
    const hi = hash ? flat.findIndex(s => s.id === hash || s.id.startsWith(hash + '-1')) : -1;
    pos = hi >= 0 ? hi : (li >= 0 ? li : 0);
    return true;
  }
  const slidesOf = ti => flat.filter(s => s.topic === ti);
  const topicDone = ti => { const ss = slidesOf(ti); return ss.filter(s => prog.done[s.id]).length; };
  const qOf = id => bank && bank.questions.find(q => q.id === id);

  /* ---------- sidebar ---------- */
  function drawSide() {
    const side = $('#cr-side'); side.replaceChildren();
    side.append(el('div', 'cr-brand', deck.title), el('div', 'cr-sub', deck.subtitle));
    const list = el('ol', 'cr-topics'); list.setAttribute('role', 'listbox'); list.setAttribute('aria-label', 'Topics');
    const curTopic = flat[pos] ? flat[pos].topic : -1;
    topics.forEach((t, i) => {
      const n = slidesOf(i).length, d = topicDone(i), li = el('li');
      const b = el('button', 'cr-topic' + (i === curTopic && mode === 'slide' ? ' cur' : '') + (d === n ? ' done' : d ? ' part' : '') + (i === sideFocus ? ' focus' : ''));
      b.type = 'button'; b.setAttribute('role', 'option'); b.dataset.i = i;
      const mark = el('span', 'cr-mark', d === n ? '✓' : d ? '◐' : '○');
      b.title = t.title; b.append(el('span', 'cr-num', String(i + 1)), el('span', 'cr-tt', t.title), mark);
      b.addEventListener('click', () => goTopic(i)); li.append(b); list.append(li);
    });
    side.append(list);
    const total = flat.length, done = flat.filter(s => prog.done[s.id]).length;
    const meter = el('div', 'cr-meter'), bar = el('i'); bar.style.width = Math.round(100 * done / total) + '%'; meter.append(bar);
    const foot = el('div', 'cr-sfoot');
    foot.append(el('div', 'cr-pct', `${Math.round(100 * done / total)}% complete`), meter);
    const pr = el('button', 'cr-btn', ''); pr.type = 'button'; pr.append(el('kbd', '', 'P'), document.createTextNode('Print')); pr.addEventListener('click', openPrint);
    const st = el('a', 'cr-btn'); st.href = BASE + (deck.studyHref || 'index.html#study'); st.append(el('kbd', '', 'S'), document.createTextNode('Study'));
    const hp = el('button', 'cr-btn'); hp.type = 'button'; hp.append(el('kbd', '', 'H'), document.createTextNode('Keys')); hp.addEventListener('click', help);
    foot.append(pr, st, hp); side.append(foot);
  }

  /* ---------- screens ---------- */
  function fit(main) {
    if (!main) return; main.style.setProperty('--fs', '1'); main.style.overflow = 'hidden';
    const over = () => main.scrollHeight > main.clientHeight + 1 || main.scrollWidth > main.clientWidth + 1;
    let s = 1; for (let i = 0; i < 18 && over() && s > 0.52; i++) { s -= 0.03; main.style.setProperty('--fs', s.toFixed(2)); }
    if (over()) main.style.overflow = 'auto';
  }
  function paintMain(topInfo, stage, keys) {
    const m = $('#cr-main'); m.replaceChildren(topInfo, stage, keys); fit(stage);
    stage.querySelectorAll('img').forEach(i => { if (!i.complete) i.addEventListener('load', () => fit(stage), {once: true}); });   // diagrams change the height when they arrive
  }
  function keysBar(list) {
    const k = el('div', 'cr-keys');
    list.forEach(([key, label, fn]) => { const b = el('button', 'cr-act'); b.type = 'button'; b.append(el('kbd', '', key), document.createTextNode(label)); b.addEventListener('click', fn); k.append(b); });
    return k;
  }
  function infoBar(s) {
    const t = el('div', 'cr-top'), tp = topics[s.topic];
    const left = el('div', 'cr-crumb'); left.append(el('span', 'cr-kick', `Topic ${s.topic + 1} of ${topics.length}`), el('span', 'cr-ttl', tp.title));
    const right = el('div', 'cr-count'); const kind = ({example: 'Worked example', q: 'Question', workout: 'Workout'})[s.kind];
    if (kind) right.append(el('span', 'cr-tag ' + s.kind, kind));
    right.append(el('span', '', `${s.idx + 1} / ${slidesOf(s.topic).length}`));
    t.append(left, right); return t;
  }
  function draw() {
    drawSide();
    if (mode === 'done') return drawDone();
    const s = flat[pos]; prog.last = s.id; save(); qs = null;
    try { history.replaceState(null, '', '#' + s.id); } catch (e) { /* file: urls */ }
    if (s.kind === 'q' || s.kind === 'workout') return drawQuestion(s);
    const stage = el('div', 'cr-stage'); stage.append(withFmt('h2', 'cr-h', s.title), slideBody(s));
    if (s.kind === 'example') stage.classList.add('ex');
    const acts = [['←', 'Back', () => go(-1)], ['→', s.last && s.topic === topics.length - 1 ? 'Finish' : (s.last ? 'Next topic' : 'Next'), () => go(1)], ['R', 'Redo topic', () => redo(s.topic)]];
    const kb = keysBar(acts); if (stage.querySelector('.cr-sheet')) { const lg = el('span', 'cr-legend'); lg.append(sheetChip(3, ''), document.createTextNode(' tags mark formulas printed on the official equation sheet')); lg.firstChild.textContent = 'Sheet'; kb.append(lg); }
    paintMain(infoBar(s), stage, kb);
    const cur = $('.cr-topic.cur'); cur && cur.scrollIntoView({block: 'nearest'});
  }
  function drawDone() {
    const stage = el('div', 'cr-stage cr-end');
    stage.append(el('h2', 'cr-h', `${deck.title}: complete`), el('p', 'cr-p', 'Every topic is done. Redo any topic from the left, print the packet, or switch to practice questions.'));
    const t = el('div', 'cr-top'); t.append(el('div', 'cr-crumb', ''), el('div', 'cr-count', ''));
    paintMain(t, stage, keysBar([['←', 'Back', () => { mode = 'slide'; pos = flat.length - 1; draw(); }], ['P', 'Print packet', openPrint], ['S', 'Study session', () => { location.href = BASE + (deck.studyHref || 'index.html#study'); }]]));
  }

  /* ---------- navigation and progress ---------- */
  function go(d) {
    if (mode === 'done') { if (d < 0) { mode = 'slide'; pos = flat.length - 1; draw(); } return; }
    const s = flat[pos];
    if (d > 0) {
      if ((s.kind === 'q' || s.kind === 'workout') && !prog.done[s.id]) return;       // answer or skip first
      prog.done[s.id] = 1; save();
      if (pos === flat.length - 1) { mode = 'done'; draw(); return; }
      pos++;
    } else if (pos > 0) pos--;
    draw();
  }
  function goTopic(ti) { mode = 'slide'; sideFocus = -1; const first = flat.findIndex(s => s.topic === ti); const next = flat.findIndex(s => s.topic === ti && !prog.done[s.id]); pos = next >= 0 ? next : first; draw(); }
  function redo(ti) {
    slidesOf(ti).forEach(s => { delete prog.done[s.id]; if (s.ref) delete prog.ans[s.ref]; });
    save(); mode = 'slide'; pos = flat.findIndex(s => s.topic === ti); draw();
  }

  /* ---------- questions (same interaction as the study sessions) ---------- */
  const isPair = q => (q.type === 'choice' || q.type === 'true-false') && q.options.length <= 6;
  function drawQuestion(s) {
    const src = qOf(s.ref);
    if (!src) { const stage = el('div', 'cr-stage'); stage.append(el('h2', 'cr-h', 'Question unavailable'), el('p', 'cr-p', 'The question set did not load.')); paintMain(infoBar(s), stage, keysBar([['→', 'Next', () => { prog.done[s.id] = 1; go(1); }]])); return; }
    qs = {slide: s, src, stepI: 0, results: [], answered: !!prog.done[s.id] && false, picks: [], hi: null, chosen: null};
    if (src.type === 'problem') startStep(0); else startPlain();
  }
  function startPlain() {
    const q = qs.src; qs.q = q; qs.order = (q.type === 'multi-select' || q.type === 'choice') ? shuffle(q.options.slice()) : q.type === 'true-false' ? q.options.slice().sort(a => a.id === 'true' ? -1 : 1) : q.type === 'sequence' ? shuffle(q.steps.slice()) : null;
    qs.phase = 'ask'; qs.picks = []; qs.hi = null; qs.chosen = null; paintQuestion();
  }
  function startStep(i) {
    const p = qs.src, st = p.steps[i]; qs.stepI = i;
    qs.q = {id: st.id, type: 'choice', prompt: st.prompt, options: st.options, answer: st.answer, distractors: st.distractors, explanation: st.explanation};
    qs.order = shuffle(st.options.slice()); qs.phase = 'ask'; qs.picks = []; qs.hi = null; qs.chosen = null; paintQuestion();
  }
  function paintQuestion() {
    const s = qs.slide, q = qs.q, prob = qs.src.type === 'problem';
    const stage = el('div', 'cr-stage cr-qstage' + (prob ? ' cr-prob' : ''));
    const body = el('div', 'cr-qbody');
    if (qs.phase === 'ask') {
      body.append(el('h2', 'sx-prompt', q.prompt));
      if (q.type === 'sequence') {
        const list = el('div', 'sx-opts');
        qs.order.forEach((x, i) => { const b = el('button', 'sx-opt'); b.type = 'button'; b.dataset.id = x.id; b.append(el('kbd', '', String(i + 1)), el('span', 'sx-ot', x.text), el('span', 'sx-pos')); b.addEventListener('click', () => pickStep(i)); list.append(b); });
        body.append(list, el('p', 'sx-hint', 'Press the numbers in the order the steps happen. Backspace undoes.'));
      } else {
        const list = el('div', 'sx-opts' + (isPair(q) ? ' pair' : ''));
        qs.order.forEach((o, i) => { const b = el('button', 'sx-opt'); b.type = 'button'; b.dataset.i = i; b.append(el('kbd', '', q.type === 'true-false' ? (i === 0 ? 'T' : 'F') : String(i + 1)), el('span', 'sx-ot', o.text)); b.addEventListener('click', () => choose(i)); list.append(b); });
        body.append(list); if (q.type === 'multi-select') body.append(el('p', 'sx-hint', 'Select every correct answer, then press Enter.'));
      }
    } else {
      const ok = qs.last >= 1;
      body.append(el('div', 'sx-verdict ' + (ok ? 'ok' : 'no'), ok ? '✓ Correct' : qs.how === 'skip' ? 'Skipped: here is the answer' : '✗ Not quite'));
      if (!ok) body.append(el('p', 'sx-ans', answerText(q)));
      if (!ok && qs.how !== 'skip') { const w = whyWrong(q); if (w) { if (w.pick) body.append(el('p', 'sx-yours', 'You chose: ' + w.pick)); if (w.why) body.append(el('p', 'sx-why', w.why)); } }
      body.append(el('p', 'sx-exp', q.explanation));
    }
    let content = body;
    const hasFig = prob || !!qs.src.image;
    if (hasFig) {
      const left = el('div', 'cr-pleft'), fig = el('figure', 'cr-fig'), im = el('img'); im.src = url(qs.src.image.src); im.alt = qs.src.image.alt || ''; fig.append(im);
      if (prob) {
        const dots = el('div', 'sx-sdots'); qs.src.steps.forEach((x, i) => dots.append(el('span', 'sx-sd ' + (qs.results[i] === 1 ? 'ok' : qs.results[i] === 0 ? 'no' : i === qs.stepI ? 'now' : ''))));
        const crumbs = el('ol', 'sx-crumbs'); qs.results.forEach((r, i) => { if (r !== undefined && !(i === qs.stepI && qs.phase === 'ask')) crumbs.append(el('li', r === 1 ? 'ok' : 'no', qs.src.steps[i].brief || '')); });
        left.append(el('p', 'cr-ptitle', qs.src.prompt), fig, el('p', 'cr-setup', qs.src.setup), dots, crumbs);
      } else left.append(fig);
      stage.classList.add('cr-prob'); stage.append(left);
    }
    stage.append(content);
    const info = infoBar(s); const tag = info.querySelector('.cr-count'); if (prob) tag.append(el('span', '', `· step ${qs.stepI + 1} of ${qs.src.steps.length}`));
    const acts = [];
    if (qs.phase === 'ask') {
      if (q.type === 'multi-select') acts.push(['Enter', 'Check', submitMulti]);
      acts.push(['Space', 'Skip', () => doSkip()], ['←', 'Back', () => go(-1)]);
    } else acts.push(['Enter', prob && qs.stepI + 1 < qs.src.steps.length ? 'Next step' : 'Continue', advanceQ], ['←', 'Back', () => go(-1)]);
    const kb = keysBar(acts); if (qs.phase === 'ask' && isPair(q)) kb.prepend(el('span', 'cr-keyhint', 'Arrows or WASD: first press highlights two answers, second picks'));
    paintMain(info, stage, kb);
  }
  function answerText(q) {
    if (q.type === 'choice' || q.type === 'true-false') return q.answer.text;
    if (q.type === 'multi-select') return q.options.filter(o => o.correct).map(o => o.text).join('  •  ');
    if (q.type === 'sequence') return q.answer.ids.map((id, i) => `${i + 1}. ${q.steps.find(s => s.id === id).text}`).join('  ');
    return q.answer.text;
  }
  function whyWrong(q) {
    if (qs.chosen && !qs.chosen.correct) { const d = (q.distractors || []).find(x => x.id === qs.chosen.id); return {pick: qs.chosen.text, why: [d && d.misconception, qs.chosen.rationale || (d && d.rationale)].filter(Boolean).join(' ')}; }
    return null;
  }
  function recordQ(result) {                  // result for the whole question slide
    const s = qs.slide; prog.ans[s.ref] = result; prog.done[s.id] = 1; save(); drawSide();
  }
  function settle(result, how) {
    qs.last = result; qs.how = how || null; qs.phase = 'fb';
    if (qs.src.type === 'problem') { qs.results[qs.stepI] = result >= 1 ? 1 : 0; }
    else recordQ(result);
    paintQuestion();
  }
  function choose(i) {
    if (!qs || qs.phase !== 'ask') return; const q = qs.q, o = qs.order[i]; if (!o) return;
    if (q.type === 'multi-select') { qs.picks = qs.picks.includes(i) ? qs.picks.filter(x => x !== i) : qs.picks.concat(i); document.querySelectorAll('.sx-opt').forEach(b => b.classList.toggle('on', qs.picks.includes(+b.dataset.i))); return; }
    qs.chosen = o; settle(o.correct ? 1 : 0);
  }
  function submitMulti() {
    if (!qs || qs.phase !== 'ask' || qs.q.type !== 'multi-select' || !qs.picks.length) return;
    const want = new Set(qs.q.answer.ids), got = new Set(qs.picks.map(i => qs.order[i].id));
    settle(want.size === got.size && [...want].every(x => got.has(x)) ? 1 : 0);
  }
  function paintSeq() { document.querySelectorAll('.sx-opt').forEach(b => { const p = qs.picks.indexOf(qs.order.findIndex(x => x.id === b.dataset.id)); b.classList.toggle('on', p >= 0); const pp = b.querySelector('.sx-pos'); if (pp) pp.textContent = p >= 0 ? String(p + 1) : ''; }); }
  function pickStep(i) {
    if (!qs || qs.phase !== 'ask' || qs.q.type !== 'sequence' || qs.picks.includes(i) || !qs.order[i]) return;
    qs.picks.push(i); paintSeq();
    if (qs.picks.length === qs.order.length) { const got = qs.picks.map(j => qs.order[j].id); settle(got.every((id, k) => id === qs.q.answer.ids[k]) ? 1 : 0); }
  }
  function doSkip() { if (qs && qs.phase === 'ask') { if (qs.src.type === 'problem') { qs.results[qs.stepI] = 0; qs.last = 0; qs.how = 'skip'; qs.phase = 'fb'; paintQuestion(); } else settle(0, 'skip'); } }
  function advanceQ() {
    if (!qs || qs.phase !== 'fb') return;
    if (qs.src.type === 'problem') {
      if (qs.stepI + 1 < qs.src.steps.length) return startStep(qs.stepI + 1);
      const right = qs.results.filter(x => x === 1).length; recordQ(right === qs.src.steps.length ? 1 : right >= qs.src.steps.length / 2 ? 0.5 : 0);
    }
    go(1);
  }
  const opposite = {up: 'down', down: 'up', left: 'right', right: 'left'};
  function sideCandidates(side) {
    const n = qs.order.length, rows = Math.ceil(n / 2), idx = [...Array(n).keys()];
    if (side === 'up') return idx.filter(i => Math.floor(i / 2) === 0);
    if (side === 'down') return idx.filter(i => Math.floor(i / 2) === rows - 1);
    if (side === 'left') return idx.filter(i => i % 2 === 0);
    return idx.filter(i => i % 2 === 1);
  }
  function showHi() { const set = qs.hi ? sideCandidates(qs.hi) : []; document.querySelectorAll('.sx-opt').forEach(b => b.classList.toggle('hl', set.includes(+b.dataset.i))); }
  function arrow(dir) {                       // two-press answering, as in the study sessions
    if (!qs || qs.phase !== 'ask' || !isPair(qs.q)) return;
    if (!qs.hi) { const c = sideCandidates(dir); if (!c.length) return; if (c.length === 1) return choose(c[0]); qs.hi = dir; return showHi(); }
    if (dir === qs.hi) return;
    if (dir === opposite[qs.hi]) { const c = sideCandidates(dir); if (c.length === 1) return choose(c[0]); qs.hi = dir; return showHi(); }
    const cand = sideCandidates(qs.hi), horiz = qs.hi === 'up' || qs.hi === 'down';
    const pick = horiz ? cand.find(i => i % 2 === (dir === 'left' ? 0 : 1)) : (dir === 'up' ? cand[0] : cand[cand.length - 1]);
    if (pick !== undefined) choose(pick);
  }

  /* ---------- help ---------- */
  function help() {
    const d = $('#cr-help'); if (d.open) { d.close(); return; }
    const l = d.querySelector('.cr-keylist'); l.replaceChildren();
    [['→  Enter  Space', 'Next slide (Space skips an unanswered question)'], ['←  Backspace', 'Previous slide'], ['[  ]', 'Previous / next topic'], ['T', 'Pick a topic from the list (↑ ↓, Enter)'], ['R', 'Redo this topic'], ['P', 'Print packet'], ['S', 'Study session'], ['Questions', 'Arrows or WASD (first press highlights two, second picks), or 1–4, T/F, Enter for select-all']]
      .forEach(([k, t]) => { l.append(el('kbd', '', k), el('span', '', t)); });
    d.showModal();
  }

  /* ---------- print packet ---------- */
  function openPrint() {
    const d = $('#cr-print-dlg'), list = d.querySelector('.cr-plist'); list.replaceChildren();
    topics.forEach((t, i) => {
      const lab = el('label', 'cr-pick'), cb = el('input'); cb.type = 'checkbox'; cb.checked = true; cb.dataset.i = i;
      lab.append(cb, el('span', '', `${i + 1}. ${t.title}`)); list.append(lab);
    });
    d.querySelector('#cr-incq').checked = true; d.showModal(); d.querySelector('.cr-go').focus();
  }
  function wirePrint() {
    const d = $('#cr-print-dlg');
    d.querySelector('.cr-all').addEventListener('click', () => d.querySelectorAll('.cr-plist input').forEach(c => { c.checked = true; }));
    d.querySelector('.cr-none').addEventListener('click', () => d.querySelectorAll('.cr-plist input').forEach(c => { c.checked = false; }));
    d.querySelector('.cr-cancel').addEventListener('click', () => d.close());
    d.querySelector('.cr-go').addEventListener('click', () => {
      const sel = [...d.querySelectorAll('.cr-plist input')].filter(c => c.checked).map(c => +c.dataset.i);
      if (!sel.length) { d.querySelector('.cr-pmsg').textContent = 'Choose at least one topic.'; return; }
      d.close(); printPacket({topics: sel, questions: d.querySelector('#cr-incq').checked});
    });
    d.addEventListener('click', e => { if (e.target === d) d.close(); });
  }
  const LET = 'ABCDEFGH';
  function qBlock(q, n) {                       // a printed question (options lettered; answers go in the key)
    const d = el('div', 'pk-q');
    if (q.image) { d.classList.add('has-fig'); const f = el('figure', 'cr-fig'), im = el('img'); im.src = url(q.image.src); im.alt = q.image.alt || ''; f.append(im); d.append(f); }
    const qt = el('div', 'pk-qt'); qt.append(withFmt('p', 'pk-qp', `${n}. ${q.prompt}`));
    const ol = el('ol', 'pk-opts'); ol.type = 'A';
    const items = q.type === 'sequence' ? seqShown(q) : q.options;
    items.forEach(o => ol.append(withFmt('li', '', o.text))); qt.append(ol);
    if (q.type === 'sequence') qt.append(el('p', 'pk-note', 'Number the steps in the order they happen.'));
    if (q.type === 'multi-select') qt.append(el('p', 'pk-note', 'Select every correct answer.'));
    d.append(qt);
    return d;
  }
  const seqShown = q => q.steps.slice().reverse();          // printed in a fixed, different order than the answer
  function keyText(q) {
    if (q.type === 'sequence') return q.answer.ids.map(id => LET[seqShown(q).findIndex(s => s.id === id)]).join(' → ');
    if (q.type === 'multi-select') return q.options.map((o, i) => o.correct ? LET[i] : '').join('');
    return LET[q.options.findIndex(o => o.correct)];
  }
  function packetItems(opts) {
    // -> [{topic, html blocks[]}] with atomic blocks; question numbering and the answer key are collected here
    const out = [], key = []; let qn = 0;
    opts.topics.forEach(ti => {
      const t = topics[ti], blocks = [];
      const shown = new Set();                                  // print each diagram once per topic
      slidesOf(ti).filter(s => s.kind !== 'q' && s.kind !== 'workout').forEach(s0 => {
        const s = Object.assign({}, s0, {blocks: s0.blocks.filter(x => x.t !== 'fig' || !shown.has(x.src))}); s0.blocks.forEach(x => x.t === 'fig' && shown.add(x.src));
        const b = el('section', 'pk-blk' + (s.kind === 'example' ? ' pk-ex' : ''));
        b.append(withFmt('h3', 'pk-h3', (s.kind === 'example' ? 'Worked example: ' : '') + s.title)); b.append(slideBody(s)); blocks.push({el: b, title: s.title, ex: s.kind === 'example'});
      });
      if (opts.questions) {
        const qsl = slidesOf(ti).filter(s => s.kind === 'q' || s.kind === 'workout'), items = [];
        qsl.forEach(s => {
          const q = qOf(s.ref); if (!q) return;
          if (q.type === 'problem') {
            const b = el('section', 'pk-blk pk-prob'); b.append(el('h4', 'pk-h4', `Workout: ${q.prompt}`));
            const row = el('div', 'pk-prow'), f = el('figure', 'cr-fig'), im = el('img'); im.src = url(q.image.src); im.alt = q.image.alt || ''; f.append(im);
            row.append(f, el('p', 'pk-setup', q.setup)); b.append(row);
            items.push({el: b, title: q.prompt, big: true, glue: true});
            q.steps.forEach((st, i) => { qn++; const sb = el('section', 'pk-blk'); sb.append(qBlock({type: 'choice', prompt: `Step ${i + 1}: ${st.prompt}`, options: st.options}, qn)); key.push({n: qn, topic: t.title, ans: keyText({type: 'choice', options: st.options}), why: st.explanation}); items.push({el: sb}); });
          } else {
            qn++; const b = el('section', 'pk-blk'); b.append(qBlock(q, qn)); key.push({n: qn, topic: t.title, ans: keyText(q), why: q.explanation}); items.push({el: b});
          }
        });
        if (items.length) { const head = el('h4', 'pk-h4 pk-check', 'Check yourself'); blocks.push({el: head, glue: true}); items.forEach(x => blocks.push(x)); }
      }
      out.push({ti, title: t.title, lessons: t.lessons || '', blocks});
    });
    return {out, key};
  }
  async function buildPacket(opts) {
    $('#cr-packet') && $('#cr-packet').remove();
    const pk = el('div', 'pk'); pk.id = 'cr-packet'; document.body.append(pk);
    const {out, key} = packetItems(opts);
    // diagrams must be loaded before anything is measured, or the page breaks are wrong
    await Promise.all(out.flatMap(t => t.blocks.flatMap(b => [...b.el.querySelectorAll('img')])).map(i => i.complete ? null : new Promise(r => { i.onload = i.onerror = r; })));
    // measuring area uses the same width as a printed page body
    const meas = el('div', 'pk-page pk-measure'), mbody = el('div', 'pk-body'); meas.append(mbody); pk.append(meas);
    const H = () => mbody.parentNode.querySelector('.pk-body').getBoundingClientRect();
    const pageBodyH = (() => { const t = el('div', 'pk-page'); t.style.visibility = 'hidden'; t.style.position = 'absolute'; t.append(el('div', 'pk-head', 'x'), el('div', 'pk-body'), el('div', 'pk-foot', 'x')); pk.append(t); const h = t.querySelector('.pk-body').getBoundingClientRect().height; t.remove(); return h - 32; })();                // 32px safety: measured blocks differ slightly from laid-out blocks
    const height = node => { mbody.append(node); const r = node.getBoundingClientRect(); const cs = getComputedStyle(node); const h = r.height + parseFloat(cs.marginTop) + parseFloat(cs.marginBottom); node.remove(); return h; };
    // paginate
    const pages = []; let page = null, used = 0, curTitle = '';
    const newPage = (title) => { curTitle = title; page = {title, nodes: []}; pages.push(page); used = 0; };
    const place = (node, h) => { if (used + h > pageBodyH && page.nodes.length) newPage(curTitle); page.nodes.push(node); used += h; };
    const tocRows = [];
    out.forEach(tp => {
      curTitle = tp.title;
      if (!page || pageBodyH - used < pageBodyH * 0.3) newPage(tp.title);          // a topic starts mid-page only if there is room for a good start
      const h2 = el('h2', 'pk-h2'); h2.append(el('span', 'pk-tno', ''), document.createTextNode(tp.title)); if (tp.lessons) h2.append(el('span', 'pk-less', tp.lessons));
      let first = true; const startPage = pages.length;
      tocRows.push({title: tp.title, page: null, level: 0, topicIndex: tp.ti});
      const tocRef = tocRows[tocRows.length - 1];
      let glued = [], toc = null;                                   // heading blocks kept with the block that follows
      tp.blocks.forEach(b => {
        let node = b.el;
        if (first) { const wrap = el('div', 'pk-first'); wrap.append(h2, node); node = wrap; first = false; }
        if (b.big && !toc) toc = {title: 'Workout: ' + (b.title || '')};
        if (b.glue) { glued.push(node); return; }
        if (glued.length) { const wrap = el('div', 'pk-glue'); glued.forEach(g => wrap.append(g)); wrap.append(node); node = wrap; glued = []; }
        const h = height(node);
        if (h > pageBodyH) console.warn('packet block taller than a page:', b.title);
        place(node, h);
        if (tocRef.page == null) tocRef.page = pages.length;
        if (b.ex) tocRows.push({title: 'Worked example: ' + (b.title || ''), page: pages.length, level: 1});
        else if (toc) { tocRows.push({title: toc.title, page: pages.length, level: 1}); toc = null; }
      });
      if (tocRef.page == null) { place(h2, height(h2)); tocRef.page = pages.length; }
    });
    // answer key
    let keyPages = 0;
    if (opts.questions && key.length) {
      newPage('Answer key'); keyPages = 1; tocRows.push({title: 'Answer key', page: pages.length, level: 0});
      const hdr = el('h2', 'pk-h2', 'Answer key'); place(hdr, height(hdr));
      let curTopic = '';
      key.forEach(k => {
        if (k.topic !== curTopic) { curTopic = k.topic; const th = el('h4', 'pk-h4', curTopic); const hh = height(th); place(th, hh); }
        const row = el('p', 'pk-key'); row.append(el('b', '', `${k.n}. ${k.ans}`), document.createTextNode(' — ' + k.why));
        place(row, height(row));
      });
    }
    // contents: a cover block, then the table of contents over as many pages as it needs
    const rowsFinal = tocRows.filter(r => r.page != null);
    const rowEl = (r, num) => { const li = el('li', r.level ? 'sub' : ''); li.append(el('span', 'pk-ttxt', (r.level ? '' : (r.topicIndex != null ? `${r.topicIndex + 1}. ` : '')) + r.title), el('span', 'pk-dots'), el('span', 'pk-pg', num)); return li; };
    const olOf = li => { const o = el('ol', 'pk-toc'); o.append(li); return o; };
    const cover = el('section', 'pk-cover');
    cover.append(el('div', 'pk-eyebrow', 'ECE 321 · Electronics I'), el('h1', 'pk-title', deck.packetTitle || deck.title), el('p', 'pk-subtitle', deck.subtitle || ''));
    cover.append(el('p', 'pk-howto', 'Black-and-white packet. Each topic starts on a new page. Worked examples are boxed.' + (opts.questions ? ' Questions are in "Check yourself"; answers are in the key at the back.' : '')));
    cover.append(el('h2', 'pk-toc-h', 'Contents'));
    const rh = rowsFinal.map(r => height(olOf(rowEl(r, '00'))));
    const tocPagesRows = []; let cur = [], tu = height(cover);
    rowsFinal.forEach((r, i) => { if (tu + rh[i] > pageBodyH && cur.length) { tocPagesRows.push(cur); cur = []; tu = height(el('h2', 'pk-toc-h', 'Contents (continued)')); } cur.push(i); tu += rh[i]; });
    tocPagesRows.push(cur);
    const offset = tocPagesRows.length;
    const sheets = []; const total = pages.length + offset;
    const mk = (title, nodes, n) => { const pg = el('section', 'pk-page'); pg.append(el('div', 'pk-head', `${deck.packetTitle || deck.title}  ·  ${title}`)); const b = el('div', 'pk-body'); nodes.forEach(x => b.append(x)); pg.append(b, el('div', 'pk-foot', `${n} of ${total}`)); return pg; };
    tocPagesRows.forEach((idxs, k) => {
      const toc = el('ol', 'pk-toc'); idxs.forEach(i => toc.append(rowEl(rowsFinal[i], String(rowsFinal[i].page + offset))));
      const head = k === 0 ? cover : el('h2', 'pk-toc-h', 'Contents (continued)'); if (k === 0) cover.append(toc);
      sheets.push(mk('Contents', k === 0 ? [cover] : [head, toc], k + 1));
    });
    pages.forEach((p, i) => sheets.push(mk(p.title, p.nodes, i + 1 + offset)));
    pk.replaceChildren(...sheets);
    pk.dataset.pages = String(total);
    return {pages: total, toc: rowsFinal.map(r => [r.title, r.page + offset]), tocPages: offset};
  }
  async function printPacket(opts) {
    const info = await buildPacket(opts);
    document.body.classList.add('cr-printing');
    const done = () => { document.body.classList.remove('cr-printing'); const p = $('#cr-packet'); p && p.remove(); removeEventListener('afterprint', done); };
    addEventListener('afterprint', done);
    setTimeout(() => window.print(), 60);
    return info;
  }

  /* ---------- keyboard ---------- */
  document.addEventListener('keydown', e => {
    if (!deck || e.ctrlKey || e.metaKey || e.altKey) return;
    if (document.querySelector('dialog[open]')) return;
    const tag = (e.target.tagName || '').toLowerCase(); if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
    const k = e.key, K = k.length === 1 ? k.toLowerCase() : k, take = () => e.preventDefault();
    if (sideFocus >= 0) {                                     // choosing a topic from the list
      if (k === 'ArrowDown') { take(); sideFocus = (sideFocus + 1) % topics.length; drawSide(); }
      else if (k === 'ArrowUp') { take(); sideFocus = (sideFocus - 1 + topics.length) % topics.length; drawSide(); }
      else if (k === 'Enter') { take(); goTopic(sideFocus); } else if (k === 'Escape' || K === 't') { take(); sideFocus = -1; drawSide(); }
      return;
    }
    if (K === 'p') { take(); openPrint(); return; }
    if (K === 'h' || k === '?') { take(); help(); return; }
    if (K === 's' && !(qs && qs.phase === 'ask' && qs.q.type !== 'text' && isPair(qs.q))) { take(); location.href = BASE + (deck.studyHref || 'index.html#study'); return; }
    if (K === 't') { take(); sideFocus = flat[pos] ? flat[pos].topic : 0; drawSide(); return; }
    if (k === ']') { take(); goTopic(clamp((flat[pos] ? flat[pos].topic : 0) + 1, 0, topics.length - 1)); return; }
    if (k === '[') { take(); goTopic(clamp((flat[pos] ? flat[pos].topic : 0) - 1, 0, topics.length - 1)); return; }
    if (mode === 'done') { if (k === 'ArrowLeft' || k === 'Backspace') { take(); go(-1); } return; }
    const s = flat[pos];
    if (K === 'r' && !(qs && qs.phase === 'ask')) { take(); redo(s.topic); return; }
    if (qs && qs.phase === 'ask') {                            // answering
      const q = qs.q;
      if ((k === 'Escape' || k === 'Backspace') && qs.hi) { take(); qs.hi = null; showHi(); return; }
      if (isPair(q) && k.indexOf('Arrow') === 0 && (k === 'ArrowUp' || k === 'ArrowDown' || qs.hi || true)) { if (k === 'ArrowLeft' && !qs.hi && false) return; take(); arrow(k.slice(5).toLowerCase()); return; }
      if (isPair(q) && !e.shiftKey && 'wasd'.indexOf(K) >= 0 && K.length === 1) { take(); arrow({w: 'up', a: 'left', s: 'down', d: 'right'}[K]); return; }
      if (k === ' ') { take(); doSkip(); return; }
      if (q.type === 'multi-select' && k === 'Enter') { take(); submitMulti(); return; }
      if (q.type === 'sequence' && k === 'Backspace') { take(); qs.picks.pop(); paintSeq(); return; }
      if (q.type === 'sequence' && /^[1-9]$/.test(k)) { take(); pickStep(+k - 1); return; }
      if (q.type === 'true-false' && (K === 't' || K === 'f')) { take(); choose(K === 't' ? 0 : 1); return; }
      if (/^[1-9]$/.test(k)) { take(); choose(+k - 1); return; }
      if (k === 'Backspace') { take(); go(-1); return; }
      return;
    }
    if (qs && qs.phase === 'fb') { if (k === 'Enter' || k === ' ' || k === 'ArrowRight') { take(); advanceQ(); } else if (k === 'ArrowLeft' || k === 'Backspace') { take(); go(-1); } return; }
    if (k === 'ArrowRight' || k === 'Enter' || k === ' ' || K === 'd' || K === 'n') { take(); go(1); }
    else if (k === 'ArrowLeft' || k === 'Backspace' || K === 'a') { take(); go(-1); }
  });
  addEventListener('hashchange', () => { if (!deck) return; const h = decodeURIComponent(location.hash.slice(1)); const i = flat.findIndex(s => s.id === h); if (i >= 0 && i !== pos) { mode = 'slide'; pos = i; draw(); } });
  addEventListener('resize', () => fit($('.cr-stage')));

  function init() {
    const root = $('#cr'); if (!root || !setup()) return;
    document.title = deck.title + ' · ECE 321'; wirePrint(); draw();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once: true}); else init();
})();
