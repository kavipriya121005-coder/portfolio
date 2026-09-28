/* =========================================================
   render-projects.js
   Wires PROJECTS data into the Projects page, with search
   and category filtering.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  renderFooter();

  renderPageHero(
    "page-hero",
    "Portfolio",
    "Projects",
    "A look at the practical projects I've built while learning software development and cloud engineering fundamentals."
  );

  document.getElementById("searchIcon").innerHTML = icon("search", 16);

  const categories = ["All", ...new Set(PROJECTS.map((p) => p.category))];
  let activeCategory = "All";
  let searchTerm = "";

  function updateChips() {
    renderChips("filterChips", categories, activeCategory, (cat) => {
      activeCategory = cat;
      updateChips();
      renderList();
    });
  }

  function renderList() {
    const root = document.getElementById("projectsRoot");
    const emptyState = document.getElementById("emptyState");
    root.innerHTML = "";

    const filtered = PROJECTS.filter((p) => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const query = searchTerm.toLowerCase();
      const matchesSearch =
        p.title.toLowerCase().includes(query) ||
        p.technologies.some((t) => t.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      emptyState.hidden = false;
    } else {
      emptyState.hidden = true;
      filtered.forEach((p) => root.appendChild(projectCard(p)));
    }
    if (window._observeScrollReveal) window._observeScrollReveal();
  }

  if (PROJECTS.length === 0) {
    document.getElementById("projectsRoot").innerHTML = "";
    document.querySelector(".toolbar").hidden = true;
    document.getElementById("emptyState").hidden = false;
    document.getElementById("emptyState").textContent = "More projects will be added soon.";
  } else {
    updateChips();
    document.getElementById("searchInput").addEventListener(
      "input",
      debounce((e) => {
        searchTerm = e.target.value;
        renderList();
      }, 200)
    );
    renderList();
  }
});
