const hamburgerBtn = document.querySelector('[data-hamburger]');
const closeNavBtn = document.querySelector('[data-close-nav]');
const navPanel = document.querySelector('[data-nav-panel]');

hamburgerBtn.addEventListener('click', () => navPanel.classList.toggle('nav__panel--active'));
closeNavBtn.addEventListener('click', () => navPanel.classList.toggle('nav__panel--active'))