'use strict';
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');

// pageHeader.classList.remove('page-header--nojs');

// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });

var buttonMenu = document.querySelector('.toggle');
var siteNavigation = document.querySelector('.main-nav');
var logo = document.querySelector('.logo__img');
var navigationMobile = document.querySelector('.nav-mobile');
var headBlock = document.querySelector('.head');

buttonMenu.classList.remove('toggle--hidden');
logo.classList.remove('logo__img--fill-color');
navigationMobile.classList.remove('nav-mobile--nojs');
headBlock.classList.remove('head--nojs');

buttonMenu.addEventListener('click', function () {
  if (buttonMenu.classList.contains('toggle--icon-opened')) {
    buttonMenu.classList.remove('toggle--icon-opened');
    buttonMenu.classList.add('toggle--icon-closed');
    logo.classList.remove('logo__img--fill-color');
  } else {
    buttonMenu.classList.remove('toggle--icon-closed');
    buttonMenu.classList.add('toggle--icon-opened');
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
