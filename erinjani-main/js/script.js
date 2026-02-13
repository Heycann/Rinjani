// Document Ready Event
document.addEventListener("DOMContentLoaded", () => {
  // Selectors
  const navbar = document.querySelector(".navbar");
  const navbarMenu = document.querySelector(".navbar-menu");
  const menuBtn = document.querySelector("#menu-btn");

  // Initialize Feather Icons
  feather.replace();

  // Toggle Mobile Menu
  if (menuBtn && navbarMenu) {
    menuBtn.onclick = (e) => {
      e.preventDefault();
      navbarMenu.classList.toggle("active");
    };
  }

  // Close Menu on Outside Click
  document.addEventListener("click", function (e) {
    if (
      menuBtn &&
      navbarMenu &&
      !menuBtn.contains(e.target) &&
      !navbarMenu.contains(e.target)
    ) {
      navbarMenu.classList.remove("active");
    }
  });

  // Navbar Scroll Effect
  window.onscroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  // Page Load Animation
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 100);

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
        // Close mobile menu if open
        if (navbarMenu.classList.contains("active")) {
          navbarMenu.classList.remove("active");
        }
      }
    });
  });
});

// Fix Back Button Browser History
window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    document.body.classList.add("loaded");
  }
});
const feedUrl = "https://rss.app/feeds/v1.1/tSrYTd2ILqu6zjyU.json";

async function loadNews() {
  try {
    const response = await fetch(feedUrl);
    const data = await response.json();

    let html = "";
    // Mengambil 5 berita terbaru
    data.items.slice(0, 5).forEach((item) => {
      html += `
                <div class="news-item" style="margin-bottom: 15px; border-bottom: 1px solid #333; padding-bottom: 10px;">
                    <a href="${item.url}" target="_blank" style="color: #ff5722; text-decoration: none; font-weight: bold;">
                        ${item.title}
                    </a>
                    <p style="font-size: 12px; color: #ccc;">${new Date(item.date_published).toLocaleDateString()}</p>
                </div>
            `;
    });

    document.getElementById("news-container").innerHTML = html;
  } catch (error) {
    document.getElementById("news-container").innerHTML =
      "<p>Gagal memuat berita.</p>";
    console.error("Error:", error);
  }
}

loadNews();

// WA Icon
function chatWhatsApp() {
  // 1. Ganti dengan nomor HP Anda (format internasional tanpa '+')
  // Contoh: 6281234567890 (62 untuk Indonesia)
  var nomorHP = "6281234567890";

  // 2. Pesan otomatis yang akan muncul di chat
  var pesan = "Halo Admin, saya ingin booking paket wisata.";

  // Mengubah spasi menjadi kode URL (%20)
  var url = "https://wa.me/" + nomorHP + "?text=" + encodeURIComponent(pesan);

  // Membuka link di tab baru
  window.open(url, "_blank");
}
