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


