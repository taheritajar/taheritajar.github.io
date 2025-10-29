document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector("nav ul");

  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  const navLinks = document.querySelectorAll("nav a[href^='#']");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navList?.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    });
  });
});
