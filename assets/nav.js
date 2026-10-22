/* Navbar behavior: dropdowns, mobile menu, active state and page search.
   Search data: window.SITE_SEARCH = [{t: title, u: url relative to the site root, g: group, k: keywords}]. */
(function () {
  var bar = document.querySelector('header.sn');
  if (!bar) return;
  var prefix = bar.getAttribute('data-prefix') || '';
  var dds = [].slice.call(bar.querySelectorAll('.sn-dd'));

  /* Dropdowns */
  function closeAll(except) {
    dds.forEach(function (d) {
      if (d === except) return;
      d.classList.remove('sn-open');
      d.querySelector('.sn-btn').setAttribute('aria-expanded', 'false');
    });
  }
  dds.forEach(function (d) {
    var btn = d.querySelector('.sn-btn');
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = !d.classList.contains('sn-open');
      closeAll(d);
      d.classList.toggle('sn-open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  document.addEventListener('click', function (e) { if (!bar.contains(e.target)) { closeAll(); hideResults(); } });
  bar.addEventListener('click', function (e) {
    if (e.target.closest('a.sn-item, a.sn-link, a.sn-res')) { closeAll(); bar.classList.remove('sn-open'); }
  });

  /* Mobile menu */
  var toggle = bar.querySelector('.sn-toggle');
  toggle.addEventListener('click', function () {
    var open = !bar.classList.contains('sn-open');
    bar.classList.toggle('sn-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  [].forEach.call(bar.querySelectorAll('.sn-btn'), function (b) {
    b.addEventListener('click', function () {
      if (getComputedStyle(toggle).display === 'none') return;
      var p = b.nextElementSibling; p.style.display = b.parentNode.classList.contains('sn-open') ? 'block' : 'none';
    });
  });

  /* Active state on the single-page index (views are hash based) */
  function markActive() {
    var onIndex = /(^|\/)(index\.html)?$/.test(location.pathname) && !!document.getElementById('course-content');
    if (!onIndex) return;
    var v = (location.hash.slice(1).split('/')[0]) || 'home';
    var map = { syllabus: 'syllabus', lessons: 'guides', homework: 'guides', study: 'study', docs: 'reference', equations: 'reference' };
    var key = map[v];
    [].forEach.call(bar.querySelectorAll('.sn-link, .sn-btn'), function (el) { el.classList.remove('sn-active'); el.removeAttribute('aria-current'); });
    var sel = { syllabus: 'a.sn-link[href$="#syllabus"]', study: 'a.sn-link[href$="#study"]' }[key];
    var el = sel ? bar.querySelector(sel) : (key === 'guides' ? dds[0] : key === 'reference' ? dds[1] : null);
    if (el) { var t = el.classList.contains('sn-dd') ? el.querySelector('.sn-btn') : el; t.classList.add('sn-active'); }
  }
  addEventListener('hashchange', markActive); markActive();

  /* Search */
  var form = bar.querySelector('.sn-search'), input = bar.querySelector('.sn-input'), box = bar.querySelector('.sn-results');
  var data = window.SITE_SEARCH || [], shown = [], sel = -1;
  function norm(s) { return (s || '').toLowerCase().replace(/[^a-z0-9.]+/g, ' ').trim(); }
  data.forEach(function (d) { d._t = norm(d.t); d._h = norm(d.t + ' ' + (d.g || '') + ' ' + (d.k || '')); });
  function score(d, terms) {
    var s = 0;
    for (var i = 0; i < terms.length; i++) {
      var w = terms[i];
      if (d._t.indexOf(w) === 0) s += 6; else if ((' ' + d._t).indexOf(' ' + w) >= 0) s += 4; else if (d._t.indexOf(w) >= 0) s += 2;
      else if ((' ' + d._h).indexOf(' ' + w) >= 0) s += 1.5; else if (d._h.indexOf(w) >= 0) s += 0.7; else return 0;
    }
    return s;
  }
  function hideResults() { box.hidden = true; sel = -1; }
  function render() {
    var q = norm(input.value);
    if (!q) { hideResults(); return; }
    var terms = q.split(' ');
    shown = data.map(function (d) { return { d: d, s: score(d, terms) }; }).filter(function (x) { return x.s > 0; })
      .sort(function (a, b) { return b.s - a.s || a.d._t.localeCompare(b.d._t, undefined, { numeric: true }); }).slice(0, 9);
    box.textContent = '';
    if (!shown.length) { var n = document.createElement('div'); n.className = 'sn-none'; n.textContent = 'No matching pages'; box.appendChild(n); }
    shown.forEach(function (x, i) {
      var a = document.createElement('a'); a.className = 'sn-res'; a.href = prefix + x.d.u; a.setAttribute('role', 'option');
      var b = document.createElement('b'); b.textContent = x.d.t; var g = document.createElement('i'); g.textContent = x.d.g || '';
      a.appendChild(b); a.appendChild(g); box.appendChild(a);
    });
    box.hidden = false; select(shown.length ? 0 : -1);
  }
  function select(i) {
    var items = [].slice.call(box.querySelectorAll('.sn-res'));
    items.forEach(function (el, j) { el.setAttribute('aria-selected', j === i ? 'true' : 'false'); });
    sel = i; if (items[i]) items[i].scrollIntoView({ block: 'nearest' });
  }
  function go(a) { if (a) { hideResults(); input.blur(); location.href = a.href; if (/#/.test(a.href) && a.pathname === location.pathname) location.reload(); } }
  input.addEventListener('input', render);
  input.addEventListener('focus', function () { closeAll(); if (input.value) render(); });
  input.addEventListener('keydown', function (e) {
    var n = box.querySelectorAll('.sn-res').length;
    if (e.key === 'ArrowDown') { e.preventDefault(); if (n) select((sel + 1) % n); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); if (n) select((sel - 1 + n) % n); }
    else if (e.key === 'Enter') { e.preventDefault(); go(box.querySelectorAll('.sn-res')[Math.max(sel, 0)]); }
    else if (e.key === 'Escape') { input.value = ''; hideResults(); input.blur(); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && !/^(INPUT|TEXTAREA|SELECT)$/.test((document.activeElement || {}).tagName) && !(document.activeElement || {}).isContentEditable) {
      e.preventDefault(); bar.classList.add('sn-open'); input.focus(); input.select();
    }
    if (e.key === 'Escape') { closeAll(); }
  });
})();
