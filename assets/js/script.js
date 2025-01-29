"use strict";

const $navbar = document.querySelector("[data-navbar]");
const $navbarToggler = document.querySelector("[data-nav-toggler]");
$navbarToggler.addEventListener("click", () =>
  $navbar.classList.toggle("active")
);

const $dataHeader = document.querySelector("[data-header]");
window.addEventListener("scroll", () => {
  $dataHeader.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

// const $favorite = document.querySelectorAll("[data-toggle-btn]");
// $favorite.forEach(($toggleButton) => {
//   $toggleButton.addEventListener("click", () => {
//     $toggleButton.classList.toggle("active");
//   });
// });
    
const $favorite = document.querySelectorAll("[data-toggle-btn]");

$favorite.forEach(($toggleButton) => {
  $toggleButton.addEventListener("click", () => {
    let active =$toggleButton.classList.toggle("active");
    console.log(active? 'active' : 'fadsfdasf');
    
  });
});
