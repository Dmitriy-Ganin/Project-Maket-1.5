const button = document.querySelector('.button-open');
const cardsOpen = document.querySelector('.swiper-container');
const buttonText = document.querySelector('.button-open__text');
let img = document.querySelector('.button-open__img');

button.addEventListener("click", buttonClick);

function buttonClick() {
    cardsOpen.classList.toggle('swiper-wrapper--open');
    if (cardsOpen.classList.contains('swiper-wrapper--open')) {
        buttonText.textContent="Скрыть";
        button.classList.add('button-open','button-open--opened');
        img.classList.replace('button-open__img', 'arrows_rotate' );
    } else {
      buttonText.textContent="Показать все";
      button.classList.remove('button-open--opened','button-open--close');
      img.classList.replace('arrows_rotate','button-open__img');
    }
}