import Slider from "./slider.js";
const headerMenu = document.querySelector("label .header__menu-icon");
const mobileNavbar = document.querySelector(".mobile_navbar");
const closeNavbar = document.querySelector(".nav__mobile-close");
const navOverlay = document.querySelector(".nav__overlay");

Slider();

headerMenu.addEventListener("click", function () {
  mobileNavbar.classList.toggle("active");
  navOverlay.style.display = "block";

  closeNavbar.addEventListener("click", function () {
    mobileNavbar.classList.remove("active");
    navOverlay.style.display = "none";
  });
});
