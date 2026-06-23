// ============================================================
// RAYQUAZA.JS — Interactions de la page
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ============================================================
  // OVERLAY ZOOM — Agrandissement des images au clic
  // ============================================================

  const overlay    = document.getElementById('overlay');
  const overlayImg = document.getElementById('overlay-img');

  if (overlay && overlayImg) {
    document.querySelectorAll('.zoomable').forEach(img => {
      img.addEventListener('click', () => {
        overlayImg.src = img.src;
        overlay.classList.add('show');
      });
    });

    overlay.addEventListener('click', () => overlay.classList.remove('show'));

    // Fermeture avec la touche Échap
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') overlay.classList.remove('show');
    });
  }

  // ============================================================
  // RETOUR EN HAUT — Bouton qui apparaît après avoir scrollé
  // ============================================================

  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.style.display = window.scrollY > 600 ? 'flex' : 'none';
    });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ============================================================
  // TOGGLE THÈME — Basculer entre mode sombre et mode clair
  // ============================================================

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      themeToggle.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
    });
  }

  // ============================================================
  // APPARITION AU SCROLL — Anime les sections quand elles entrent dans l'écran
  // ============================================================

  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    }),
    { threshold: 0.1 }
  );

  document.querySelectorAll('section').forEach(s => observer.observe(s));

});
