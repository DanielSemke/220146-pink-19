/* Открывает и закрывает меню */
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });


/*Модальное окно "Сообщение отправлено" */

var popupSend = document.querySelector(".pop-up-succes");
var okButtonSucces = document.querySelector(".pop-up-succes__ok-button");
var popupcloseSucces = document.querySelector(".pop-up-succes");
/*Модальное окно "Сообщение НЕ отправлено" */
var popupNoSend = document.querySelector(".pop-up-failure");
var okButtonFailure = document.querySelector(".pop-up-failure__ok-button");
var popupcloseFailure = document.querySelector(".pop-up-failure");

var form = document.querySelector ("form");
var name = document.querySelector("[name=username]");
var firstname = document.querySelector("[name=firstname]");
var email = document.querySelector("[name=email]");

/*sendbutton.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupno.classList.add("pop-up-failure__open");
});*/

/*sendbutton.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupsend.classList.add("pop-up-succes__open");
});*/


/*Проверка формы */
  form.addEventListener("submit", function(evt) {
    if (!name.value || !firstname.value || !email.value) {
      evt.preventDefault();
      popupNoSend.classList.add("pop-up-failure__open");
  } else {
    evt.preventDefault();
    popupSend.classList.add("pop-up-succes__open");
  }
});

  okButtonFailure.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupcloseFailure.classList.remove("pop-up-failure__open");
});

  okButtonSucces.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupcloseSucces.classList.remove("pop-up-succes__open");
});
