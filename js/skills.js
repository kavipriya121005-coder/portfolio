/* =========================================================
   skills.js
   Technical and soft skills, sourced from resume.
   ========================================================= */

const SKILLS = {
  categories: [
    {
      title: "Programming Languages",
      icon: "code",
      items: ["Java", "Python"]
    },
    {
      title: "Web Development",
      icon: "layout",
      items: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Cloud & Tools",
      icon: "cloud",
      items: ["Basics of AWS / Cloud Computing", "Git", "GitHub"]
    },
    {
      title: "Core Concepts",
      icon: "cpu",
      items: ["Data Structures & Algorithms (Basics)", "OOP", "DBMS Fundamentals"]
    }
  ],

  softSkills: [
    "Problem Solving",
    "Logical Thinking",
    "Adaptability",
    "Team Collaboration"
  ],

  // A short, curated list shown on the homepage
  featuredSkills: ["Java", "Python", "JavaScript", "HTML", "CSS", "Git", "GitHub", "AWS Basics"],

  strengths: [
    { title: "Problem Solving", desc: "Comfortable breaking down technical problems and reasoning through solutions methodically." },
    { title: "Logical Thinking", desc: "Applies structured, step-by-step logic when working through data structures and algorithms." },
    { title: "Adaptability", desc: "Quick to pick up new tools and technologies as projects and coursework demand." },
    { title: "Team Collaboration", desc: "Works well in team settings, including hackathons, group projects and internship activities." }
  ]
};

window.SKILLS = SKILLS;
