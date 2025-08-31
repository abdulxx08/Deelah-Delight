const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "grid" : "none";
});
scrollBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("nav-overlay");

function openNav() {
  document.body.classList.add("nav-open");
  hamburger.classList.add("active");
  hamburger.setAttribute("aria-expanded", "true");
  overlay.hidden = false;
}
function closeNav() {
  document.body.classList.remove("nav-open");
  hamburger.classList.remove("active");
  hamburger.setAttribute("aria-expanded", "false");
  overlay.hidden = true;
}
function toggleNav() {
  document.body.classList.contains("nav-open") ? closeNav() : openNav();
}

hamburger.addEventListener("click", toggleNav);
overlay.addEventListener("click", closeNav);

navLinks
  .querySelectorAll("a")
  .forEach((a) => a.addEventListener("click", closeNav));

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) closeNav();
});
