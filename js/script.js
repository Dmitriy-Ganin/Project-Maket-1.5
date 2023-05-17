let img = document.querySelector('.button-open__img');
let swiperC = document.querySelector('.swiper-container');
let button = document.querySelector('.button-open');

button.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (swiperC.classList.contains('over')) {
    open()
    } else {
     close()  
    }
});

function open() {
  swiperC.classList.remove('over');
        document.querySelector('.button-open__text').textContent = "Показать все";
        img.classList.remove('arrows_rotate');
        img.classList.add('arrows_revers');
        button.classList.remove('button-open--close');
        button.classList.add('button-open--opened');
}

function close() {
  swiperC.classList.add('over');
        document.querySelector('.button-open__text').textContent = "Скрыть";
        img.classList.add('arrows_rotate');
        img.classList.remove('arrows_revers');
        button.classList.add('button-open--close');
        button.classList.remove('button-open--opened');
}
