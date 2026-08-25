/* Theme switcher: cycles system -> light -> dark -> system.
   Persists choice in localStorage and listens to OS theme changes in system mode. */
(function () {
  var KEY = 'site-theme';

  function getStored() {
    try {
      return localStorage.getItem(KEY);
    } catch (e) {
      return null;
    }
  }

  function setStored(mode) {
    try {
      localStorage.setItem(KEY, mode);
    } catch (e) {}
  }

  function getSystem() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function effective(mode) {
    return mode === 'system' ? getSystem() : mode;
  }

  function apply(mode) {
    var eff = effective(mode);
    var root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(eff);
    root.setAttribute('data-theme', mode);
    setStored(mode);
    updateIcons(mode);
  }

  function currentMode() {
    var stored = getStored();
    if (stored === 'light' || stored === 'dark' || stored === 'system') return stored;
    return 'system';
  }

  function nextMode(mode) {
    if (mode === 'system') return 'light';
    if (mode === 'light') return 'dark';
    return 'system';
  }

  function updateIcons(mode) {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    ['light', 'dark', 'system'].forEach(function (m) {
      var icon = btn.querySelector('.theme-toggle__icon--' + m);
      if (icon) icon.classList.toggle('is-active', m === mode);
    });
  }

  function init() {
    apply(currentMode());

    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        apply(nextMode(currentMode()));
      });
    }

    var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
    if (mq && mq.addEventListener) {
      mq.addEventListener('change', function () {
        if (currentMode() === 'system') apply('system');
      });
    } else if (mq && mq.addListener) {
      mq.addListener(function () {
        if (currentMode() === 'system') apply('system');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

/* Highlight the current page in the top navigation. */
(function () {
  function initNav() {
    var path = window.location.pathname.replace(/\/$/, '') || '/';
    document.querySelectorAll('.topnav__links a[data-nav-link]').forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;
      var linkPath = href.replace(/\/$/, '') || '/';
      if (linkPath === path) {
        link.classList.add('is-active');
      } else {
        link.classList.remove('is-active');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }
})();
