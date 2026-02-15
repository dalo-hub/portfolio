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
  degree: { en: string; es: string };
  startDate: string;
  endDate: string;
}

export interface SkillCategory {
  key: "frontend" | "backend" | "tools" | "other";
  items: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Tech Company",
    role: {
      en: "Senior Frontend Developer",
      es: "Desarrollador Frontend Senior",
    },
    startDate: "2023-01",
    endDate: null,
    description: {
      en: "Leading frontend architecture and developing scalable web applications using React and TypeScript. Mentoring junior developers and establishing best practices.",
      es: "Liderando la arquitectura frontend y desarrollando aplicaciones web escalables con React y TypeScript. Mentoreando desarrolladores junior y estableciendo buenas prácticas.",
    },
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
  },
  {
    company: "Digital Agency",
    role: { en: "Frontend Developer", es: "Desarrollador Frontend" },
    startDate: "2021-06",
    endDate: "2022-12",
    description: {
      en: "Built responsive web applications and interactive user interfaces for various clients. Collaborated with designers and backend teams to deliver pixel-perfect implementations.",
      es: "Construí aplicaciones web responsivas e interfaces de usuario interactivas para varios clientes. Colaboré con diseñadores y equipos de backend para entregar implementaciones pixel-perfect.",
    },
    technologies: ["React", "JavaScript", "SASS", "REST APIs"],
  },
  {
    company: "Startup Inc.",
    role: { en: "Junior Web Developer", es: "Desarrollador Web Junior" },
    startDate: "2020-01",
    endDate: "2021-05",
    description: {
      en: "Developed and maintained web applications using modern JavaScript frameworks. Participated in code reviews and agile ceremonies.",
      es: "Desarrollé y mantuve aplicaciones web usando frameworks modernos de JavaScript. Participé en revisiones de código y ceremonias ágiles.",
    },
    technologies: ["Vue.js", "JavaScript", "CSS", "Node.js"],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "E-Commerce Platform",
    description: {
      en: "A full-featured e-commerce platform with cart management, payment integration, and admin dashboard.",
      es: "Una plataforma de e-commerce completa con gestión de carrito, integración de pagos y panel de administración.",
    },
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    github: "https://github.com/dalodev",
    live: "https://dalodev.com",
  },
  {
    title: "Task Management App",
    description: {
      en: "A collaborative task management tool with real-time updates, drag-and-drop boards, and team features.",
      es: "Una herramienta colaborativa de gestión de tareas con actualizaciones en tiempo real, tableros drag-and-drop y funciones de equipo.",
    },
    technologies: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    github: "https://github.com/dalodev",
  },
  {
    title: "Weather Dashboard",
    description: {
      en: "A beautiful weather dashboard with location search, 7-day forecasts, and interactive charts.",
      es: "Un hermoso panel de clima con búsqueda por ubicación, pronósticos de 7 días y gráficos interactivos.",
    },
    technologies: ["React", "Chart.js", "OpenWeather API", "CSS Modules"],
    github: "https://github.com/dalodev",
    live: "https://dalodev.com",
  },
  {
    title: "Portfolio Website",
    description: {
      en: "This portfolio website built with React, TypeScript, and Framer Motion. Features i18n, dark mode, and particle animations.",
      es: "Este portafolio construido con React, TypeScript y Framer Motion. Con i18n, modo oscuro y animaciones de partículas.",
    },
    technologies: ["React", "TypeScript", "Framer Motion", "Canvas API"],
    github: "https://github.com/dalodev",
  },
];

export const education: EducationItem[] = [
  {
    institution: "Universidad Nacional",
    degree: { en: "Systems Engineering", es: "Ingeniería de Sistemas" },
    startDate: "2016",
    endDate: "2021",
  },
];

export const skills: SkillCategory[] = [
  {
    key: "frontend",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "HTML5",
      "CSS3",
      "SASS",
      "Framer Motion",
      "Tailwind CSS",
    ],
  },
  {
    key: "backend",
    items: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    key: "tools",
    items: ["Git", "Docker", "CI/CD", "Vite", "Webpack", "Jest", "Linux"],
  },
  {
    key: "other",
    items: [
      "Figma",
      "Agile/Scrum",
      "Responsive Design",
      "Accessibility",
      "SEO",
    ],
  },
];

export const social = {
  github: "https://github.com/dalodev",
  linkedin: "https://linkedin.com/in/dalodev",
  email: "daniel@dalodev.com",
};
