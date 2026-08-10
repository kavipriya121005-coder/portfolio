/* =========================================================
   certificates.js
   ONLY real, verified certificates and achievements go here.
   Do not add placeholder or unearned credentials.

   Add future certificates by appending a new object to
   CERTIFICATES following the same shape. No HTML changes needed.
   ========================================================= */

const CERTIFICATES = [
  {
    id: 1,
    title: "4th Place — Kumaraguru Intra Ideathon '24",
    issuer: "Kumaraguru College of Technology",
    date: "6–7 December 2024",
    category: "Achievement / Competition",
    description:
      "Secured fourth place in the Kumaraguru Intra Ideathon '24, held at Kumaraguru College of Technology. Recognized for enthusiasm, innovation, dedication, outstanding performance, creative problem-solving, innovative ideas and collaborative spirit.",
    skills: ["Innovation", "Problem Solving", "Teamwork", "Ideation"],
    image: "assets/certificates/ideathon-2024.jpg",
    verificationLink: ""
  }

  // Add future real certificates here as new objects.
];

// Formal courses / certifications completed via external platforms.
// Leave empty until real, completed courses are available — do not fabricate entries.
const COURSES = [
  // Example shape for future use:
  // { id: 1, title: "", platform: "", date: "", credentialUrl: "" }
];

window.CERTIFICATES = CERTIFICATES;
window.COURSES = COURSES;
