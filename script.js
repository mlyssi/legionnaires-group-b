// Legionnaires' Disease – Group B: small helpers used on every page.
(function () {
  // On phones, scroll the menu so the current page is visible.
  var current = document.querySelector('.nav a.current');
  var nav = document.querySelector('.nav');
  if (current && nav && nav.scrollWidth > nav.clientWidth) {
    nav.scrollLeft = current.offsetLeft - 20;
  }
  // Highlight the current subsection in "On this page" while scrolling.
  var links = Array.prototype.slice.call(document.querySelectorAll('.toc a'));
  if (links.length) {
    var targets = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });
    var update = function () {
      var on = 0;
      targets.forEach(function (t, i) { if (t && t.getBoundingClientRect().top < 120) on = i; });
      links.forEach(function (a, i) { a.classList.toggle('on', i === on); });
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
  }
})();
