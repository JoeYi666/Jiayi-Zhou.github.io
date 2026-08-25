/* Publications page: toggle abstract and BibTeX details. */
(function () {
  function init() {
    document.querySelectorAll('.paper-card__toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var targetId = btn.getAttribute('data-toggle');
        var target = document.getElementById(targetId);
        if (!target) return;
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        target.hidden = expanded;
        btn.classList.toggle('is-open', !expanded);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
