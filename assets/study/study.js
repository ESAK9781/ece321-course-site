(() => {
  'use strict';

  const PROGRESS_KEY = 'ece321-study-progress-v1';
  const registry = window.CourseStudyBanks = window.CourseStudyBanks || {};
  const loadedBanks = new Map();
  const catalog = Array.isArray(window.CourseStudyCatalog) ? window.CourseStudyCatalog : [];
  const progress = readProgress();
  let activeEntry = null;
  let activeBank = null;
  let questionIndex = 0;
  let selected = new Set();
  let currentSubmitted = false;
  let grading = false;
  let clarifyMessages = [];

  function readProgress() {
    try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}'); }
    catch (error) { return {}; }
  }

  function saveProgress() {
    try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); }
    catch (error) { setStatus('Progress could not be saved in this browser.'); }
  }

  function setStatus(message) {
    const status = document.querySelector('#study-session-status');
    if (status) status.textContent = message || '';
  }

  function providerReady(kind) {
    if (!window.CourseAI) return false;
    const settings = window.CourseAI.getSettings();
    return Boolean(settings.configured[kind === 'decision' ? settings.decisionProvider : settings.llmProvider]);
  }

  function entryProgress(id) {
    if (!progress[id]) progress[id] = {index: 0, questions: {}};
    if (!progress[id].questions) progress[id].questions = {};
    return progress[id];
  }

  function questionProgress(question) {
    const bankProgress = entryProgress(activeBank.id);
    if (!bankProgress.questions[question.id]) bankProgress.questions[question.id] = {attempts: 0, correctCount: 0, misses: 0, skips: 0, mastered: false};
    return bankProgress.questions[question.id];
  }

  function textElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function appendAction(container, label, handler, secondary = false) {
    const button = textElement('button', `study-button${secondary ? ' secondary' : ''}`, label);
    button.type = 'button';
    button.addEventListener('click', handler);
    container.append(button);
    return button;
  }

  function validateBank(bank, entry) {
    if (!bank || bank.id !== entry.id || !Array.isArray(bank.questions) || !bank.questions.length) throw new Error('This study bank is missing or has no questions.');
    if (bank.policy?.requiresCalculations !== false) throw new Error('This bank does not declare the no-calculation policy.');
    const ids = new Set();
    for (const question of bank.questions) {
      if (!question.id || ids.has(question.id)) throw new Error('Question IDs must be unique.');
      ids.add(question.id);
      if (!['choice', 'multi-select', 'text', 'sequence', 'true-false'].includes(question.type)) throw new Error(`Unsupported question type in ${question.id}.`);
      if (!question.prompt || !question.answer || !question.explanation || !Array.isArray(question.distractors)) throw new Error(`Question ${question.id} needs a prompt, answer, explanation, and distractors.`);
    }
  }

  function loadBank(entry) {
    if (registry[entry.id]) return Promise.resolve(registry[entry.id]);
    if (loadedBanks.has(entry.id)) return loadedBanks.get(entry.id);
    const promise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = new URL(entry.bank, document.baseURI).href;
      script.async = true;
      script.onload = () => registry[entry.id] ? resolve(registry[entry.id]) : reject(new Error('The bank file did not register its questions.'));
      script.onerror = () => reject(new Error('Could not load this study bank.'));
      document.head.append(script);
    });
    loadedBanks.set(entry.id, promise);
    return promise;
  }

  function catalogStats(id) {
    const saved = progress[id];
    const records = saved?.questions || {};
    const attempted = Object.values(records).filter(record => record.attempts > 0).length;
    const needsReview = Object.values(records).filter(record => !record.mastered && (record.misses > 0 || record.skips > 0)).length;
    return {attempted, needsReview, index: saved?.index || 0};
  }

  function renderCatalog() {
    const grid = document.querySelector('#study-grid');
    const empty = document.querySelector('#study-empty');
    if (!grid || !empty) return;
    grid.replaceChildren();
    empty.hidden = catalog.length > 0;
    catalog.forEach(entry => {
      const card = textElement('article', 'study-card');
      const label = textElement('p', 'eyebrow', entry.kind === 'gr' ? 'GUIDED REVIEW' : 'QUIZ STUDY SET');
      const title = textElement('h3', '', entry.title);
      const description = textElement('p', '', entry.description || '');
      const stats = catalogStats(entry.id);
      const meta = textElement('div', 'study-card-meta');
      meta.append(textElement('span', '', `${entry.questionCount || '—'} QUESTIONS`));
      meta.append(textElement('span', stats.needsReview ? 'study-review-label' : 'study-meter', stats.needsReview ? `${stats.needsReview} TO REVIEW` : `${stats.attempted} ANSWERED`));
      const button = textElement('button', '', stats.index > 0 && stats.index < (entry.questionCount || Infinity) ? 'Continue session' : 'Start session');
      button.dataset.bank = entry.id;
      button.addEventListener('click', () => openBank(entry, button));
      card.append(label, title, description, meta, button);
      grid.append(card);
    });
  }

  async function openBank(entry, button) {
    button.disabled = true;
    setStatus('Loading study set…');
    try {
      const bank = await loadBank(entry);
      validateBank(bank, entry);
      activeEntry = entry;
      activeBank = bank;
      const saved = entryProgress(bank.id);
      questionIndex = Math.min(saved.index || 0, bank.questions.length - 1);
      if (saved.index >= bank.questions.length) questionIndex = 0;
      clarifyMessages = [];
      document.querySelector('#study-catalog').hidden = true;
      document.querySelector('#study-runner').hidden = false;
      document.querySelector('#study-summary').hidden = true;
      renderQuestion();
      setStatus('');
    } catch (error) {
      setStatus(error.message || 'Could not open this study set.');
    } finally {
      button.disabled = false;
    }
  }

  function getQuestion() { return activeBank.questions[questionIndex]; }

  function renderResources(question) {
    const container = document.querySelector('#study-resources');
    container.replaceChildren();
    (question.resources || []).forEach(resource => {
      if (resource.type === 'image' && resource.src) {
        const figure = textElement('figure', 'study-resource');
        const image = document.createElement('img');
        image.src = new URL(resource.src, document.baseURI).href;
        image.alt = resource.alt || '';
        figure.append(image);
        if (resource.caption) figure.append(textElement('figcaption', '', resource.caption));
        container.append(figure);
      } else if (resource.type === 'link' && resource.href) {
        let parsedHref;
        try { parsedHref = new URL(resource.href, document.baseURI); } catch (error) { return; }
        if (!['http:', 'https:', 'file:'].includes(parsedHref.protocol)) return;
        const wrapper = textElement('p', 'study-resource');
        const link = textElement('a', '', resource.label || 'Open course resource');
        link.href = parsedHref.href;
        if (/^https?:/i.test(parsedHref.protocol)) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
        wrapper.append(link);
        if (resource.description) wrapper.append(document.createTextNode(` — ${resource.description}`));
        container.append(wrapper);
      } else if (resource.type === 'text' && resource.text) {
        const note = textElement('div', 'study-resource', resource.text);
        container.append(note);
      }
    });
  }

  function answerValue(question) { return question.answer.value; }

  function optionsFor(question) {
    if (Array.isArray(question.options)) return shuffle(question.options.slice());
    const answer = question.answer;
    return shuffle([
      {id: answer.id || 'correct', text: answer.text || String(answer.value), correct: true},
      ...question.distractors.map((item, index) => ({id: item.id || `distractor-${index + 1}`, text: item.text, correct: false, rationale: item.misconception || item.rationale}))
    ]);
  }

  function shuffle(items) {
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  }

  function renderQuestion() {
    const question = getQuestion();
    const saved = entryProgress(activeBank.id);
    currentSubmitted = false;
    grading = false;
    selected = new Set();
    document.querySelector('#study-title').textContent = activeBank.title || activeEntry.title;
    document.querySelector('#study-description').textContent = `${activeBank.course || 'ECE 321'} · ${activeEntry.kind === 'gr' ? 'Guided Review' : 'Quiz preparation'}`;
    document.querySelector('#study-topic').textContent = question.topic || 'Concept check';
    document.querySelector('#study-prompt').textContent = question.prompt;
    document.querySelector('#study-feedback').hidden = true;
    document.querySelector('#study-retry').hidden = true;
    document.querySelector('#study-next').hidden = true;
    document.querySelector('#study-reveal').hidden = false;
    document.querySelector('#study-skip').hidden = false;
    document.querySelector('#study-clarify').open = false;
    document.querySelector('#study-clarify-log').replaceChildren();
    document.querySelector('#study-clarify-status').textContent = '';
    updateClarificationAvailability();
    document.querySelector('#study-clarify-input').value = '';
    renderResources(question);
    renderAnswerInput(question);
    renderProgress();
    saved.index = questionIndex;
    saveProgress();
  }

  function renderAnswerInput(question) {
    const area = document.querySelector('#study-answer-area');
    area.replaceChildren();
    if (question.type === 'text') {
      const form = document.createElement('form');
      form.className = 'study-text-form';
      const input = document.createElement('textarea');
      input.id = 'study-text-answer';
      input.required = true;
      input.setAttribute('aria-label', 'Your answer');
      input.placeholder = 'Write a short explanation…';
      const hint = textElement('p', 'study-text-hint', 'Focus on the concept and next step. No algebra or calculation is expected.');
      const submit = textElement('button', 'study-button', 'Check with Jev');
      submit.type = 'submit';
      const keyNote = textElement('p', 'study-key-note', '');
      if (!providerReady('decision')) {
        input.disabled = true;
        submit.disabled = true;
        keyNote.append(document.createTextNode('Add a key for the selected decision provider in '));
        const settingsButton = textElement('button', 'study-inline-settings', 'AI settings');
        settingsButton.type = 'button';
        settingsButton.addEventListener('click', () => document.querySelector('#ai-settings-open')?.click());
        keyNote.append(settingsButton, document.createTextNode(' to enable text answer checking.'));
      }
      form.append(input, hint, submit, keyNote);
      form.addEventListener('submit', event => { event.preventDefault(); gradeText(question, input.value, submit); });
      area.append(form);
      input.focus({preventScroll: true});
      return;
    }

    if (question.type === 'sequence') {
      const list = textElement('div', 'study-options');
      const steps = shuffle((question.steps || []).slice());
      steps.forEach((step, index) => {
        const row = textElement('div', 'study-option');
        row.dataset.stepId = step.id;
        row.append(textElement('span', 'study-option-letter', `${index + 1}.`), textElement('span', '', step.text));
        const controls = textElement('span', 'study-sequence-controls');
        const up = textElement('button', 'study-sequence-move', '↑');
        up.type = 'button'; up.setAttribute('aria-label', `Move step ${index + 1} up`);
        const down = textElement('button', 'study-sequence-move', '↓');
        down.type = 'button'; down.setAttribute('aria-label', `Move step ${index + 1} down`);
        up.addEventListener('click', () => moveStep(row, -1));
        down.addEventListener('click', () => moveStep(row, 1));
        controls.append(up, down);
        row.append(controls);
        list.append(row);
      });
      area.append(list);
      const actions = textElement('div', 'study-actions');
      appendAction(actions, 'Check order', () => gradeSequence(question));
      area.append(actions);
      return;
    }

    const multi = question.type === 'multi-select';
    const options = optionsFor(question);
    const list = textElement('div', 'study-options');
    options.forEach((option, index) => {
      const button = textElement('button', 'study-option');
      button.type = 'button';
      button.dataset.optionId = option.id;
      button.dataset.correct = String(option.correct === true);
      if (multi) {
        button.setAttribute('aria-pressed', 'false');
        const check = document.createElement('input');
        check.type = 'checkbox'; check.tabIndex = -1; check.setAttribute('aria-hidden', 'true');
        button.append(check);
      }
      button.append(textElement('span', 'study-option-letter', String.fromCharCode(65 + index)), textElement('span', '', option.text));
      button.addEventListener('click', () => {
        if (currentSubmitted || grading) return;
        if (multi) {
          if (selected.has(option.id)) selected.delete(option.id); else selected.add(option.id);
          button.classList.toggle('selected', selected.has(option.id));
          button.setAttribute('aria-pressed', String(selected.has(option.id)));
          button.querySelector('input').checked = selected.has(option.id);
          const submit = area.querySelector('#study-multi-submit');
          submit.disabled = selected.size === 0;
        } else {
          selected = new Set([option.id]);
          gradeChoice(question, option.id, option);
        }
      });
      list.append(button);
    });
    area.append(list);
    if (multi) {
      const actions = textElement('div', 'study-actions');
      const submit = textElement('button', 'study-button', 'Check answers');
      submit.id = 'study-multi-submit'; submit.type = 'button'; submit.disabled = true;
      submit.addEventListener('click', () => gradeMulti(question, [...selected]));
      actions.append(submit);
      area.append(actions);
    }
  }

  function moveStep(row, offset) {
    const sibling = offset < 0 ? row.previousElementSibling : row.nextElementSibling;
    if (!sibling) return;
    const parent = row.parentElement;
    if (offset < 0) parent.insertBefore(row, sibling);
    else parent.insertBefore(sibling, row);
    [...parent.children].forEach((item, index) => { item.querySelector('.study-option-letter').textContent = `${index + 1}.`; });
  }

  function gradeChoice(question, id, option) {
    const correctId = question.answer.id || 'correct';
    grade(question, id === correctId || option.correct === true, option.rationale || distractorRationale(question, id));
  }

  function gradeMulti(question, ids) {
    const expected = question.answer.ids || [];
    const actual = new Set(ids);
    const correct = actual.size === expected.length && expected.every(id => actual.has(id));
    const rationale = question.distractors.filter(item => actual.has(item.id)).map(item => item.misconception || item.rationale).filter(Boolean).join('\n');
    grade(question, correct, rationale);
  }

  function gradeSequence(question) {
    const actual = [...document.querySelectorAll('#study-answer-area [data-step-id]')].map(item => item.dataset.stepId);
    const expected = question.answer.ids || [];
    const correct = actual.length === expected.length && expected.every((id, index) => actual[index] === id);
    grade(question, correct, 'Compare the ordering to the sequence described in the explanation.');
  }

  async function gradeText(question, value, button) {
    const answer = value.trim();
    if (!answer || grading || currentSubmitted) return;
    if (!window.CourseAI) { setStatus('The AI connection is unavailable.'); return; }
    grading = true;
    button.disabled = true;
    setStatus('Jev is checking your response…');
    try {
      const result = await window.CourseAI.decide({
        input: {
          question: question.prompt,
          student_answer: answer,
          expected_answer: question.answer.text,
          rubric: question.rubric || [],
          context: question.gradingContext || ''
        },
        questions: [{
          name: 'meets_answer_key',
          type: 'predicate',
          instructions: 'Does the student response demonstrate the key conceptual points in the expected answer and rubric? Accept equivalent wording and correct reasoning even when phrased differently. Do not require calculations, algebra, exact wording, or details absent from the key. Mark false if the response contradicts a central concept or omits the core reasoning.'
        }]
      });
      const answerEntry = result.answers?.meets_answer_key || {};
      const probability = Number(answerEntry.noul ?? answerEntry.probability ?? 0);
      grade(question, probability >= 0.72, '', {confidence: probability, judgedBy: 'Jev'});
    } catch (error) {
      setStatus(`${error.message} Add a Jev key in AI settings to grade text answers.`);
      button.disabled = false;
      grading = false;
    }
  }

  function distractorRationale(question, id) {
    const item = (question.distractors || []).find(distractor => distractor.id === id);
    return item?.misconception || item?.rationale || '';
  }

  function grade(question, correct, rationale, extra = {}) {
    if (currentSubmitted) return;
    currentSubmitted = true;
    grading = false;
    const record = questionProgress(question);
    record.attempts += 1;
    if (correct) { record.correctCount += 1; record.mastered = true; }
    else { record.misses += 1; record.mastered = false; }
    record.lastAt = Date.now();
    const bankProgress = entryProgress(activeBank.id);
    bankProgress.index = questionIndex;
    saveProgress();

    document.querySelectorAll('#study-answer-area button').forEach(button => { button.disabled = true; });
    document.querySelectorAll('#study-answer-area .study-option').forEach(option => {
      const id = option.dataset.optionId;
      if (id === question.answer.id || (question.answer.ids || []).includes(id) || option.dataset.correct === 'true') option.classList.add('correct');
      else if (selected.has(id)) option.classList.add('incorrect');
    });
    document.querySelector('#study-reveal').hidden = true;
    document.querySelector('#study-skip').hidden = true;
    document.querySelector('#study-feedback').hidden = false;
    document.querySelector('#study-feedback').classList.toggle('is-wrong', !correct);
    document.querySelector('#study-feedback-title').textContent = correct ? 'That’s right' : 'Review this idea';
    document.querySelector('#study-feedback-answer').textContent = `Answer: ${formatAnswer(question)}`;
    document.querySelector('#study-explanation').textContent = question.explanation;
    const note = document.querySelector('#study-distractor-note');
    note.hidden = !rationale;
    note.textContent = rationale || '';
    const confidence = extra.judgedBy ? `Checked by ${extra.judgedBy} · ${Math.round(extra.confidence * 100)}% match to the key.` : '';
    document.querySelector('#study-grading-note').textContent = confidence;
    document.querySelector('#study-next').hidden = false;
    document.querySelector('#study-retry').hidden = correct;
    renderProgress();
    setStatus(extra.judgedBy ? 'Your written response is not stored. Only study progress is saved in this browser.' : 'Progress saved locally in this browser.');
  }

  function formatAnswer(question) {
    if (question.type === 'sequence') {
      const steps = new Map((question.steps || []).map(step => [step.id, step.text]));
      return (question.answer.ids || []).map((id, index) => `${index + 1}. ${steps.get(id) || id}`).join('\n');
    }
    if (question.type === 'multi-select') {
      const options = new Map((question.options || []).map(option => [option.id, option.text]));
      return (question.answer.ids || []).map(id => options.get(id) || id).join('; ');
    }
    return question.answer.text || question.answer.value || question.answer.id || '';
  }

  function revealAnswer() {
    const question = getQuestion();
    if (currentSubmitted) return;
    grade(question, false, 'You asked to see the answer. Read the explanation, then try a similar concept when it comes up again.');
  }

  function skipQuestion() {
    const question = getQuestion();
    const record = questionProgress(question);
    record.skips += 1;
    record.mastered = false;
    record.lastAt = Date.now();
    entryProgress(activeBank.id).index = questionIndex + 1;
    saveProgress();
    nextQuestion();
  }

  function retryQuestion() {
    clarifyMessages = [];
    renderQuestion();
    document.querySelector('#study-text-answer')?.focus();
  }

  function nextQuestion() {
    questionIndex += 1;
    entryProgress(activeBank.id).index = questionIndex;
    saveProgress();
    if (questionIndex >= activeBank.questions.length) { renderSummary(); return; }
    clarifyMessages = [];
    renderQuestion();
  }

  function renderProgress() {
    const questions = activeBank.questions;
    const records = entryProgress(activeBank.id).questions;
    const answered = Object.values(records).filter(record => record.attempts > 0).length;
    const right = Object.values(records).filter(record => record.mastered).length;
    const needsReview = getReviewTopics();
    const percent = Math.min(100, Math.round(((questionIndex + (currentSubmitted ? 1 : 0)) / questions.length) * 100));
    const fill = document.querySelector('#study-progress-fill');
    fill.style.width = `${percent}%`;
    document.querySelector('#study-progress-track').setAttribute('aria-valuenow', String(percent));
    document.querySelector('#study-progress-copy').textContent = `QUESTION ${Math.min(questionIndex + 1, questions.length)} OF ${questions.length}`;
    document.querySelector('#study-score').textContent = `${answered} answered · ${right} correct at least once · ${needsReview.reduce((sum, topic) => sum + topic.count, 0)} to revisit`;
  }

  function getReviewTopics() {
    if (!activeBank) return [];
    const topics = new Map();
    activeBank.questions.forEach(question => {
      const record = entryProgress(activeBank.id).questions[question.id];
      if (record && !record.mastered && (record.misses > 0 || record.skips > 0)) {
        const topic = question.topic || 'Other';
        topics.set(topic, (topics.get(topic) || 0) + 1);
      }
    });
    return [...topics.entries()].map(([topic, count]) => ({topic, count})).sort((a, b) => b.count - a.count).slice(0, 5);
  }

  function renderSummary() {
    document.querySelector('#study-question-card').hidden = true;
    document.querySelector('#study-summary').hidden = false;
    const records = entryProgress(activeBank.id).questions;
    const attempted = Object.values(records).filter(record => record.attempts > 0).length;
    const mastered = Object.values(records).filter(record => record.mastered).length;
    document.querySelector('#study-summary-title').textContent = `${activeBank.title || activeEntry.title} complete`;
    document.querySelector('#study-summary-copy').textContent = 'Your progress is saved in this browser. Come back later to review missed concepts or continue through the bank again.';
    document.querySelector('#study-summary-stats').replaceChildren(
      stat('Questions answered', attempted), stat('Correct at least once', mastered), stat('Total questions', activeBank.questions.length)
    );
    const topicBox = document.querySelector('#study-summary-topics');
    topicBox.replaceChildren(textElement('strong', '', 'Topics to revisit'));
    const topics = getReviewTopics();
    if (!topics.length) topicBox.append(textElement('p', '', 'No open review topics. Nice work.'));
    else {
      const list = document.createElement('ul');
      topics.forEach(item => list.append(textElement('li', '', `${item.topic} · ${item.count} question${item.count === 1 ? '' : 's'}`)));
      topicBox.append(list);
    }
    document.querySelector('#study-progress-fill').style.width = '100%';
    document.querySelector('#study-progress-track').setAttribute('aria-valuenow', '100');
    setStatus('');
  }

  function stat(label, value) {
    const item = textElement('div', '');
    item.append(textElement('b', '', String(value)), textElement('span', '', label));
    return item;
  }

  function askClarification(event) {
    event.preventDefault();
    const input = document.querySelector('#study-clarify-input');
    const question = input.value.trim();
    if (!question) return;
    if (!window.CourseAI) { document.querySelector('#study-clarify-status').textContent = 'The AI connection is unavailable.'; return; }
    input.value = '';
    clarifyMessages.push({role: 'user', content: question});
    renderClarifications();
    const button = document.querySelector('#study-clarify-submit');
    const status = document.querySelector('#study-clarify-status');
    button.disabled = true;
    status.textContent = 'Thinking…';
    const item = getQuestion();
    const context = `Current study question: ${item.prompt}\nReference answer: ${formatAnswer(item)}\nExplanation: ${item.explanation}\nResources: ${(item.resources || []).map(resource => resource.caption || resource.description || resource.text || '').filter(Boolean).join('; ')}`;
    window.CourseAI.complete({
      system: 'You are a patient ECE 321 Electronics I tutor helping with a prepared study question. Use only the supplied question, answer, explanation, and resource notes as course-specific evidence. Clarify concepts and the next step in a solution process. The student should never need to perform algebra or calculations in these study sessions; do not ask them to calculate, and explain the method without doing arithmetic. If the supplied material does not contain an answer, say what is missing instead of inventing it.',
      messages: [{role: 'user', content: `${context}\n\nStudent asks: ${question}`}]
    }).then(result => {
      clarifyMessages.push({role: 'assistant', content: result.text || 'No text response was returned.'});
      status.textContent = `Answered with ${result.provider}.`;
      renderClarifications();
    }).catch(error => {
      clarifyMessages.push({role: 'assistant', content: error.message});
      status.textContent = 'Could not reach the selected text provider. Check AI settings.';
      renderClarifications();
    }).finally(() => { button.disabled = false; });
  }

  function renderClarifications() {
    const log = document.querySelector('#study-clarify-log');
    log.replaceChildren();
    clarifyMessages.forEach(message => log.append(textElement('div', `study-clarify-message ${message.role}`, message.content)));
  }

  function updateClarificationAvailability() {
    const enabled = providerReady('text');
    const input = document.querySelector('#study-clarify-input');
    const button = document.querySelector('#study-clarify-submit');
    const status = document.querySelector('#study-clarify-status');
    if (!input || !button || !status) return;
    input.disabled = !enabled;
    button.disabled = !enabled;
    status.replaceChildren();
    if (!enabled) {
      status.append(document.createTextNode('Add a key for the selected text provider in '));
      const settingsButton = textElement('button', 'study-inline-settings', 'AI settings');
      settingsButton.type = 'button';
      settingsButton.addEventListener('click', () => document.querySelector('#ai-settings-open')?.click());
      status.append(settingsButton, document.createTextNode(' to enable clarification.'));
    }
  }

  function updateTextAnswerAvailability() {
    const input = document.querySelector('#study-text-answer');
    const button = input?.form?.querySelector('button[type="submit"]');
    const note = input?.form?.querySelector('.study-key-note');
    if (!input || !button || !note) return;
    const enabled = providerReady('decision');
    input.disabled = !enabled;
    button.disabled = !enabled;
    note.replaceChildren();
    if (!enabled) {
      note.append(document.createTextNode('Add a key for the selected decision provider in '));
      const settingsButton = textElement('button', 'study-inline-settings', 'AI settings');
      settingsButton.type = 'button';
      settingsButton.addEventListener('click', () => document.querySelector('#ai-settings-open')?.click());
      note.append(settingsButton, document.createTextNode(' to enable text answer checking.'));
    }
  }

  function attachEvents() {
    document.addEventListener('courseai:settingschange', () => {
      updateTextAnswerAvailability();
      updateClarificationAvailability();
    });
    document.querySelector('#study-back').addEventListener('click', () => {
      document.querySelector('#study-runner').hidden = true;
      document.querySelector('#study-catalog').hidden = false;
      renderCatalog();
      setStatus('');
    });
    document.querySelector('#study-next').addEventListener('click', nextQuestion);
    document.querySelector('#study-skip').addEventListener('click', skipQuestion);
    document.querySelector('#study-reveal').addEventListener('click', revealAnswer);
    document.querySelector('#study-retry').addEventListener('click', retryQuestion);
    document.querySelector('#study-clarify-form').addEventListener('submit', askClarification);
    document.querySelector('#study-summary-back').addEventListener('click', () => {
      document.querySelector('#study-runner').hidden = true;
      document.querySelector('#study-catalog').hidden = false;
      renderCatalog();
    });
    document.querySelector('#study-summary-restart').addEventListener('click', () => {
      questionIndex = 0;
      entryProgress(activeBank.id).index = 0;
      document.querySelector('#study-question-card').hidden = false;
      document.querySelector('#study-summary').hidden = true;
      renderQuestion();
    });
  }

  window.CourseStudy = Object.freeze({
    registerBank(bank) { if (bank?.id) registry[bank.id] = bank; }
  });

  function autoOpenFromHash() {
    const m = /^#study\/([\w-]+)/.exec(location.hash);
    if (!m || (activeBank && activeBank.id === m[1])) return;
    const button = document.querySelector(`#study-grid button[data-bank="${m[1]}"]`);
    if (button) button.click();
  }

  function init() {
    if (!document.querySelector('#study-grid')) return;
    attachEvents();
    renderCatalog();
    autoOpenFromHash();
    window.addEventListener('hashchange', autoOpenFromHash);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once: true});
  else init();
})();
