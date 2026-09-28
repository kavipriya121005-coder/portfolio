# Kavipriya C A — Portfolio

A fully static HTML5 / CSS3 / vanilla JavaScript portfolio. No build step,
no framework, no backend. Open `index.html` directly, or use VS Code
"Live Server" for the best experience (auto-reload + correct relative paths).

## How to run
1. Extract this folder.
2. Open the folder in VS Code.
3. Right-click `index.html` → "Open with Live Server" (or just double-click
   `index.html` to open it in your browser).

## How to update content
All real content lives in `js/*.js` data files. The HTML and the shared
renderers in `js/components.js` never need to change for routine updates.

| To update...              | Edit this file            |
|----------------------------|---------------------------|
| Name, bio, contact, links | `js/profile.js`           |
| Education / coursework    | `js/education.js`         |
| Skills                    | `js/skills.js`            |
| Projects                  | `js/projects.js`          |
| Experience / internships  | `js/experience.js`        |
| Certificates & courses    | `js/certificates.js`      |
| ProtoSem weekly journal   | `js/protosem.js`          |
| IoT assignments           | `iot.html` and `iot-task-*.html` |

Each file has an example object shape in comments — copy it, fill in real
details, and append it to the relevant array. New entries render
automatically; no HTML edits required.

## Adding real assets
Place files at these paths (already referenced in the data files):

- `assets/images/profile.jpg` — profile photo (falls back to initials if missing)
- `assets/images/project-task-manager.jpg` — project screenshot
- `assets/certificates/ideathon-2024.jpg` — certificate image
- `assets/resume/Kavipriya-Resume.pdf` — resume PDF for the "View Resume" button

## Notes
- Only real, supplied information has been included — no invented projects,
  certificates, or ProtoSem activities.
- Week 3 of the ProtoSem journal is left as a documented template inside
  `js/protosem.js`; uncomment and fill it in once details are available.
- The contact form validates on the client only (no backend is configured).
