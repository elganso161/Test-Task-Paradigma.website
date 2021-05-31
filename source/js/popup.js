let popupMap = document.querySelector(".popup__map");
let mapLink = document.querySelector(".map-link");
let body = document.querySelector('body');

mapLink.addEventListener("click", () => {
  popupMap.classList.toggle("active");
});
