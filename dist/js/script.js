let menuBar = document.querySelector(".menu-bar");
let menuNav = document.querySelector(".menu-navigation");

menuBar.addEventListener("click", function () {
  menuNav.classList.toggle("menu-active");
});
