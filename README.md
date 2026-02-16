# dalodev — Personal Portfolio

Personal portfolio website for Daniel Alejandro León Ortiz. Built with React, TypeScript, Vite, and Framer Motion.

**Live:** [dalo.dev](https://dalo.dev)

## Tech Stack

- **React 19** + **TypeScript** — UI and type safety
- **Vite** (SWC) — build tooling and dev server
- **Framer Motion** — entrance animations and staggered reveals
- **Canvas API** — animated grid background
- **CSS Variables** — hand-written styles with dark/light theming

## Features

- Dark / light theme (persisted to localStorage)
- English / Spanish i18n (detects browser language)
- Responsive design (mobile-first, 768px breakpoint)
- Animated section reveals with viewport detection
- SEO optimized (Open Graph, Twitter Cards, JSON-LD structured data)

## Getting Started

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Lint
bun run lint
```

## Project Structure

```
src/
├── components/     # React components
├── context/        # ThemeProvider, LangProvider
├── data/           # Portfolio content and skill icons
├── hooks/          # useTheme, useLang, useTranslation
├── i18n/           # Translation files (en.ts, es.ts)
└── styles/         # CSS variables, component styles
public/
├── favicons/       # Favicon assets
├── images/         # Profile photo, logos, OG image
├── robots.txt      # Crawler rules
└── sitemap.xml     # Sitemap for search engines
```

## License

All rights reserved.
