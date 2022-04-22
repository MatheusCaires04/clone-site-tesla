const menuIsActive = document.querySelector(".fa-bars");
const noActive = document.querySelector(".close__menu");

menuIsActive.addEventListener("click", function () {
  const isActive = document.querySelector(".sub__menu__right");
  isActive.classList.toggle("active");
});

noActive.addEventListener("click", function () {
  const isActive = document.querySelector(".sub__menu__right");
  isActive.classList.toggle("active");
});
