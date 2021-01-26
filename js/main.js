const navbar = () => {
  const nav = document.querySelector(".nav-links");
  const burger = document.querySelector(".nav-hamburger");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("is-active");
    burger.classList.toggle("toggle");
  });
};

navbar();
