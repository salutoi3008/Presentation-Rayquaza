// ============================================================
// RAYQUAZA.JS — Interactions de la page
// ============================================================


// ============================================================
// OVERLAY ZOOM — Agrandissement des images au clic
// ============================================================

// Récupère l'élément overlay (le fond noir qui couvre tout l'écran)
const overlay    = document.getElementById('overlay');
// Récupère la balise <img> à l'intérieur de l'overlay, qui va afficher l'image agrandie
const overlayImg = document.getElementById('overlay-img');
document.querySelectorAll('.zoomable').forEach(img => {

img.addEventListener('click', () => {
 overlayImg.src = img.src;
 overlay.classList.add('show');
  });
});

overlay.addEventListener('click', () => overlay.classList.remove('show'));


// ============================================================
// RETOUR EN HAUT — Bouton qui apparaît après avoir scrollé
// ============================================================

// Récupère le bouton "retour en haut" dans le HTML
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 600 ? 'flex' : 'none';
});


backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));


// ============================================================
// TOGGLE THÈME — Basculer entre mode sombre et mode clair
// ============================================================

// Récupère le bouton de changement de thème
const themeToggle = document.getElementById('themeToggle');

// Écoute le clic sur ce bouton
themeToggle.addEventListener('click', () => {
 document.body.classList.toggle('light-mode');
  themeToggle.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
});


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

// Sélectionne toutes les balises <section> de la page et les soumet à l'observation
document.querySelectorAll('section').forEach(s => observer.observe(s));
