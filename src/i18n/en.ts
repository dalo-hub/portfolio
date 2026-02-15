export const en = {
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
    cta: "View My Work",
    contact: "Get in Touch",
  },
  about: {
    title: "About Me",
    p1: "I'm a systems engineer passionate about crafting modern web applications. With a strong foundation in frontend development, I specialize in building responsive, accessible, and performant user interfaces.",
    p2: "I love turning complex problems into simple, elegant solutions. When I'm not coding, you'll find me exploring new technologies and contributing to open-source projects.",
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
  },
  skills: {
    title: "Skills",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools & DevOps",
    other: "Other",
  },
  contact: {
    title: "Get in Touch",
    subtitle:
      "Have a project in mind or just want to say hi? Feel free to reach out!",
    email: "Send Email",
  },
  footer: {
    built: "Built with React & TypeScript",
    rights: "All rights reserved.",
  },
};

export interface Translations {
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
    cta: string;
    contact: string;
  };
  about: { title: string; p1: string; p2: string };
  experience: { title: string; present: string };
  projects: { title: string; viewCode: string; viewLive: string };
  education: { title: string };
  skills: {
    title: string;
    frontend: string;
    backend: string;
    tools: string;
    other: string;
  };
  contact: { title: string; subtitle: string; email: string };
  footer: { built: string; rights: string };
}
