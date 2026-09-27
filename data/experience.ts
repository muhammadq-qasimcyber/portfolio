export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Pakistan Cyber Emergency Response Team",
    role: "AI and Software Developer Intern",
    period: "07/2026 – Present",
    location: "Pakistan",
    responsibilities: [
      "Developed AI-powered and software solutions using modern development tools.",
      "Built and maintained application features, ensuring functionality and performance.",
      "Collaborated with the development team to implement, test, and debug software.",
      "Contributed to AI-based application development and software engineering tasks.",
    ],
  },
  {
    company: "Center of Excellence in Artificial Intelligence",
    role: "Application Developer Intern",
    period: "07/2026 – Present",
    location: "Islamabad",
    responsibilities: [
      "Developing a Flutter-based mobile application for children with autism.",
      "Building responsive UI screens and implementing application features using Dart.",
      "Debugging, testing, and optimizing app performance.",
      "Collaborating with the development team to deliver high-quality mobile solutions.",
    ],
  },
  {
    company: "Zarai Taraqati Bank Limited (ZTBL), Head Office",
    role: "Information Security Intern",
    period: "09/2024 – 11/2024",
    location: "Islamabad",
    responsibilities: [
      "Assisted in vulnerability assessments and monitored network traffic for suspicious activity.",
      "Managed security tools (firewalls, antivirus) to mitigate potential threats.",
      "Contributed to security policy development and regulatory compliance.",
      "Supported security awareness initiatives to educate staff on best practices.",
      "Gained hands-on experience in cybersecurity, risk assessment, and threat management in the financial sector.",
    ],
  },
];
