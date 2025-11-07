// Mobile menu
const menuBtn = document.getElementById('menu');
const links = document.getElementById('links');
menuBtn?.addEventListener('click', () => links.classList.toggle('show'));

// Theme toggle (light/dark)
const toggle = document.getElementById('theme-toggle');
const setTheme = (t) => {
  document.body.classList.toggle('light', t === 'light');
  localStorage.setItem('theme', t);
};
const saved = localStorage.getItem('theme') || 'dark';
setTheme(saved);
toggle?.addEventListener('click', () => setTheme(document.body.classList.contains('light') ? 'dark' : 'light'));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
