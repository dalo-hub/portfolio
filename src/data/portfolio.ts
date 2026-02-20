export interface ExperienceItem {
  company: string;
  logo?: string;
  role: { en: string; es: string };
  startDate: string;
  endDate: string | null;
  description: { en: string; es: string };
  technologies: string[];
}

export interface ProjectItem {
  title: string;
  description: { en: string; es: string };
  technologies: string[];
  github?: string;
  live?: string;
  image?: string;
}

export interface EducationItem {
  institution: string;
  logo?: string;
  coverImage?: string;
  coverImagePosition?: string;
  degree: { en: string; es: string };
  startDate: string;
  endDate: string;
  website?: string;
  gpa?: string;
  honors?: { en: string; es: string }[];
}

export interface SkillCategory {
  key: "frontend" | "backend" | "tools";
  items: string[];
}

export const experience: ExperienceItem[] = [
  {
    logo: "/images/companies/DTIC.jpeg",
    company: "DTIC UIS",
    role: {
      en: "Frontend Engineer",
      es: "Ingeniero Frontend",
    },
    startDate: "2022-03",
    endDate: null,
    description: {
      en: "Developing and maintaining mission-critical university platforms in a Scrum environment. Built the admissions frontend serving 20,000+ students per semester, designed reusable Angular Material components across multiple institutional modules, and implemented unit testing with Karma and Jasmine.",
      es: "Desarrollo y mantenimiento de plataformas universitarias críticas en un entorno Scrum. Construí el frontend del proceso de admisiones que atiende a más de 20.000 estudiantes por semestre, diseñé componentes reutilizables con Angular Material en múltiples módulos institucionales e implementé pruebas unitarias con Karma y Jasmine.",
    },
    technologies: [
      "Angular",
      "TypeScript",
      "Angular Material",
      "SASS",
      "REST APIs",
      "RxJS",
      "Karma",
      "Jasmine",
    ],
  },
  {
    logo: "/images/companies/APL.jpeg",
    company: "APL Ingeniería ltda",
    role: {
      en: "System Engineering Intern",
      es: "Practicante de Ingeniería de Sistemas",
    },
    startDate: "2024-11",
    endDate: "2025-04",
    description: {
      en: "Developed a web platform for performance indicator analysis and visualization using Scrumban methodology. Led the frontend implementation of authentication, user/role management, and interactive data dashboards. Wrote unit and component tests with Vitest, Jest, and Testing Library.",
      es: "Desarrollé una plataforma web para análisis y visualización de indicadores de desempeño bajo la metodología Scrumban. Lideré la implementación frontend de autenticación, gestión de usuarios/roles y dashboards interactivos. Escribí pruebas unitarias y de componentes con Vitest, Jest y Testing Library.",
    },
    technologies: [
      "React",
      "TypeScript",
      "Shadcn UI",
      "Tailwind CSS",
      "Vitest",
      "Jest",
      "Testing Library",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Portfolio Website",
    description: {
      en: "This portfolio website built with React, TypeScript, and Framer Motion. Features i18n, dark mode, and particle animations.",
      es: "Este portafolio construido con React, TypeScript y Framer Motion. Con i18n, modo oscuro y animaciones de partículas.",
    },
    technologies: ["React", "TypeScript", "Framer Motion", "Canvas API"],
    github: "https://github.com/dalo-hub/portfolio",
  },
];

export const education: EducationItem[] = [
  {
    logo: "/images/education/UIS.jpg",
    coverImage: "/images/education/uis-cover.jpg",
    coverImagePosition: "center 30%",
    institution: "Universidad Industrial de Santander",
    degree: {
      en: "Bachelor of Systems Engineering",
      es: "Pregrado en Ingeniería de Sistemas",
    },
    startDate: "02/2019",
    endDate: "09/2025",
    website: "https://uis.edu.co",
    gpa: "4.57/5.0",
    honors: [{ en: "Cum Laude", es: "Cum Laude" }],
  },
  {
    logo: "/images/education/OU.jpeg",
    coverImage: "/images/education/ou-cover.jpg",
    coverImagePosition: "center center",
    institution: "University of Oklahoma",
    degree: {
      en: "Academic Exchange in Computer Science",
      es: "Intercambio Académico en Ciencias de la Computación",
    },
    startDate: "08/2023",
    endDate: "12/2023",
    website: "https://ou.edu",
    gpa: "3.75/4.0",
  },
];

export const skills: SkillCategory[] = [
  {
    key: "frontend",
    items: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "SASS",
      "Shadcn UI",
    ],
  },
  {
    key: "backend",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Angular",
      "React Router",
      "Axios",
    ],
  },
  {
    key: "tools",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "NPM",
      "PNPM",
      "Bun",
      "Vite",
      "Prettier",
      "Vitest",
      "Vercel",
    ],
  },
];

export const social = {
  github: "https://github.com/dalo-hub",
  linkedin: "https://linkedin.com/in/dalodev",
  email: "dalodev@proton.me",
};
