/* =========================================================
   components.js
   Reusable DOM helpers, inline icon set, and shared UI
   builders (navbar, footer, cards, timeline items, modal,
   journal cards). Every render-*.js file uses these so
   markup is written once and reused everywhere.
   ========================================================= */

/* ---------- DOM helpers ---------- */
function qs(selector, scope = document) { return scope.querySelector(selector); }
function qsa(selector, scope = document) { return Array.from(scope.querySelectorAll(selector)); }
function fromHTML(html) {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = html.trim();
  return wrapper.firstElementChild;
}
function mount(id, node) {
  const root = document.getElementById(id);
  if (!root) return;
  root.innerHTML = "";
  root.appendChild(node);
}
function debounce(fn, delay = 220) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
function escapeHTML(str = "") {
  return str.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function tagList(items = []) {
  return `<div class="tag-list">${items.map((t) => `<span class="tag">${t}</span>`).join("")}</div>`;
}

/* ---------- ICON LIBRARY (inline SVG) ---------- */
const ICONS = {
  github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 6c0-1.1-.9-2-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6z"/><polyline points="22,6 12,13 2,6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  location: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
  folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  layout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
  cpu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/><line x1="20" y1="15" x2="23" y2="15"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  arrowDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'
};
function icon(name, size = 18) {
  const svg = ICONS[name] || "";
  return svg.replace("<svg ", `<svg width="${size}" height="${size}" `);
}

/* ---------- NAVBAR ---------- */
const NAV_LINKS = [
  { label: "Home", href: "index.html" },
  { label: "About", href: "about.html" },
  { label: "Projects", href: "projects.html" },
  { label: "IoT Session", href: "iot.html" },
  { label: "Experience", href: "experience.html" },
  { label: "Certificates", href: "certificates.html" },
  { label: "ProtoSem", href: "protosem.html" },
  { label: "Contact", href: "contact.html" }
];

function renderNavbar() {
  const current = location.pathname.split("/").pop() || "index.html";
  const linksHTML = NAV_LINKS.map(
    (l) => `<a href="${l.href}" class="nav-link ${l.href === current || (l.href === "iot.html" && current.startsWith("iot-task-")) ? "active" : ""}">${l.label}</a>`
  ).join("");

  const html = `
    <header class="navbar" id="navbar">
      <div class="nav-inner">
        <a href="index.html" class="nav-brand">${PROFILE.initials}<span class="dot">.</span></a>
        <nav class="nav-links" aria-label="Primary navigation">${linksHTML}</nav>
        <button class="hamburger" id="hamburgerBtn" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
      <nav class="nav-mobile" id="navMobile" aria-label="Mobile navigation">${linksHTML}</nav>
    </header>
  `;
  mount("navbar-root", fromHTML(html));
}

/* ---------- FOOTER ---------- */
function renderFooter() {
  const year = new Date().getFullYear();
  const html = `
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <h3>${PROFILE.name}</h3>
          <p>${PROFILE.roleLine} at ${PROFILE.college}, currently interning at ${PROFILE.currentInternship}.</p>
        </div>
        <div class="footer-socials">
          ${PROFILE.github ? `<a class="social-btn" href="${PROFILE.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">${icon("github", 17)}</a>` : ""}
          ${PROFILE.linkedin ? `<a class="social-btn" href="${PROFILE.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${icon("linkedin", 17)}</a>` : ""}
          <a class="social-btn" href="mailto:${PROFILE.email}" aria-label="Email">${icon("mail", 17)}</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; ${year} ${PROFILE.name}. All rights reserved.</span>
        <span>Built with HTML, CSS &amp; JavaScript.</span>
      </div>
    </footer>
  `;
  mount("footer-root", fromHTML(html));
}

/* ---------- PAGE HERO (shared by inner pages) ---------- */
function renderPageHero(rootId, eyebrow, title, subtitle) {
  const root = document.getElementById(rootId);
  if (!root) return;
  root.innerHTML = `
    <span class="eyebrow">${eyebrow}</span>
    <h1>${title}</h1>
    <p>${subtitle}</p>
  `;
}

/* ---------- PROJECT CARD ---------- */
function projectCard(project) {
  const card = fromHTML(`
    <div class="glass-card card animate-on-scroll" data-id="${project.id}" tabindex="0" role="button" aria-label="View details for ${escapeHTML(project.title)}">
      ${project.featured ? `<span class="badge badge-current" style="position:absolute;top:1.5rem;right:1.5rem;">${icon("star", 12)} Featured</span>` : ""}
      <div class="card-icon">${icon("folder", 20)}</div>
      <h3 class="card-title">${project.title}</h3>
      <p class="card-desc">${project.description}</p>
      ${tagList(project.technologies.slice(0, 4))}
      <div class="card-footer">
        ${project.github
          ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" onclick="event.stopPropagation()">${icon("github", 14)} Code</a>`
          : ""}
        ${project.demo
          ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" onclick="event.stopPropagation()">${icon("external", 14)} Live Demo</a>`
          : `<span class="btn btn-outline btn-sm btn-disabled">${icon("external", 14)} No Demo Yet</span>`}
      </div>
    </div>
  `);
  const open = () => openProjectModal(project);
  card.addEventListener("click", open);
  card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  return card;
}

/* ---------- PROJECT MODAL ---------- */
function openProjectModal(project) {
  const overlay = document.getElementById("modalOverlay");
  const root = document.getElementById("modalRoot");
  if (!overlay || !root) return;

  root.innerHTML = `
    <button class="modal-close" id="modalCloseBtn" aria-label="Close">${icon("close", 16)}</button>
    ${project.featured ? `<span class="badge badge-current">${icon("star", 12)} Featured Project</span>` : ""}
    <h2 style="margin-top:0.7rem;font-size:1.4rem;font-weight:700;">${project.title}</h2>
    <p style="color:var(--text-muted);font-size:0.8rem;margin-top:0.35rem;">${project.category || ""} ${project.date ? "· " + project.date : ""}</p>
    <p style="color:var(--text-secondary);margin-top:0.9rem;font-size:0.88rem;">${project.description}</p>

    ${project.problem ? `<div class="modal-section"><h4>Problem Statement</h4><p>${project.problem}</p></div>` : ""}
    ${project.solution ? `<div class="modal-section"><h4>Solution</h4><p>${project.solution}</p></div>` : ""}
    ${project.features && project.features.length ? `
    <div class="modal-section">
      <h4>Key Features</h4>
      <ul class="timeline-list">${project.features.map((f) => `<li>${f}</li>`).join("")}</ul>
    </div>` : ""}
    <div class="modal-section">
      <h4>Technologies</h4>
      ${tagList(project.technologies)}
    </div>
    ${project.challenges ? `<div class="modal-section"><h4>Challenges</h4><p>${project.challenges}</p></div>` : ""}
    ${project.lessonsLearned ? `<div class="modal-section"><h4>Lessons Learned</h4><p>${project.lessonsLearned}</p></div>` : ""}

    ${project.github || project.demo ? `
    <div style="display:flex;gap:0.6rem;margin-top:1.4rem;">
      ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">${icon("github", 16)} View Code</a>` : ""}
      ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">${icon("external", 16)} Live Demo</a>` : ""}
    </div>` : ""}
  `;

  overlay.classList.add("open");
  document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
}
function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  if (overlay) overlay.classList.remove("open");
}

