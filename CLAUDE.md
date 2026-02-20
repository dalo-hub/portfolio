# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server (Vite)
npm run build     # Type-check with tsc then build for production
npm run lint      # Run ESLint
npm run preview   # Preview the production build locally
```

There are no tests in this project.

## Architecture

This is a single-page React 19 + TypeScript portfolio site built with Vite and SWC. It has no routing — the entire page is a vertical scroll of section components.

### Component structure

`App.tsx` wraps everything in two context providers (`ThemeProvider`, `LangProvider`) and renders sections in order: `Navbar → Hero → About → Experience → Projects → Education → Skills → Contact → Footer`. `TitleManager` handles dynamic `<title>` updates via a side effect.

### Data layer

All portfolio content (experience, projects, education, skills, social links) lives in `src/data/portfolio.ts` as plain exported arrays/objects with typed interfaces. This is the single source of truth — update it to change portfolio content.

### Internationalization

The site supports English and Spanish. Translations are in `src/i18n/en.ts` and `src/i18n/es.ts`. The `Translations` interface is exported from `en.ts` and both files must implement it. The `LangContext` exposes `{ lang, toggleLang, t }` where `t` is the active translation object. Components access translations via the `useTranslation()` hook.

Note: bilingual fields in `portfolio.ts` (e.g. `role`, `description`, `degree`) use `{ en: string; es: string }` inline objects — these are separate from the `i18n/` system and must be manually kept in sync.

### Theme system

Theme (`dark` | `light`) is set via `data-theme` attribute on `<html>`. All colors are CSS custom properties defined in `src/styles/variables.css` under `[data-theme="dark"]` and `[data-theme="light"]` selectors. The `--color-primary` is green (`#22c55e` dark / `#16a34a` light). Components use `useTheme()` to read the current theme.

### Styling

Plain CSS — no CSS-in-JS, no Tailwind. Each component has a dedicated file in `src/styles/components/`. Global resets and base styles are in `src/styles/global.css`. Design tokens (spacing, radius, transitions, typography) are in `src/styles/variables.css`.

### Skill icons

`src/data/skillIcons.ts` maps skill name strings to SVG path data from the `simple-icons` package. When adding a new skill to `portfolio.ts`, also add it to `skillIcons.ts` if an icon exists in `simple-icons`.

### Canvas background

`ParticleNetwork.tsx` (exported as `GridBackground`) renders an animated scrolling grid on the Hero section using the Canvas API. It reacts to theme changes to adjust line colors.

### Animations

Framer Motion is used for entrance animations. The `Section` wrapper component provides a reusable scroll-triggered fade-in.
