/* ============================================================
   MAITLAND TRACTOR — Shared JS
   Mobile nav toggle + active link detection.
   ============================================================ */

(function () {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  /* Inject tap-to-call link into mobile dropdown */
  const phoneLi = document.createElement('li');
  phoneLi.className = 'nav-phone-item';
  phoneLi.innerHTML = '<a href="tel:+14078347272">(407) 834-7272</a>';
  navLinks?.appendChild(phoneLi);

  toggle?.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    navLinks?.classList.toggle('nav-links--open');
  });

  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('nav-links--open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navLinks?.querySelectorAll('a').forEach(link => {
    const linkPath = link.getAttribute('href')?.split('/').pop() || '';
    if (linkPath === currentPath) {
      link.setAttribute('aria-current', 'page');
    }
  });
})();
