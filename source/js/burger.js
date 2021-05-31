let burger = document.querySelector(".burger");
let active = document.querySelector(".active");
let nav = document.querySelector(".nav");
let b1 = document.querySelector(".b1");
let b2 = document.querySelector(".b2");
let b3 = document.querySelector(".b3");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  b1.classList.toggle("active");
  b2.classList.toggle("active");
  b3.classList.toggle("active");
});

