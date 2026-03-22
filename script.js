const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

window.addEventListener('load', () => {
  const frame = document.querySelector('.reputation-frame iframe');
  const fallback = document.querySelector('.frame-fallback');

  if (!frame || !fallback) return;

  setTimeout(() => {
    try {
      const doc = frame.contentDocument || frame.contentWindow.document;
      if (!doc || !doc.body || doc.body.innerHTML.trim() === '') {
        fallback.style.display = 'flex';
      }
    } catch (error) {
      fallback.style.display = 'flex';
    }
  }, 2200);
});
