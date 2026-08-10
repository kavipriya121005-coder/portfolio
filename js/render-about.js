/* =========================================================
   render-about.js
   Wires profile, education and skills data into the About page.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  renderFooter();

  renderPageHero("page-hero", "About Me", "The Person Behind the Code", PROFILE.roleLine + " at " + PROFILE.college);

  /* ----- PROFESSIONAL SUMMARY ----- */
  document.getElementById("summary-section").innerHTML = `
    <span class="eyebrow">Summary</span>
    <h2 class="section-title">Professional Summary</h2>
    <div class="glass-card static animate-on-scroll" style="padding:2rem;">
      <p style="color:var(--text-secondary);font-size:0.9rem;">${PROFILE.summary}</p>
      <div style="margin-top:1.4rem;">
        <h4 style="font-size:0.68rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--text-muted);margin-bottom:0.6rem;">Currently Learning</h4>
        <ul class="timeline-list">${PROFILE.currentlyLearning.map((c) => `<li>${c}</li>`).join("")}</ul>
      </div>
    </div>
  `;

  /* ----- EDUCATION ----- */
  document.getElementById("education-section").innerHTML = `
    <span class="eyebrow">Education</span>
    <h2 class="section-title">Academic Background</h2>
    <div class="timeline" id="eduTimelineFull"></div>
  `;
  const eduRoot = document.getElementById("eduTimelineFull");
  EDUCATION.forEach((e) => {
    eduRoot.appendChild(fromHTML(`
      <div class="timeline-item glass-card static animate-on-scroll">
        <span class="timeline-dot"></span>
        <div class="timeline-header">
          <h3 class="timeline-title">${e.degree}</h3>
          <span class="timeline-meta">${e.duration}</span>
        </div>
        <p class="timeline-subtitle">${e.institution}</p>
        <p style="color:var(--text-secondary);font-size:0.86rem;">${e.status}</p>
        <div class="timeline-block">
          <h4>Relevant Coursework</h4>
          ${tagList(e.coursework)}
        </div>
      </div>
    `));
  });

  /* ----- TECHNICAL SKILLS ----- */
  document.getElementById("skills-section").innerHTML = `
    <span class="eyebrow">Technical Skills</span>
    <h2 class="section-title">Where I'm Technically Strong</h2>
    <div class="grid" id="techSkillsGrid"></div>
  `;
  const techSkillsGrid = document.getElementById("techSkillsGrid");
  SKILLS.categories.forEach((group) => {
    techSkillsGrid.appendChild(fromHTML(`
      <div class="glass-card skill-card animate-on-scroll">
        <div class="skill-icon">${icon(group.icon, 20)}</div>
        <h4 class="skill-title">${group.title}</h4>
        ${tagList(group.items)}
      </div>
    `));
  });

  /* ----- STRENGTHS & SOFT SKILLS ----- */
  document.getElementById("strengths-section").innerHTML = `
    <span class="eyebrow">Strengths</span>
    <h2 class="section-title">Core Skills &amp; Strengths</h2>
    <div class="grid" id="strengthsGrid"></div>
  `;
  const strengthsGrid = document.getElementById("strengthsGrid");
  SKILLS.strengths.forEach((s) => {
    strengthsGrid.appendChild(fromHTML(`
      <div class="glass-card skill-card animate-on-scroll">
        <div class="skill-icon">${icon("check", 20)}</div>
        <h4 class="skill-title">${s.title}</h4>
        <p style="color:var(--text-muted);font-size:0.84rem;">${s.desc}</p>
      </div>
    `));
  });

  /* ----- CAREER INTERESTS ----- */
  document.getElementById("interests-section").innerHTML = `
    <span class="eyebrow">Career Interests</span>
    <h2 class="section-title">Where I'm Headed</h2>
    <div class="glass-card static animate-on-scroll" style="padding:2rem;">
      ${tagList(PROFILE.careerInterests)}
    </div>
  `;

  if (window._observeScrollReveal) window._observeScrollReveal();
});
