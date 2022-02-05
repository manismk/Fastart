const hamBurgerIcon = document.querySelector(".hamburger--icon");

const navContainer = document.querySelector(".nav--container");

hamBurgerIcon.addEventListener("click", () => {
  if (navContainer.classList.contains("nav--open")) {
    navContainer.classList.toggle("nav--open");
  } else {
    navContainer.classList.toggle("nav--open");
  }
});
