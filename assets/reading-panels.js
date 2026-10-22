/* Worked similar problems (reading-guide panels). A site addition loaded after the
   original mode and hover scripts; it does not change them.
   Screen: each section.ws stays at the end of its problem, collapsed behind a
   toggle. Printer-friendly mode and real printing: every section.ws moves, in
   order, into an appendix before the footer; turning printer-friendly off (or
   finishing a print from screen mode) puts each one back where it was.
   section.ws must not contain <details>: the mode script restores dropdowns by
   document order, so moving dropdowns would scramble that restore. */
(function () {
  var root = document.documentElement;
  var wrap = document.querySelector('.wrap');
  var ws = Array.prototype.slice.call(document.querySelectorAll('section.ws'));
  if (!wrap || !ws.length) return;

  ws.forEach(function (s) {
    s._home = s.parentNode; s._next = s.nextSibling;
    var b = s.querySelector('.ws-toggle'), body = s.querySelector('.ws-body');
    if (b && body) b.addEventListener('click', function () {
      var open = b.getAttribute('aria-expanded') !== 'true';
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
      body.hidden = !open;
    });
  });

  var app = document.createElement('section');
  app.className = 'ws-appendix'; app.id = 'worked'; app.hidden = true;
  var h = document.createElement('h2'); h.textContent = 'Appendix: Worked Similar Problems';
  var p = document.createElement('p'); p.className = 'topic';
  p.textContent = 'Each problem uses the same circuit and asks the same questions as an assigned problem, but with different numbers. The assigned problems themselves are not solved.';
  app.appendChild(h); app.appendChild(p);
  wrap.insertBefore(app, wrap.querySelector(':scope > footer'));

  var out = false;
  function toAppendix() {
    if (out) return;
    ws.forEach(function (s) { app.appendChild(s); });
    app.hidden = false; out = true;
  }
  function toHome() {
    if (!out) return;
    ws.slice().reverse().forEach(function (s) { s._home.insertBefore(s, s._next); });
    app.hidden = true; out = false;
  }
  function sync() { if (root.getAttribute('data-mode') === 'print') toAppendix(); else toHome(); }

  sync();
  var sw = document.getElementById('mode-switch');
  if (sw) sw.addEventListener('click', sync);
  addEventListener('beforeprint', toAppendix);
  addEventListener('afterprint', sync);
})();
