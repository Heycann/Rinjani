// TOGGLE CLASS ACTIVE
const navbarNav = document.querySelector(".navbar-nav");
const menuIcon = document.querySelector("#menu-icon");

feather.replace();

// KETIKA HAMBURGER MENU DIKLIK
document.querySelector("#menu-icon").onclick = () => {
  navbarNav.classList.toggle("active");
};

// KLIK DI LUAR SIDE BAR UNTUK MENGHILANGKAN NAV
const menu = document.querySelector("#menu-icon");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
const navbar = document.querySelector("navbar");
window.onscroll = () => {
  if (window.scrolly > 100) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
};
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.1,
  },
);
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
