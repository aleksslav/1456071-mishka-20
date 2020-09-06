var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('main-nav__toggle--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
    navToggle.classList.remove('main-nav__toggle--closed');
    navToggle.classList.add('main-nav__toggle--opened');
  } else {
    navMain.classList.add('main-nav--opened');
    navMain.classList.remove('main-nav--closed');
    navToggle.classList.add('main-nav__toggle--closed');
    navToggle.classList.remove('main-nav__toggle--opened');
  }
});

const overlayModal = document.querySelector('.modal-overlay');
const catalogBlock = document.querySelector('.catalog');
const orderButton = document.querySelector('.popular-product__order');

if (overlayModal) {
  if (catalogBlock) {
    catalogBlock.addEventListener('click', openOrderForm);
  }

  if (orderButton) {
    orderButton.addEventListener('click', openOrderForm);
  }

  overlayModal.addEventListener('click', closeOrderForm);
  window.addEventListener('keydown', closeOrderForm);
}

function openOrderForm(event) {
  const element = event.target;

  if (
    element.classList.contains('product-card__button') ||
    element.classList.contains('popular-product__order')
  ) {
    event.preventDefault();
    overlayModal.classList.add('modal-overlay--opened');
  }
}

function closeOrderForm(event) {
  const element = event.target;

  if (element.classList.contains('modal-overlay') || event.keyCode === 27) {
    overlayModal.classList.remove('modal-overlay--opened');
  }
}

function init(ymaps) {
  /*eslint-enable*/
  let map = new ymaps.Map('map', {
    center: [59.938635, 30.323118],
    zoom: 15,
    controls: ['zoomControl']
  });

  let placemark = new ymaps.Placemark(
    [59.938635, 30.323118],
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: 'img/icon-map-pin.svg',
      iconImageSize: [66, 101],
      iconImageOffset: [-33, -101]
    }
  );

  map.behaviors.disable('scrollZoom');
  map.geoObjects.add(placemark);
}
