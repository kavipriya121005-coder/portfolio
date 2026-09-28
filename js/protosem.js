/* =========================================================
   protosem.js
   Weekly ProtoSem internship journal.
   Add a new week by appending a new object to PROTOSEM_JOURNAL.
   The journal page renders every entry automatically —
   no HTML changes are ever required.

   Object shape:
   {
     week, date, title, status,
     overview,
     activities: [ { title, description } ],
     skillsLearned: [], technologies: [],
     images: [], notes
   }
   ========================================================= */

const PROTOSEM_JOURNAL = [
  {
    week: 1,
    date: "20 July 2026 – 24 July 2026",
    title: "Orientation, Reflection & Team Culture",
    status: "Completed",
    overview:
      "The first week at ProtoSem focused on getting oriented with the incubation ecosystem, understanding personal working styles, and connecting personal experiences to broader lessons through case studies, comics and light-hearted reflection.",
    activities: [
      {
        title: "Case Study and Blogs",
        description:
          "Studied and created case studies/blog content around projects developed inside the Forge Innovation and Ventures incubation centre."
      },
      {
        title: "16 Personalities Test",
        description:
          "Participated in a personality assessment using the 16 Personalities framework and reflected on how personality traits relate to teamwork and working styles."
      },
      {
        title: "Comics and Life Reflection",
        description:
          "Read comics and discussed which comic or message best related to our own life and experiences."
      },
      {
        title: "ProtoSem Experience Memes",
        description:
          "Created memes based on the experience of the first week at ProtoSem."
      }
    ],
    skillsLearned: ["Self-Reflection", "Team Culture Awareness", "Creative Expression"],
    technologies: [],
    images: [],
    notes: "A lighter, reflection-focused first week centered on culture, personality and team fit rather than technical work."
  },
  {
    week: 2,
    date: "26 July 2026 – 31 July 2026",
    title: "Teamwork Challenges & Portfolio Foundations",
    status: "Completed",
    overview:
      "Week two shifted toward hands-on teamwork activities and an introduction to professional portfolio building, alongside exposure to workplace practices used across ProtoSem's technical work areas. These were internship learning activities, not software development projects.",
    activities: [
      {
        title: "Spaghetti Tower Challenge",
        description:
          "Worked in teams to build a tower using dry noodles/spaghetti and thread. Highlighted teamwork, planning, communication, creativity and problem solving."
      },
      {
        title: "Ice Breaker Activity",
        description:
          "Interacted with people we did not already know as part of an ice-breaking activity, focused on communication and collaboration."
      },
      {
        title: "Random Teaming + Blog Presentations",
        description:
          "Were randomly grouped into teams and created presentations based on blogs that had been read."
      },
      {
        title: "Portfolio Website Creation",
        description:
          "Learned about creating a professional portfolio website and the process of presenting personal projects, skills and experience online."
      },
      {
        title: "5S Practice",
        description:
          "Learned about and observed the 5S methodology across different streams and work areas involving robotics, cables, sensors and various electrical/electronic components within the company."
      }
    ],
    skillsLearned: ["Teamwork", "Communication", "Presentation Skills", "Workplace Organization (5S)"],
    technologies: [],
    images: [],
    notes: "These activities were internship learning exercises focused on collaboration and workplace exposure, not software development tasks."
  }

  /* -----------------------------------------------------------
     Week 3 template — copy this shape and fill in real details
     once Week 3 information is available. Uncomment to activate.

  {
    week: 3,
    date: "",
    title: "",
    status: "Upcoming",
    overview: "",
    activities: [
      { title: "", description: "" }
    ],
    skillsLearned: [],
    technologies: [],
    images: [],
    notes: ""
  },
  ----------------------------------------------------------- */
];

window.PROTOSEM_JOURNAL = PROTOSEM_JOURNAL;
