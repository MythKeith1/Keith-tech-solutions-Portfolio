// Loader
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Toggle Mobile Nav
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("active"));

// Parallax scroll effect
window.addEventListener("scroll", function () {
  const hero = document.getElementById("hero");
  hero.style.backgroundPositionY = window.pageYOffset * 0.5 + "px";
});

// Scroll-triggered animations
const animatedElements = document.querySelectorAll(".animate-on-scroll");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
animatedElements.forEach(el => observer.observe(el));

// Scroll To Top Button
const scrollBtn = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 400 ? "block" : "none";
});
scrollBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Smooth scroll nav links
document.querySelectorAll(".nav-links a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});

// Theme Toggle
