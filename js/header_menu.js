const burger = document.querySelector(".header_burger");
const headerMenu = document.querySelector(".header_menu");
const headerBurgerWrapper = document.querySelector(".header_menuList");
const body = document.getElementsByTagName("body")[0];

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  headerMenu.classList.toggle("active");
  headerBurgerWrapper.classList.toggle("active");
  body.classList.toggle("lock");
});