/* ---------- LIGHTBOX ---------- */
function ensureLightbox() {
  if (document.getElementById("lightboxOverlay")) return;
  const lb = fromHTML(`
    <div class="lightbox-overlay" id="lightboxOverlay">
      <button class="lightbox-close" id="lightboxCloseBtn" aria-label="Close image">${icon("close", 18)}</button>
      <img id="lightboxImage" src="" alt="" />
    </div>
  `);
  document.body.appendChild(lb);
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });
  document.getElementById("lightboxCloseBtn").addEventListener("click", closeLightbox);
}
function openLightbox(src, alt) {
  ensureLightbox();
  const overlay = document.getElementById("lightboxOverlay");
  const img = document.getElementById("lightboxImage");
  img.src = src;
  img.alt = alt || "";
  overlay.classList.add("open");
}
function closeLightbox() {
  const overlay = document.getElementById("lightboxOverlay");
  if (overlay) overlay.classList.remove("open");
}

/* ---------- CERTIFICATE CARD ---------- */
function certificateCard(cert) {
  return fromHTML(`
    <div class="glass-card card animate-on-scroll">
      <div class="cert-thumb" data-cert-thumb>
        ${cert.image ? `<img src="${cert.image}" alt="${escapeHTML(cert.title)}" loading="lazy" />` : icon("award", 34)}
      </div>
      <div class="card-top" style="margin-bottom:0.5rem;">
        <h3 class="card-title" style="margin:0;">${cert.title}</h3>
      </div>
      <p class="card-desc" style="-webkit-line-clamp:4;">${cert.description}</p>
      <div class="card-meta-row">
        <span>${icon("calendar", 14)} ${cert.date}</span>
        <span class="tag">${cert.category}</span>
      </div>
      ${tagList(cert.skills)}
      <div class="card-footer">
        <span class="tag" style="border-color:var(--border);">${cert.issuer}</span>
        ${cert.verificationLink
          ? `<a href="${cert.verificationLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="margin-left:auto;">${icon("external", 14)} Verify</a>`
          : ""}
      </div>
    </div>
  `);
}

/* ---------- EXPERIENCE TIMELINE ITEM ---------- */
function experienceItem(item) {
  const statusBadge =
    item.status === "current"
      ? `<span class="badge badge-current"><span class="badge-dot"></span> Ongoing</span>`
      : `<span class="badge badge-completed">Completed</span>`;

  return fromHTML(`
    <div class="timeline-item glass-card static animate-on-scroll">
      <span class="timeline-dot"></span>
      <div class="timeline-header">
        <div>
          <h3 class="timeline-title">${item.role}</h3>
          <p class="timeline-subtitle">${item.organization}</p>
        </div>
        ${statusBadge}
      </div>
      <span class="timeline-meta">${item.duration}</span>

      <div class="timeline-block">
        <h4>Overview</h4>
        <p style="color:var(--text-secondary);font-size:0.85rem;">${item.description}</p>
      </div>

      ${item.highlights && item.highlights.length ? `
      <div class="timeline-block">
        <h4>Highlights</h4>
        <ul class="timeline-list">${item.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>
      </div>` : ""}

      ${item.skills && item.skills.length ? `
      <div class="timeline-block">
        <h4>Skills</h4>
        ${tagList(item.skills)}
      </div>` : ""}
    </div>
  `);
}

/* ---------- JOURNAL WEEK CARD ---------- */
function journalCard(entry) {
  const statusBadge =
    entry.status === "Upcoming"
      ? `<span class="badge badge-completed">Upcoming</span>`
      : entry.status === "In Progress"
      ? `<span class="badge badge-current"><span class="badge-dot"></span> In Progress</span>`
      : `<span class="badge badge-completed">Completed</span>`;

  const activitiesHTML = (entry.activities || [])
    .map((a) => `<div class="journal-activity"><h5>${a.title}</h5><p>${a.description}</p></div>`)
    .join("");

  const imagesHTML = entry.images && entry.images.length
    ? `<div class="modal-gallery" data-gallery>${entry.images.map((img) => `<img src="${img}" alt="Week ${entry.week} photo" loading="lazy" />`).join("")}</div>`
    : `<p class="no-images">No screenshots added yet.</p>`;

  const card = fromHTML(`
    <div class="glass-card static journal-card animate-on-scroll">
      <button class="journal-header" data-toggle aria-expanded="false">
        <div style="display:flex;align-items:center;gap:1rem;min-width:0;">
          <div class="journal-week-badge"><span>W${entry.week}</span></div>
          <div class="journal-title-group">
            <h3>${entry.title}</h3>
            <p>${entry.date}</p>
          </div>
        </div>
        <div class="journal-header-right">
          ${statusBadge}
          <span class="journal-chevron">${icon("chevron", 18)}</span>
        </div>
      </button>
      <div class="journal-body">
        <div class="modal-section" style="margin-top:0.2rem;">
          <h4>Overview</h4>
          <p>${entry.overview}</p>
        </div>

        ${activitiesHTML ? `
        <div class="modal-section">
          <h4>Activities</h4>
          ${activitiesHTML}
        </div>` : ""}

        <div class="journal-grid-2">
          ${entry.skillsLearned && entry.skillsLearned.length ? `
          <div class="modal-section">
            <h4>Skills Learned</h4>
            ${tagList(entry.skillsLearned)}
          </div>` : ""}
          ${entry.technologies && entry.technologies.length ? `
          <div class="modal-section">
            <h4>Technologies</h4>
            ${tagList(entry.technologies)}
          </div>` : ""}
        </div>

        <div class="modal-section">
          <h4>Photos</h4>
          ${imagesHTML}
        </div>

        ${entry.notes ? `
        <div class="modal-section">
          <h4>Notes</h4>
          <p class="journal-notes">${entry.notes}</p>
        </div>` : ""}
      </div>
    </div>
  `);

  const header = card.querySelector("[data-toggle]");
  const body = card.querySelector(".journal-body");
  const chevron = card.querySelector(".journal-chevron");
  header.addEventListener("click", () => {
    const isOpen = body.classList.toggle("open");
    chevron.classList.toggle("open", isOpen);
    header.setAttribute("aria-expanded", String(isOpen));
    body.style.maxHeight = isOpen ? body.scrollHeight + "px" : "0px";
  });

  card.querySelectorAll("[data-gallery] img").forEach((img) => {
    img.addEventListener("click", () => openLightbox(img.src, img.alt));
  });

  return card;
}

/* ---------- FILTER CHIPS ---------- */
function renderChips(containerId, categories, active, onChange) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  categories.forEach((cat) => {
    const chip = document.createElement("button");
    chip.className = `chip ${cat === active ? "active" : ""}`;
    chip.textContent = cat;
    chip.addEventListener("click", () => onChange(cat));
    container.appendChild(chip);
  });
}
