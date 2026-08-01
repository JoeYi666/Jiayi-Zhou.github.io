/* Language switcher: toggles <html data-lang="en|zh"> and persists the choice.
   All bilingual content lives in the DOM as [data-lang-block="en"/"zh"] pairs;
   CSS shows only the active language. */
(function () {
  var KEY = 'site-lang';

  function current() {
    return document.documentElement.getAttribute('data-lang') === 'zh' ? 'zh' : 'en';
  }

  function apply(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'zh' ? 'EN' : '中文';
  }

  function init() {
    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.textContent = current() === 'zh' ? 'EN' : '中文';
      btn.addEventListener('click', function () {
        apply(current() === 'zh' ? 'en' : 'zh');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
