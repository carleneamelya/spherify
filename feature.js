// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//when hamburger menu clicked
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//click outside sidebar to remove nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//enable hidden navbar
const navbar = document.querySelector(".navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    navbar.classList.add("nav--hidden");
  } else {
    navbar.classList.remove("nav--hidden");
  }

  lastScrollY = window.scrollY;
});

//dark theme
var icons = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icons.src = "img/sun.svg";
  } else {
    icons.src = "img/moon.svg";
  }
};
