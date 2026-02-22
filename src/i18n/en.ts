export const en = {
  pageTitle: "Daniel León's Portfolio",
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    skills: "Skills",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Daniel León",
    role: "Frontend Developer & Systems Engineer",
    subtitle:
      "Building modern, performant web experiences with clean code and great design.",
    contact: "Get in Touch",
    cv: "Get CV",
  },
  about: {
    title: "About Me",
    p1: "I'm Daniel Alejandro León Ortiz, a Systems Engineer focused on building scalable web applications that balance architectural integrity with high-performance user experiences. I approach frontend development with a rigorous engineering mindset, prioritizing maintainable code, comprehensive testing, and sustainable component structures.",
    p2: "I specialize in translating complex business requirements into intuitive digital solutions while maintaining a quality-first approach throughout the software development lifecycle. I thrive in agile environments where technical excellence and system reliability are the core priorities.",
  },
  experience: {
    title: "Experience",
    present: "Present",
  },
  projects: {
    title: "Projects",
    viewCode: "Code",
    viewLive: "Live Demo",
  },
  education: {
    title: "Education",
    gpa: "GPA",
  },
  skills: {
    title: "Skills",
    frontend: "Structure & Styling",
    languages: "Frameworks & Languages",
    tools: "Development & Workflow",
  },
  contact: {
    title: "Get in Touch",
    subtitle:
      "Have a project in mind or just want to say hi? Feel free to reach out!",
    email: "Send Email",
  },
  footer: {
    author: "Daniel Alejandro León Ortiz",
    rights: "All rights reserved.",
  },
};

export interface Translations {
  pageTitle: string;
  nav: {
    about: string;
    experience: string;
    projects: string;
    education: string;
    skills: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    subtitle: string;
    contact: string;
    cv: string;
  };
  about: { title: string; p1: string; p2: string };
  experience: { title: string; present: string };
  projects: { title: string; viewCode: string; viewLive: string };
  education: { title: string; gpa: string };
  skills: {
    title: string;
    frontend: string;
    languages: string;
    tools: string;
  };
  contact: { title: string; subtitle: string; email: string };
  footer: { author: string; rights: string };
}
