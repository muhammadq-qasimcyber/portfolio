export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    description: "Core languages used across coursework and projects.",
    icon: "Code2",
    items: ["Python", "C++", "Java", "SQL", "Bash", "OOP"],
  },
  {
    title: "AI / Machine Learning",
    description: "Applied AI work spanning models, agents, and LLM APIs.",
    icon: "Brain",
    items: [
      "Machine Learning",
      "Natural Language Processing",
      "Prompt Engineering",
      "AI Agents",
      "LLM API Integration",
      "Groq",
      "OpenAI",
      "Anthropic",
    ],
  },
  {
    title: "Software Development",
    description: "Building and shipping application features end to end.",
    icon: "Layers",
    items: [
      "Django",
      "Flask",
      "API Integration",
      "Software Development",
      "Software Quality Assurance",
      "Agile Methodologies",
      "Version Control",
    ],
  },
  {
    title: "Cybersecurity / Networking",
    description: "Hands-on security operations and network fundamentals.",
    icon: "Shield",
    items: [
      "Security Operations Center",
      "Linux / Ubuntu",
      "OpenVPN",
      "IPSEC",
      "WireGuard",
    ],
  },
  {
    title: "Databases",
    description: "Relational and NoSQL data stores used in project work.",
    icon: "Database",
    items: ["SQLite", "MySQL", "Firebase / Firestore", "SQL"],
  },
  {
    title: "Design / Collaboration",
    description: "Interface design and team collaboration tooling.",
    icon: "Palette",
    items: ["Figma"],
  },
];
