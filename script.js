// Hamburger Menu Toggle
// Sidebar Menu Logic
const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("sidebarToggle");
const closeBtn = document.getElementById("closeSidebar");

openBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

// ================================
// On Scroll Animations
// ================================
const animatedElements = document.querySelectorAll(".animate-on-scroll");

const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

animatedElements.forEach(el => scrollObserver.observe(el));

