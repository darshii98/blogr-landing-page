"use strict";

const btnProduct = document.querySelector(".btn-product");
const btnCompany = document.querySelector(".btn-company");
const btnConnect = document.querySelector(".btn-connect");
const btnMenu = document.querySelector(".btn-menu");

const toolTipBox = document.querySelector(".tooltip-box");
const navLinksContainer = document.querySelector(".nav-links-container");
const signUpBtns = document.querySelector(".signup-btns");

const navLinks = document.querySelector(".nav-links");

const upArr = document.querySelectorAll(".up-arr");
const downArr = document.querySelectorAll(".down-arr");

const btnManipulation = function (e) {
  e.currentTarget.nextElementSibling.classList.toggle("down-arr__hidden");
  e.currentTarget.nextElementSibling.nextElementSibling.classList.toggle(
    "up-arr__active"
  );
};

const btnConnectManipulation = function (e) {
  toolTipBox.classList.toggle("tooltip-box__active");

  e.currentTarget.nextElementSibling.classList.toggle("down-arr__hidden");
  e.currentTarget.nextElementSibling.nextElementSibling.classList.toggle(
    "up-arr__active"
  );
};

btnProduct.addEventListener("click", btnManipulation);
btnCompany.addEventListener("click", btnManipulation);

btnConnect.addEventListener("click", function (e) {
  toolTipBox.classList.toggle("tooltip-box__active");

  e.currentTarget.nextElementSibling.classList.toggle("down-arr__hidden");
  e.currentTarget.nextElementSibling.nextElementSibling.classList.toggle(
    "up-arr__active"
  );
  navLinks.classList.toggle("nav-links__connect_active");
  toolTipBox.classList.toggle("tooltip-box__connect_active");
  signUpBtns.classList.toggle("signup-btns__connect_active");
});

btnMenu.addEventListener("click", function () {
  navLinksContainer.classList.toggle("nav-links-container__active");
  signUpBtns.classList.toggle("signup-btns__active");
});
