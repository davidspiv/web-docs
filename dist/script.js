const hamburger = document.querySelector(".hamburger");
const mainNav = document.querySelector("#main-nav");

hamburger.addEventListener("click", mobileMenu);
mainNav.addEventListener("click", animate);

function mobileMenu() {
  hamburger.classList.toggle("active");
  mainNav.classList.toggle("active");
  animate();
}

function animate() {
  debounce(mainNav.classList.add("nav-animate"));
  debounce(
    setTimeout(() => {
      mainNav.classList.remove("nav-animate");
    }, 200),
    200
  );
}

const navLink = document.querySelectorAll(".nav-item");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  mainNav.classList.remove("active");
  hamburger.classList.remove("active");
}
