(() => {
  'use strict';

  const STORAGE_KEY = 'ece321-ai-settings-v1';
  const ASSET_ROOT = new URL('.', document.currentScript.src);
  const PROVIDERS = {
    jev: {name: 'Jev', kind: 'decision', model: 'jev-latest'},
    openai: {name: 'OpenAI', kind: 'both', model: 'gpt-6.1-sol', decisionModel: 'gpt-6-luna'},
    anthropic: {name: 'Anthropic', kind: 'llm', model: 'claude-sonnet-5'},
    gemini: {name: 'Gemini', kind: 'llm', model: 'gemini-3.8-flash'}
  };
  const DEFAULTS = {
    keys: {jev: '', openai: '', anthropic: '', gemini: ''},
    decisionProvider: 'jev',
    llmProvider: 'openai'
  };

  function readSettings() {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      return {
        ...DEFAULTS,
        ...stored,
        keys: {...DEFAULTS.keys, ...(stored.keys || {})}
      };
    } catch (error) {
      return {...DEFAULTS, keys: {...DEFAULTS.keys}};
    }
  }

  let settings = readSettings();
  const listeners = new Set();

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (error) {
      throw new Error('This browser could not save settings to local storage.');
    }
    listeners.forEach(listener => listener(getSettings()));
    document.dispatchEvent(new CustomEvent('courseai:settingschange', {detail: getSettings()}));
  }

  function getSettings() {
    return {
      decisionProvider: settings.decisionProvider,
      llmProvider: settings.llmProvider,
      configured: Object.fromEntries(Object.keys(PROVIDERS).map(id => [id, Boolean(settings.keys[id])]))
    };
  }

  function setKey(provider, key) {
    assertProvider(provider);
    settings.keys[provider] = String(key || '').trim();
    save();
  }

  function clearKey(provider) {
    setKey(provider, '');
  }

  function setActiveProviders({decisionProvider, llmProvider} = {}) {
    if (decisionProvider !== undefined) {
      if (!['jev', 'openai'].includes(decisionProvider)) throw new Error('Choose Jev or OpenAI for decisions.');
      settings.decisionProvider = decisionProvider;
    }
    if (llmProvider !== undefined) {
      if (!['openai', 'anthropic', 'gemini'].includes(llmProvider)) throw new Error('Choose OpenAI, Anthropic, or Gemini for text generation.');
      settings.llmProvider = llmProvider;
    }
    save();
  }

  function assertProvider(provider) {
    if (!PROVIDERS[provider]) throw new Error(`Unknown AI provider: ${provider}`);
  }

  function requireKey(provider) {
    assertProvider(provider);
    const key = settings.keys[provider];
    if (!key) throw new Error(`Add your ${PROVIDERS[provider].name} API key in AI settings first.`);
    return key;
  }

  function asMessages(messages, prompt) {
    if (typeof prompt === 'string') return [{role: 'user', content: prompt}];
    if (typeof messages === 'string') return [{role: 'user', content: messages}];
    if (!Array.isArray(messages) || messages.length === 0) throw new Error('Provide a prompt or a non-empty messages array.');
    return messages.map(message => {
      if (!message || !['system', 'user', 'assistant'].includes(message.role)) throw new Error('Messages need a system, user, or assistant role.');
      return {role: message.role, content: message.content};
    });
  }

  function apiError(provider, response, body) {
    const detail = body?.error?.message || body?.message || response.statusText || 'Request failed';
    return new Error(`${PROVIDERS[provider].name} API (${response.status}): ${detail}`);
  }

  async function complete({prompt, messages, system, model, provider, signal, maxTokens = 2048, temperature, ...options} = {}) {
    provider = provider || settings.llmProvider;
    if (!['openai', 'anthropic', 'gemini'].includes(provider)) throw new Error('Text generation supports OpenAI, Anthropic, or Gemini.');
    const key = requireKey(provider);
    const conversation = asMessages(messages, prompt);
    const systemText = system || conversation.find(message => message.role === 'system')?.content || '';
    const turns = conversation.filter(message => message.role !== 'system');
    const selectedModel = model || PROVIDERS[provider].model;
    let response;
    let body;

    if (provider === 'openai') {
      const payload = {
        model: selectedModel,
        messages: [...(systemText ? [{role: 'system', content: systemText}] : []), ...turns],
        max_completion_tokens: maxTokens,
        ...(temperature === undefined ? {} : {temperature}),
        ...options
      };
      response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST', signal,
        headers: {'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      });
      body = await response.json().catch(() => ({}));
      if (!response.ok) throw apiError(provider, response, body);
      return {provider, model: body.model || selectedModel, text: body.choices?.[0]?.message?.content ?? '', raw: body};
    }

    if (provider === 'anthropic') {
      const payload = {
        model: selectedModel,
        max_tokens: maxTokens,
        messages: turns.map(message => ({role: message.role === 'assistant' ? 'assistant' : 'user', content: message.content})),
        ...(systemText ? {system: systemText} : {})
      };
      response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST', signal,
        headers: {
          'x-api-key': key,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      body = await response.json().catch(() => ({}));
      if (!response.ok) throw apiError(provider, response, body);
      return {provider, model: body.model || selectedModel, text: (body.content || []).filter(part => part.type === 'text').map(part => part.text).join(''), raw: body};
    }

    const contents = turns.map(message => ({
      role: message.role === 'assistant' ? 'model' : 'user',
      parts: [{text: typeof message.content === 'string' ? message.content : JSON.stringify(message.content)}]
    }));
    response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(selectedModel)}:generateContent`, {
      method: 'POST', signal,
      headers: {'x-goog-api-key': key, 'Content-Type': 'application/json'},
      body: JSON.stringify({
        contents,
        ...(systemText ? {systemInstruction: {parts: [{text: systemText}]}} : {}),
        generationConfig: {maxOutputTokens: maxTokens, ...(temperature === undefined ? {} : {temperature}), ...(options.generationConfig || {})},
        ...Object.fromEntries(Object.entries(options).filter(([key]) => key !== 'generationConfig'))
      })
    });
    body = await response.json().catch(() => ({}));
    if (!response.ok) throw apiError(provider, response, body);
    const text = (body.candidates?.[0]?.content?.parts || []).filter(part => part.text).map(part => part.text).join('');
    return {provider, model: selectedModel, text, raw: body};
  }

  function normalizeQuestions(questions) {
    if (!Array.isArray(questions) || questions.length < 1) throw new Error('Provide at least one decision question.');
    return questions.map((question, index) => {
      const name = question.name || `question_${index + 1}`;
      const type = question.type === 'noul' ? 'predicate' : question.type;
      if (!['predicate', 'choice', 'score'].includes(type)) throw new Error(`Unsupported decision type: ${question.type}`);
      if (!question.instructions) throw new Error(`Question "${name}" needs instructions.`);
      if (type === 'choice' && (!Array.isArray(question.choices) || !question.choices.length)) throw new Error(`Question "${name}" needs choices.`);
      if (type === 'score' && (!Array.isArray(question.levels) || !question.levels.length)) throw new Error(`Question "${name}" needs levels.`);
      return {...question, name, type};
    });
  }

  function jevQuestion(question) {
    const mapped = {type: question.type === 'predicate' ? 'noul' : question.type, instructions: question.instructions};
    if (question.type === 'choice') mapped.criteria = Object.fromEntries(question.choices.map(choice => [choice.value, choice.description || choice.value]));
    if (question.type === 'score') mapped.criteria = question.levels.map(level => level.label || String(level));
    return mapped;
  }

  async function decide({input, state, questions, model, provider, signal} = {}) {
    provider = provider || settings.decisionProvider;
    if (!['jev', 'openai'].includes(provider)) throw new Error('Decision calls support Jev or OpenAI.');
    const key = requireKey(provider);
    const evidence = input ?? state;
    if (evidence === undefined || evidence === null || evidence === '') throw new Error('Provide the input or state to evaluate.');
    const normalized = normalizeQuestions(questions);
    if (provider === 'jev' && normalized.length > 20) throw new Error('Jev accepts up to 20 questions in one request.');
    let url;
    let payload;
    let headers = {'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json'};

    if (provider === 'jev') {
      url = 'https://api.typesafe.ai/v1/systemone';
      payload = {
        model: model || PROVIDERS.jev.model,
        state: evidence,
        questions: Object.fromEntries(normalized.map(question => [question.name, jevQuestion(question)]))
      };
    } else {
      url = 'https://api.openai.com/v1/decisions';
      payload = {
        model: model || PROVIDERS.openai.decisionModel,
        input: evidence,
        questions: normalized.map(question => {
          const mapped = {type: question.type, name: question.name, instructions: question.instructions};
          if (question.type === 'choice') mapped.choices = question.choices;
          if (question.type === 'score') mapped.levels = question.levels;
          return mapped;
        })
      };
    }

    const response = await fetch(url, {method: 'POST', signal, headers, body: JSON.stringify(payload)});
    const body = await response.json().catch(() => ({}));
    if (!response.ok) throw apiError(provider, response, body);
    const answers = Array.isArray(body.answers)
      ? Object.fromEntries(body.answers.filter(answer => answer.name).map(answer => [answer.name, answer]))
      : body.answers;
    return {provider, model: body.model || payload.model, answers, raw: body};
  }

  window.CourseAI = Object.freeze({
    providers: Object.freeze(PROVIDERS),
    getSettings,
    setKey,
    clearKey,
    setActiveProviders,
    onSettingsChange(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    complete,
    decide
  });

  function logo(provider) {
    if (provider === 'jev') return `<img src="${new URL('logo-jev.png', ASSET_ROOT)}" alt="" width="28" height="28">`;
    const paths = {
      openai: 'logo-openai.svg',
      anthropic: 'logo-anthropic.svg',
      gemini: 'logo-gemini.svg'
    };
    return `<img src="${new URL(paths[provider], ASSET_ROOT)}" alt="" class="ai-provider-logo ai-logo-${provider}">`;
  }

  function mountSettings() {
    if (!document.body || document.querySelector('#ai-settings-dialog')) return;
    document.body.insertAdjacentHTML('beforeend', `
      <button class="ai-launcher" id="ai-settings-open" type="button" aria-haspopup="dialog" aria-controls="ai-settings-dialog" aria-label="AI provider settings">
        <span class="ai-launcher-mark" aria-hidden="true">✳</span><span>AI</span><i class="ai-ready-dot" aria-hidden="true"></i>
      </button>
      <dialog class="ai-dialog" id="ai-settings-dialog" aria-labelledby="ai-dialog-title">
        <form method="dialog" class="ai-dialog-close-wrap"><button class="ai-close" aria-label="Close settings">×</button></form>
        <div class="ai-dialog-heading"><p class="ai-eyebrow">PERSONAL API CONNECTIONS</p><h2 id="ai-dialog-title">AI settings</h2><p>Choose a decision provider and a text model provider. Your API keys stay in this browser.</p></div>
        <div class="ai-active-grid">
          <label>Decision provider<select id="ai-decision-provider"><option value="jev">Jev</option><option value="openai">OpenAI</option></select></label>
          <label>Text generation<select id="ai-llm-provider"><option value="openai">OpenAI</option><option value="anthropic">Anthropic</option><option value="gemini">Gemini</option></select></label>
        </div>
        <div class="ai-key-heading"><h3>Provider keys</h3><span>Saved only on this device</span></div>
        <div class="ai-provider-list">
          ${['jev', 'openai', 'anthropic', 'gemini'].map(provider => `
            <section class="ai-provider-row" data-provider="${provider}">
              <div class="ai-provider-brand">${logo(provider)}<span>${PROVIDERS[provider].name}</span></div>
              <div class="ai-key-control"><label class="sr-only" for="ai-key-${provider}">${PROVIDERS[provider].name} API key</label><input id="ai-key-${provider}" type="password" autocomplete="off" spellcheck="false" placeholder="${provider === 'jev' ? 'sk-…' : 'Paste API key'}"><button class="ai-key-save" type="button" data-save="${provider}">Save</button></div>
              <div class="ai-key-meta"><p class="ai-key-status" id="ai-status-${provider}" aria-live="polite">Not saved</p><button class="ai-key-remove" type="button" data-remove="${provider}" hidden>Remove</button></div>
            </section>`).join('')}
        </div>
        <p class="ai-storage-note">Keys are stored unencrypted in this browser’s local storage and are readable by scripts on this site. Use this for a personal browser only; a shared or public site should use a server-side key store.</p>
        <p class="ai-dialog-message" id="ai-dialog-message" role="status" aria-live="polite"></p>
      </dialog>`);

    const dialog = document.querySelector('#ai-settings-dialog');
    const launcher = document.querySelector('#ai-settings-open');
    const decisionSelect = document.querySelector('#ai-decision-provider');
    const llmSelect = document.querySelector('#ai-llm-provider');
    const message = document.querySelector('#ai-dialog-message');

    function paint(clearInputs = false) {
      decisionSelect.value = settings.decisionProvider;
      llmSelect.value = settings.llmProvider;
      Object.keys(PROVIDERS).forEach(provider => {
        const input = document.querySelector(`#ai-key-${provider}`);
        const status = document.querySelector(`#ai-status-${provider}`);
        const configured = Boolean(settings.keys[provider]);
        if (clearInputs) input.value = '';
        input.placeholder = configured ? 'Key saved · enter a new key to replace' : (provider === 'jev' ? 'sk-…' : 'Paste API key');
        status.textContent = configured ? 'Key saved' : 'Not saved';
        status.classList.toggle('is-saved', configured);
        document.querySelector(`[data-remove="${provider}"]`).hidden = !configured;
        document.querySelector(`.ai-provider-row[data-provider="${provider}"]`).classList.toggle('is-active', provider === settings.decisionProvider || provider === settings.llmProvider);
      });
      launcher.classList.toggle('has-key', Object.values(settings.keys).some(Boolean));
    }

    launcher.addEventListener('click', () => { paint(true); dialog.showModal(); });
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
    decisionSelect.addEventListener('change', () => {
      try { window.CourseAI.setActiveProviders({decisionProvider: decisionSelect.value}); message.textContent = 'Decision provider updated.'; }
      catch (error) { message.textContent = error.message; }
    });
    llmSelect.addEventListener('change', () => {
      try { window.CourseAI.setActiveProviders({llmProvider: llmSelect.value}); message.textContent = 'Text provider updated.'; }
      catch (error) { message.textContent = error.message; }
    });
    document.querySelectorAll('[data-save]').forEach(button => button.addEventListener('click', () => {
      const provider = button.dataset.save;
      const input = document.querySelector(`#ai-key-${provider}`);
      const key = input.value.trim();
      if (!key) { message.textContent = 'Paste a key before saving.'; input.focus(); return; }
      try { window.CourseAI.setKey(provider, key); input.value = ''; message.textContent = `${PROVIDERS[provider].name} key saved on this device.`; paint(); }
      catch (error) { message.textContent = error.message; }
    }));
    document.querySelectorAll('[data-remove]').forEach(button => button.addEventListener('click', () => {
      const provider = button.dataset.remove;
      try { window.CourseAI.clearKey(provider); message.textContent = `${PROVIDERS[provider].name} key removed from this device.`; }
      catch (error) { message.textContent = error.message; }
    }));
    document.addEventListener('courseai:settingschange', paint);
    paint();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountSettings, {once: true});
  else mountSettings();
})();
