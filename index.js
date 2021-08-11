const hamburgerBtn = document.querySelector('[data-hamburger]');
const closeNavBtn = document.querySelector('[data-close-nav]');
const shopBtnArr = [...document.querySelectorAll('[data-shop-btn]')];
const sliderBtnArr = [...document.querySelectorAll('[data-slider-arrow]')];
const sliderPageArr = [...document.querySelectorAll('[data-slider-page]')];
const navPanel = document.querySelector('[data-nav-panel]');
let arrow;
let flag;

const changeZIndex = (e) => {
  const id = e.target.getAttribute('data-id') * 1 - 1;
  switch (arrow) {
    case 'left':
      sliderPageArr[id].style.zIndex = '1';
      sliderPageArr.forEach((page, index) => {
        if (index !== id) {
          page.style.zIndex = window.getComputedStyle(page).zIndex * 1 + 1;
        }
      })
      break;
    case 'right':
      sliderPageArr.forEach((page) => {
        if (window.getComputedStyle(page).zIndex * 1 !== 1) {
          page.style.zIndex = window.getComputedStyle(page).zIndex * 1 - 1;
        } else {
          page.style.zIndex = '3';
        }
      })
      break;
  }
  sliderPageArr.forEach((page) => {
    page.style.transition = 'none';
    page.classList.remove('slider__page--slide');
    setTimeout(() => page.style.transition = '');
  })

}

const handleSliderBtn = (e) => {
  const id = e.target.getAttribute('data-id') * 1 - 1;
  arrow = e.target.getAttribute('data-slider-arrow');
  sliderPageArr[id].addEventListener('transitionend', changeZIndex, { once: true });
  switch (arrow) {
    case 'left':
      sliderPageArr[id].classList.add('slider__page--slide');
      break;
    case 'right':
      sliderPageArr.forEach((page) => {
        if (window.getComputedStyle(page).zIndex * 1 !== 1) {
          page.classList.add('slider__page--slide');
        }
      })
      break;
  }

}

sliderBtnArr.forEach((button) => button.addEventListener('click', handleSliderBtn));

hamburgerBtn.addEventListener('click', () => navPanel.classList.toggle('nav__panel--active'));
closeNavBtn.addEventListener('click', () => navPanel.classList.toggle('nav__panel--active'))