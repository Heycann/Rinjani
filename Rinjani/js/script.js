// --- 1. SETUP VARIABEL & FEATHER ICONS ---
const navbarNav = document.querySelector(".navbar-nav");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar"); // Perbaikan: tambah titik (.)

feather.replace();

// --- 2. LOGIC HAMBURGER MENU ---
menuIcon.onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle("active");
};
document.addEventListener("click", function (e) {
  if (!menuIcon.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// --- 3. LOGIC SCROLL NAVBAR ---
window.onscroll = () => {
  if (window.scrollY > 100) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
};

// --- 4. SCROLL ANIMATION (INTERSECTION OBSERVER) ---
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

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 100);

  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const target = this.getAttribute("href");

      if (
        !target ||
        target.startsWith("#") ||
        target.includes("mailto:") ||
        target.includes("tel:") ||
        this.target === "_blank"
      ) {
        return;
      }

      e.preventDefault();

      document.body.classList.remove("loaded");
      setTimeout(() => {
        window.location.href = target;
      }, 500);
    });
  });
});

window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    document.body.classList.add("loaded");
  }
});
