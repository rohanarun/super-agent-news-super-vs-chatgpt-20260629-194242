// Lightweight motion with GSAP (guarded)
(function () {
  if (typeof window === 'undefined') return;
  var run = function () {
    var items = document.querySelectorAll('.compare-card, .bento-card, .media-frame');
    items.forEach(function (el) {
      el.style.opacity = 0;
      el.style.transform = 'translateY(20px)';
    });
    if (!window.gsap) {
      items.forEach(function (el) {
        el.style.opacity = 1;
        el.style.transform = 'none';
      });
      return;
    }
    window.gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.08,
      scrollTrigger: {
        trigger: document.body,
        start: 'top top'
      }
    });
  };

  var s = document.createElement('script');
  s.src = 'https://unpkg.com/gsap@3/dist/gsap.min.js';
  s.onload = run;
  s.onerror = run;
  document.head.appendChild(s);
})();
