/* ============================================================
   ClymbUp.ai — Scroll Reveal Animation
   cu-animate.js  |  Uses native IntersectionObserver API
   ============================================================ */
(function () {
  'use strict';

  // Graceful degradation for old browsers
  if (!window.IntersectionObserver) {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target); // fire once per element
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -36px 0px'
    }
  );

  function initReveal() {
    document.querySelectorAll('.reveal').forEach(function (el) {
      io.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }
})();
