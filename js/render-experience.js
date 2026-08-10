/* =========================================================
   render-experience.js
   Wires EXPERIENCE data into the Experience timeline page.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  renderFooter();

  renderPageHero(
    "page-hero",
    "Career Journey",
    "Experience",
    "Internship experience and the practical, workplace skills gained along the way."
  );

  const root = document.getElementById("experienceRoot");
  if (EXPERIENCE.length === 0) {
    root.innerHTML = `<div class="glass-card static notice-card">Experience details will be added soon.</div>`;
  } else {
    EXPERIENCE.forEach((item) => root.appendChild(experienceItem(item)));
  }

  if (window._observeScrollReveal) window._observeScrollReveal();
});
