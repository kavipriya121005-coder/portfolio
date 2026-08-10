/* =========================================================
   render-contact.js
   Wires profile contact details into the Contact page and
   handles client-side contact form validation.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  renderFooter();

  renderPageHero(
    "page-hero",
    "Get In Touch",
    "Contact",
    "Have an opportunity, project idea, or question? I'd love to hear from you."
  );

  /* ----- CONTACT INFO ----- */
  const infoRoot = document.getElementById("contactInfoRoot");
  infoRoot.innerHTML = `
    <div class="glass-card static contact-item animate-on-scroll">
      <div class="contact-item-icon">${icon("mail", 18)}</div>
      <div><h4>Email</h4><a href="mailto:${PROFILE.email}">${PROFILE.email}</a></div>
    </div>
    ${PROFILE.location ? `
    <div class="glass-card static contact-item animate-on-scroll">
      <div class="contact-item-icon">${icon("location", 18)}</div>
      <div><h4>Location</h4><p>${PROFILE.location}</p></div>
    </div>` : ""}
    <div class="glass-card static contact-item animate-on-scroll">
      <div class="contact-item-icon">${icon("github", 18)}</div>
      <div>
        <h4>Connect</h4>
        <div class="contact-socials">
          ${PROFILE.github ? `<a class="social-btn" href="${PROFILE.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">${icon("github", 16)}</a>` : ""}
          ${PROFILE.linkedin ? `<a class="social-btn" href="${PROFILE.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${icon("linkedin", 16)}</a>` : ""}
        </div>
      </div>
    </div>
  `;

  /* ----- FORM VALIDATION ----- */
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("formSuccess");

  function setError(fieldId, message) {
    const el = document.getElementById(`${fieldId}Error`);
    if (el) el.textContent = message;
  }

  function validate() {
    let valid = true;
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    setError("name", ""); setError("email", ""); setError("subject", ""); setError("message", "");

    if (!name) { setError("name", "Name is required."); valid = false; }
    if (!email) { setError("email", "Email is required."); valid = false; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("email", "Enter a valid email address."); valid = false; }
    if (!subject) { setError("subject", "Subject is required."); valid = false; }
    if (!message) { setError("message", "Message is required."); valid = false; }

    return valid;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    successMsg.hidden = true;
    if (!validate()) return;

    // Client-side only: no backend is configured.
    // Replace this block with a real submission handler (e.g. an email API) when ready.
    successMsg.hidden = false;
    form.reset();
    setTimeout(() => { successMsg.hidden = true; }, 5000);
  });

  if (window._observeScrollReveal) window._observeScrollReveal();
});
