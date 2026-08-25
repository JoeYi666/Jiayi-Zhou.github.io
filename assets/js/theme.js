/* Theme switcher: toggles light <-> dark.
   Persists choice in localStorage and defaults to light. */
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

  function apply(mode) {
    var root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(mode);
    root.setAttribute('data-theme', mode);
    setStored(mode);
    updateIcons(mode);
  }

  function currentMode() {
    var stored = getStored();
    return stored === 'dark' ? 'dark' : 'light';
  }

  function nextMode(mode) {
    return mode === 'light' ? 'dark' : 'light';
  }

  function updateIcons(mode) {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    ['light', 'dark'].forEach(function (m) {
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
