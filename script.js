const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);
navMenu.addEventListener("click", animate);

function mobileMenu() {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
  animate();
}

function animate() {
  debounce(navMenu.classList.add("nav-animate"));
  debounce(
    setTimeout(() => {
      navMenu.classList.remove("nav-animate");
    }, 200),
    200
  );
}

const navLink = document.querySelectorAll(".nav-item");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  navMenu.classList.remove("active");
  hamburger.classList.remove("active");
}
