/* ============================================================
   MAITLAND TRACTOR — Shared JS
   Mobile nav toggle + active link detection.
   ============================================================ */

(function () {
  /* Mobile nav toggle */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggle?.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    navLinks?.classList.toggle('nav-links--open');
  });

  /* Close mobile nav when a link is clicked */
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('nav-links--open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });

  /* Active nav link — mark current page */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navLinks?.querySelectorAll('a').forEach(link => {
    const linkPath = link.getAttribute('href')?.split('/').pop() || '';
    if (linkPath === currentPath) {
      link.setAttribute('aria-current', 'page');
    }
  });
})();
