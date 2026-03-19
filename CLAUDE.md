# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```

There are no tests in this project.

## Architecture

This is a **Next.js 14 App Router** portfolio site with TypeScript and Tailwind CSS, deployed on Vercel.

### Content model

Content is split across two layers:

1. **`data/*.json`** — structured metadata for work experience, projects, and blog posts (title, slug, tags, dates, etc.). These are imported directly into page components.
2. **`content/blog/*.md`** — full Markdown body for blog posts. Loaded at render time via `lib/markdown.ts` using Node `fs`. The blog system requires a matching entry in both `data/blog.json` (metadata) and `content/blog/<slug>.md` (body); if the `.md` file is missing, the page falls back to showing only the description.

### Routing

- `app/page.tsx` — home/hero
- `app/work/page.tsx` — reads `data/work.json`
- `app/projects/page.tsx` — reads `data/projects.json`
- `app/blog/page.tsx` — reads `data/blog.json`
- `app/blog/[slug]/page.tsx` — combines metadata from `data/blog.json` with Markdown from `content/blog/`
- `app/about/page.tsx`, `app/contact/page.tsx` — static pages

### Theming

`components/ThemeProvider.tsx` wraps the app (set in `app/layout.tsx`) and manages dark/light mode. `components/ThemeToggle.tsx` is the UI control. Tailwind's `dark:` variant is used throughout; no CSS-in-JS.

### Path alias

`@/` maps to the project root (configured in `tsconfig.json`).
