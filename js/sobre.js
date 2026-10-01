/* ===== SERVIX — sobre.js ===== */
(function () {
  'use strict';

  // Scroll suave para âncoras internas
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Anima a timeline conforme entra na viewport
  var tlItems = document.querySelectorAll('.tl-item');
  if ('IntersectionObserver' in window && tlItems.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.style.opacity = '1';
          en.target.style.transform = 'none';
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.2 });
    tlItems.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateX(-12px)';
      el.style.transition = 'opacity .6s ease, transform .6s ease';
      io.observe(el);
    });
  }
})();
