import {
  siReact,
  siTypescript,
  siJavascript,
  siNextdotjs,
  siHtml5,
  siCss,
  siSass,
  siFramer,
  siTailwindcss,
  siNodedotjs,
  siExpress,
  siPostgresql,
  siMongodb,
  siGraphql,
  siGit,
  siDocker,
  siVite,
  siWebpack,
  siJest,
  siLinux,
  siFigma,
} from "simple-icons";

interface IconData {
  path: string;
  hex: string;
}

const iconMap: Record<string, IconData> = {
  React: { path: siReact.path, hex: siReact.hex },
  TypeScript: { path: siTypescript.path, hex: siTypescript.hex },
  JavaScript: { path: siJavascript.path, hex: siJavascript.hex },
  "Next.js": { path: siNextdotjs.path, hex: siNextdotjs.hex },
  HTML5: { path: siHtml5.path, hex: siHtml5.hex },
  CSS3: { path: siCss.path, hex: siCss.hex },
  SASS: { path: siSass.path, hex: siSass.hex },
  "Framer Motion": { path: siFramer.path, hex: siFramer.hex },
  "Tailwind CSS": { path: siTailwindcss.path, hex: siTailwindcss.hex },
  "Node.js": { path: siNodedotjs.path, hex: siNodedotjs.hex },
  Express: { path: siExpress.path, hex: siExpress.hex },
  PostgreSQL: { path: siPostgresql.path, hex: siPostgresql.hex },
  MongoDB: { path: siMongodb.path, hex: siMongodb.hex },
  GraphQL: { path: siGraphql.path, hex: siGraphql.hex },
  Git: { path: siGit.path, hex: siGit.hex },
  Docker: { path: siDocker.path, hex: siDocker.hex },
  Vite: { path: siVite.path, hex: siVite.hex },
  Webpack: { path: siWebpack.path, hex: siWebpack.hex },
  Jest: { path: siJest.path, hex: siJest.hex },
  Linux: { path: siLinux.path, hex: siLinux.hex },
  Figma: { path: siFigma.path, hex: siFigma.hex },
};

export function getSkillIcon(name: string): IconData | null {
  return iconMap[name] ?? null;
}
