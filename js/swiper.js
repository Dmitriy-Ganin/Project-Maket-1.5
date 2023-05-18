const slider = document.querySelector('.swiper-container');
let mySwiper;
let state = false;

const mediaQuery = '(width < 768px)';
const mediaQueryList = window.matchMedia(mediaQuery);

mediaQueryList.addEventListener('change', event => {
    
  if (event.matches) {
    state = true;
            mySwiper = new Swiper(slider, {
              direction: 'horizontal',
              width: 320,
              slidesPerView: 1.3,
              spaceBetween: 16,
              pagination: {
                  el: '.pagination',
                  clickable: true,
              },
              mousewheel: {
                sensitivity: 1,
                eventsTarget: '.swiper-container',
                },
            });
  } else {
    if (mySwiper) {
      mySwiper.destroy()
      state = false;
  }
  }
})
