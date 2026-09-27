export interface Project {
  name: string;
  description: string;
  category: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    name: "Software Development Team",
    description:
      "A collaborative development project built with a full Django-based web stack, covering the application's backend logic and front-end interface.",
    category: "Software Development",
    technologies: ["Django (Python)", "HTML", "CSS", "JavaScript", "SQLite"],
  },
  {
    name: "Flight Reservation System",
    description:
      "A console-based flight booking application built to practice object-oriented design principles and structured program architecture in C++.",
    category: "Systems / Architecture",
    technologies: ["C++", "Object-Oriented Programming", "Console Application Development"],
  },
  {
    name: "Nerve Banking System",
    description:
      "A web-based banking application handling core banking workflows with a PHP and MySQL backend served through XAMPP.",
    category: "Database",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "XAMPP"],
  },
  {
    name: "Stack-Based Multi-Pass Frequency Analyzer",
    description:
      "A low-level analyzer built on a CPU simulator, using stack-based data structures and assembly language to explore computer architecture concepts.",
    category: "Systems / Architecture",
    technologies: ["CPU SIM", "Assembly Language", "Stack Data Structure", "Computer Architecture"],
  },
  {
    name: "Smart Code Learning App",
    description:
      "A Flutter mobile app paired with a Python/Flask backend, using a Naive Bayes model and Firebase/Firestore for data, aimed at helping users learn to code.",
    category: "Mobile Development",
    technologies: [
      "Flutter",
      "Dart",
      "Python",
      "Flask",
      "Naive Bayes",
      "Python ML Scripts",
      "SQLite",
      "Firebase/Firestore",
    ],
  },
];
