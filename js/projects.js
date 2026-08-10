/* =========================================================
   projects.js
   Real projects only — sourced from resume.
   To add a new project later, copy the object shape below
   and append it to the PROJECTS array. No HTML changes needed.

   Object shape:
   {
     id, title, category, description, problem, solution,
     features: [], technologies: [], challenges, lessonsLearned,
     image, github, demo, date, featured
   }
   ========================================================= */

const PROJECTS = [
  {
    id: 1,
    title: "Cloud-Based Task Manager",
    category: "Cloud-Focused Project",
    description:
      "A task management web application with user authentication and full CRUD functionality, built with a responsive frontend and cloud-deployed backend.",
    problem:
      "Managing tasks across devices requires a reliable, always-available application with proper user authentication and persistent data storage.",
    solution:
      "Built a full-stack task manager: a responsive HTML/CSS/JavaScript frontend communicating with a Python (Flask) backend, with cloud deployment and cloud-based data handling.",
    features: [
      "User authentication",
      "Create, read, update and delete (CRUD) tasks",
      "Responsive frontend UI",
      "Cloud deployment workflow",
      "Cloud database/storage concepts for data handling"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "AWS / Cloud Deployment"],
    challenges:
      "Structuring the backend logic for authentication and CRUD operations while keeping deployment and scalability basics in mind.",
    lessonsLearned:
      "Gained hands-on experience connecting a frontend to a Flask backend, and learned the fundamentals of cloud deployment workflows and scalable application design.",
    image: "assets/images/project-task-manager.jpg",
    github: "",
    demo: "",
    date: "2025",
    featured: true
  }

  // Add future projects here as new objects.
];

window.PROJECTS = PROJECTS;
