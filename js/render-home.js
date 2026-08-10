/* =========================================================
   render-home.js
   Wires data (profile, skills, projects, protosem,
   certificates, education) into the homepage DOM.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  renderFooter();

  /* ----- HERO ----- */
  const avatarInner = `<img src="${PROFILE.avatarUrl}" alt="${PROFILE.name}" onerror="this.parentElement.textContent='${PROFILE.initials}'; this.remove();" />`;
  document.getElementById("hero").innerHTML = `
    <div class="hero-avatar">${avatarInner}</div>
    <p class="hero-eyebrow">👋 Hi, I'm</p>
    <h1 class="hero-name"><span class="gradient-text">${PROFILE.name}</span></h1>
    <h2 class="hero-role">${PROFILE.roleLine}</h2>
    <p class="hero-college">${PROFILE.college} &nbsp;·&nbsp; Currently interning at ${PROFILE.currentInternship}</p>
    <p class="hero-tagline">${PROFILE.heroTagline}</p>
    <div class="hero-actions">
      <a href="projects.html" class="btn btn-primary">${icon("folder", 16)} View Projects</a>
      <a href="${PROFILE.resumeUrl}" target="_blank" class="btn btn-outline">${icon("download", 16)} View Resume</a>
      <a href="contact.html" class="btn btn-outline">${icon("mail", 16)} Contact Me</a>
    </div>
  `;

  /* ----- SELECTED SKILLS ----- */
  document.getElementById("skills-preview").innerHTML = `
    <span class="eyebrow">Skills</span>
    <h2 class="section-title">What I work with</h2>
    <div class="glass-card static animate-on-scroll" style="padding:2rem;">
      ${tagList(SKILLS.featuredSkills)}
    </div>
  `;

  /* ----- FEATURED PROJECT ----- */
  const featured = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const projectSection = document.getElementById("project-preview");
  if (featured) {
    projectSection.innerHTML = `
      <span class="eyebrow">Portfolio</span>
      <h2 class="section-title">Featured Project</h2>
      <div class="grid" id="featuredProjectGrid"></div>
      <div style="text-align:center;margin-top:1.75rem;"><a href="projects.html" class="btn btn-outline">View All Projects</a></div>
    `;
    document.getElementById("featuredProjectGrid").appendChild(projectCard(featured));
  } else {
    projectSection.innerHTML = `
      <span class="eyebrow">Portfolio</span>
      <h2 class="section-title">Featured Project</h2>
      <div class="glass-card static notice-card animate-on-scroll">More projects will be added soon.</div>
    `;
  }

  /* ----- PROTOSEM PREVIEW ----- */
  const latestWeek = [...PROTOSEM_JOURNAL].sort((a, b) => b.week - a.week)[0];
  const protoSection = document.getElementById("protosem-preview");
  protoSection.innerHTML = `
    <span class="eyebrow">Internship</span>
    <h2 class="section-title">ProtoSem Journal</h2>
    <div class="journal-list" id="protosemPreviewList"></div>
    <div style="text-align:center;margin-top:1.75rem;"><a href="protosem.html" class="btn btn-outline">Read Full Journal</a></div>
  `;
  if (latestWeek) document.getElementById("protosemPreviewList").appendChild(journalCard(latestWeek));

  /* ----- ACHIEVEMENT PREVIEW ----- */
  const achievement = CERTIFICATES[0];
  const achSection = document.getElementById("achievement-preview");
  if (achievement) {
    achSection.innerHTML = `
      <span class="eyebrow">Achievement</span>
      <h2 class="section-title">Recognition</h2>
      <div class="grid" id="achievementGrid"></div>
      <div style="text-align:center;margin-top:1.75rem;"><a href="certificates.html" class="btn btn-outline">View All Certificates</a></div>
    `;
    document.getElementById("achievementGrid").appendChild(certificateCard(achievement));
  }

  /* ----- EDUCATION PREVIEW ----- */
  const edu = EDUCATION[0];
  const eduSection = document.getElementById("education-preview");
  if (edu) {
    eduSection.innerHTML = `
      <span class="eyebrow">Education</span>
      <h2 class="section-title">Academic Background</h2>
      <div class="timeline" id="eduPreviewTimeline"></div>
    `;
    document.getElementById("eduPreviewTimeline").appendChild(fromHTML(`
      <div class="timeline-item glass-card static animate-on-scroll">
        <span class="timeline-dot"></span>
        <div class="timeline-header">
          <h3 class="timeline-title">${edu.degree}</h3>
          <span class="timeline-meta">${edu.duration}</span>
        </div>
        <p class="timeline-subtitle">${edu.institution}</p>
        <p style="color:var(--text-secondary);font-size:0.86rem;">${edu.status}</p>
      </div>
    `));
  }

  /* ----- CTA ----- */
  document.getElementById("cta-section").innerHTML = `
    <div class="glass-card static animate-on-scroll" style="padding:2.75rem 2rem;text-align:center;">
      <h3 style="font-size:1.45rem;font-weight:700;margin-bottom:0.7rem;">Let's connect</h3>
      <p style="color:var(--text-secondary);max-width:460px;margin:0 auto 1.6rem;font-size:0.9rem;">
        Open to internship opportunities, collaborations, and interesting technical projects.
      </p>
      <a href="contact.html" class="btn btn-primary">${icon("mail", 16)} Get In Touch</a>
    </div>
  `;

  if (window._observeScrollReveal) window._observeScrollReveal();
});
