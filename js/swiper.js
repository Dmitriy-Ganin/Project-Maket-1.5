const slider = document.querySelector('.swiper-container');

let mySwiper;

function mobileSlider() {
  if (window.matchMedia('(max-width: 767px)') && slider.dataset.mobile == 'false') {
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
        eventsTarget: '.swiper-container'
      },
    });

    slider.dataset.mobile = 'true';
  }

  else {
    slider.dataset.mobile = 'false';
    if (mySwiper) {
      mySwiper.destroy();
    }
  }
}

mobileSlider();

window.addEventListener('change', () => {
  mobileSlider();
})