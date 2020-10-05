'use strict';

var buttonMenu = document.querySelector('.toggle');
var siteNavigation = document.querySelector('.main-nav');
var logo = document.querySelector('.logo__img');
var navigationMobile = document.querySelector('.nav-mobile');

buttonMenu.classList.remove('toggle--hidden');
logo.classList.remove('logo__img--fill-color');
navigationMobile.classList.remove('nav-mobile--js');

buttonMenu.addEventListener('click', function () {
  if (buttonMenu.classList.contains('toggle--opened')) {
    buttonMenu.classList.remove('toggle--opened');
    buttonMenu.classList.add('toggle--closed');
    logo.classList.remove('logo__img--fill-color');
  } else {
    buttonMenu.classList.remove('toggle--closed');
    buttonMenu.classList.add('toggle--opened');
    logo.classList.add('logo__img--fill-color');
  }
});

siteNavigation.classList.add('main-nav--closed');
buttonMenu.addEventListener('click', function () {
  if (siteNavigation.classList.contains('main-nav--closed')) {
    siteNavigation.classList.remove('main-nav--closed');
  } else {
    siteNavigation.classList.add('main-nav--closed');
  }
});
