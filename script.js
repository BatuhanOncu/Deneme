'use strict';

// Tema değiştirme
const themeButton = document.getElementById('theme-toggle');
function updateThemeLabel() {
  const isLight = document.documentElement.dataset.theme === 'light';
  themeButton.setAttribute('aria-label', isLight ? 'Koyu temaya geç' : 'Açık temaya geç');
}
updateThemeLabel();
themeButton.addEventListener('click', () => {
  const current = document.documentElement.dataset.theme;
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('portfolio-theme', next); } catch (_) { /* gizli tarama */ }
  updateThemeLabel();
});

// Mobil menü
const menuButton = document.getElementById('menu-toggle');
const nav = document.getElementById('site-nav');
function closeMenu() {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Menüyü aç');
}
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Menüyü kapat' : 'Menüyü aç');
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
window.matchMedia('(min-width: 701px)').addEventListener('change', closeMenu);

// Proje filtreleri
const filters = [...document.querySelectorAll('[data-filter]')];
const projects = [...document.querySelectorAll('[data-category]')];
const empty = document.getElementById('filter-empty');
filters.forEach((button) => button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  filters.forEach((item) => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  let visibleCount = 0;
  projects.forEach((project) => {
    const matches = selected === 'all' || project.dataset.category.split(' ').includes(selected);
    project.hidden = !matches;
    if (matches) visibleCount++;
  });
  empty.hidden = visibleCount !== 0;
}));

document.getElementById('year').textContent = String(new Date().getFullYear());
