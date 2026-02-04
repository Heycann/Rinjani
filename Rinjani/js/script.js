// TOGGLE CLASS ACTIVE
const navbarNav = document.querySelector(".navbar-nav");

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
