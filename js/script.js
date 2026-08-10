/* =========================================================
   script.js
   Cross-page behavior shared by every page:
   loading screen, sticky navbar, mobile menu, back-to-top,
   scroll-reveal animations, escape-to-close for overlays.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* ----- loading screen ----- */
  const hideLoader = () => {
    const loader = document.getElementById("loadingScreen");
    if (loader) loader.classList.add("hidden");
  };
  window.addEventListener("load", () => setTimeout(hideLoader, 250));
  setTimeout(hideLoader, 1200); // fallback safety timeout

  /* ----- sticky navbar + back to top visibility ----- */
  const navbar = document.getElementById("navbar");
  const backToTop = document.getElementById("backToTop");

  function handleScroll() {
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 20);
    if (backToTop) backToTop.classList.toggle("visible", window.scrollY > 400);
  }
  window.addEventListener("scroll", handleScroll);
  handleScroll();

  if (backToTop) {
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ----- mobile hamburger menu ----- */
  const hamburger = document.getElementById("hamburgerBtn");
  const navMobile = document.getElementById("navMobile");
  if (hamburger && navMobile) {
    hamburger.addEventListener("click", () => {
      const open = hamburger.classList.toggle("open");
      navMobile.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", String(open));
    });
    navMobile.querySelectorAll(".nav-link").forEach((link) =>
      link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        navMobile.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ----- scroll reveal ----- */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  function observeReveals() {
    document.querySelectorAll(".animate-on-scroll").forEach((el) => revealObserver.observe(el));
  }
  observeReveals();
  setTimeout(observeReveals, 400); // catch elements rendered slightly after DOMContentLoaded
  window._observeScrollReveal = observeReveals;

  /* ----- escape key closes any open modal / lightbox ----- */
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (typeof closeModal === "function") closeModal();
    if (typeof closeLightbox === "function") closeLightbox();
  });
});
