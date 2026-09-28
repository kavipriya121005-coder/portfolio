/* =========================================================
   render-protosem.js
   Wires PROTOSEM_JOURNAL data into the ProtoSem journal page.
   Renders every week automatically, newest first.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  renderFooter();

  renderPageHero(
    "page-hero",
    "Internship Journal",
    "ProtoSem Weekly Journal",
    "A week-by-week record of learning activities, team challenges and reflections during the ProtoSem internship."
  );

  const root = document.getElementById("journalRoot");
  const sorted = [...PROTOSEM_JOURNAL].sort((a, b) => b.week - a.week);

  if (sorted.length === 0) {
    root.innerHTML = `<div class="glass-card static notice-card">Journal entries will appear here as each week is completed.</div>`;
  } else {
    sorted.forEach((entry) => root.appendChild(journalCard(entry)));
  }

  if (window._observeScrollReveal) window._observeScrollReveal();
});
