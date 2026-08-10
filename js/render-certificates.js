/* =========================================================
   render-certificates.js
   Wires CERTIFICATES and COURSES data into the Certificates page.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  renderFooter();

  renderPageHero(
    "page-hero",
    "Achievements",
    "Certificates &amp; Achievements",
    "Real, verified achievements only — this section grows as new milestones are reached."
  );

  const certRoot = document.getElementById("certificatesRoot");
  if (CERTIFICATES.length === 0) {
    certRoot.innerHTML = `<div class="glass-card static notice-card">More certifications and courses will be added as they are completed.</div>`;
  } else {
    CERTIFICATES.forEach((c) => {
      const card = certificateCard(c);
      if (c.image) {
        const thumb = card.querySelector("[data-cert-thumb]");
        thumb.addEventListener("click", () => openLightbox(c.image, c.title));
      }
      certRoot.appendChild(card);
    });
  }

  const coursesRoot = document.getElementById("coursesRoot");
  if (COURSES.length === 0) {
    coursesRoot.innerHTML = `<div class="glass-card static notice-card animate-on-scroll">More certifications and courses will be added as they are completed.</div>`;
  } else {
    const grid = document.createElement("div");
    grid.className = "grid";
    COURSES.forEach((course) => {
      grid.appendChild(fromHTML(`
        <div class="glass-card card animate-on-scroll">
          <div class="card-icon">${icon("award", 20)}</div>
          <h3 class="card-title">${course.title}</h3>
          <p class="card-desc">${course.platform}</p>
          <div class="card-meta-row"><span>${icon("calendar", 14)} ${course.date}</span></div>
          ${course.credentialUrl ? `<div class="card-footer"><a href="${course.credentialUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm btn-block">${icon("external", 14)} View Credential</a></div>` : ""}
        </div>
      `));
    });
    coursesRoot.appendChild(grid);
  }

  if (window._observeScrollReveal) window._observeScrollReveal();
});
