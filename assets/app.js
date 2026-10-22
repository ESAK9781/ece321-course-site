(() => {
  const links = [...document.querySelectorAll('nav a')];
  const views = [...document.querySelectorAll('.view')];
  const allowed = new Set(views.map(v => v.id));
  function showView() {
    const seg = location.hash.slice(1).split('/')[0];
    const id = allowed.has(seg) ? seg : 'home';
    document.body.classList.toggle('is-home', id === 'home');
    document.body.classList.toggle('is-study', id === 'study');
    views.forEach(v => { v.hidden = v.id !== id; });
    links.forEach(a => {
      const active = a.hash === '#' + id;
      a.classList.toggle('active', active);
      if (active) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  }
  window.addEventListener('hashchange', showView);
  showView();
  const input = document.querySelector('#pattern-query');
  const clear = document.querySelector('#pattern-clear');
  const cards = [...document.querySelectorAll('#pattern-results .card')];
  const status = document.querySelector('#pattern-status');
  const empty = document.querySelector('#pattern-empty');
  if (input) {
    const searchable = cards.map(card => ({card, text: (card.querySelector('h3').textContent + ' ' + card.querySelector('p').textContent).toLowerCase()}));
    function filterPatterns() {
      const terms = input.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
      let count = 0;
      searchable.forEach(({card, text}) => {
        const match = terms.every(term => text.includes(term));
        card.hidden = !match;
        if (match) count++;
      });
      clear.hidden = !input.value;
      empty.hidden = count > 0;
      status.textContent = `${count} problem ${count === 1 ? 'pattern' : 'patterns'}${terms.length ? ' found' : ''}`;
    }
    input.addEventListener('input', filterPatterns);
    clear.addEventListener('click', () => { input.value = ''; filterPatterns(); input.focus(); });
    filterPatterns();
  }
})();
