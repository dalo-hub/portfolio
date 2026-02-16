import {
  siAngular,
  siAxios,
  siBun,
  siCss,
  siGit,
  siGithub,
  siGitlab,
  siHtml5,
  siJavascript,
  siNpm,
  siPnpm,
  siPrettier,
  siReact,
  siReactrouter,
  siSass,
  siShadcnui,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
  siVitest,
} from "simple-icons";

interface IconData {
  path: string;
  hex: string;
}

const iconMap: Record<string, IconData> = {
  HTML5: { path: siHtml5.path, hex: siHtml5.hex },
  CSS3: { path: siCss.path, hex: siCss.hex },
  "Tailwind CSS": { path: siTailwindcss.path, hex: siTailwindcss.hex },
  SASS: { path: siSass.path, hex: siSass.hex },
  "Shadcn UI": { path: siShadcnui.path, hex: siShadcnui.hex },
  JavaScript: { path: siJavascript.path, hex: siJavascript.hex },
  TypeScript: { path: siTypescript.path, hex: siTypescript.hex },
  React: { path: siReact.path, hex: siReact.hex },
  Angular: { path: siAngular.path, hex: siAngular.hex },
  "React Router": { path: siReactrouter.path, hex: siReactrouter.hex },
  Axios: { path: siAxios.path, hex: siAxios.hex },
  Git: { path: siGit.path, hex: siGit.hex },
  GitHub: { path: siGithub.path, hex: siGithub.hex },
  GitLab: { path: siGitlab.path, hex: siGitlab.hex },
  NPM: { path: siNpm.path, hex: siNpm.hex },
  PNPM: { path: siPnpm.path, hex: siPnpm.hex },
  Bun: { path: siBun.path, hex: siBun.hex },
  Vite: { path: siVite.path, hex: siVite.hex },
  Prettier: { path: siPrettier.path, hex: siPrettier.hex },
  Vitest: { path: siVitest.path, hex: siVitest.hex },
  Vercel: { path: siVercel.path, hex: siVercel.hex },
};

export function getSkillIcon(name: string): IconData | null {
  return iconMap[name] ?? null;
}
