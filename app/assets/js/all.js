let hamburger = document.querySelector('.header__hamburger');
hamburger.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.header__nav').classList.toggle('header__nav--active');
  document.querySelector('.header__hamburger').classList.toggle('header__hamburger--active');
});


// Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});