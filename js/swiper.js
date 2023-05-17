const slider = document.querySelector('.swiper-container');

let mySwiper;

function mobileSlider() {
    if (window.innerWidth < 767 && slider.dataset.mobile == 'false') {
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

    if (window.innerWidth > 767) {
        slider.dataset.mobile = 'false';

        if (slider.classList.contains('swiper-initialized')) {
            mySwiper.destroy();
        }
    }
}

mobileSlider();

window.addEventListener('resize', () => {
    mobileSlider();
})