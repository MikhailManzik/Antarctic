'use strict';

var buttonMenu = document.querySelector('.toggle');
var siteNavigation = document.querySelector('.main-nav');
var logo = document.querySelector('.logo__img');
var navigationMobile = document.querySelector('.nav-mobile');
var checkboxForm = document.querySelector('#checkbox-personal-data');
var checkboxBlock = document.querySelector('.checkbox');
var buttonSubmitForm = document.querySelector('.order__button');
var checkboxLabel = checkboxBlock.querySelector('span');

buttonMenu.classList.remove('toggle--hidden');
logo.classList.remove('logo__img--fill-color');
navigationMobile.classList.remove('nav-mobile--js');

buttonMenu.addEventListener('click', function () {
  if (buttonMenu.classList.contains('toggle--close-icon')) {
    buttonMenu.classList.remove('toggle--close-icon');
    logo.classList.remove('logo__img--fill-color');
  } else {
    buttonMenu.classList.add('toggle--close-icon');
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

var addColorChceckboxLabel = function () {
  if (!checkboxForm.checked) {
    checkboxLabel.style.color = 'red';
  }
};

var removeColorChceckboxLabel = function () {
  checkboxLabel.style.color = '#ffffff';
};

buttonSubmitForm.addEventListener('click', addColorChceckboxLabel);
checkboxForm.addEventListener('input', removeColorChceckboxLabel);
