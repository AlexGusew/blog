# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal technical blog (alexcoders.com) built with Next.js App Router, TypeScript, Contentlayer (MDX), and Tailwind CSS. Deployed on Vercel.

## Commands

- **Dev server**: `pnpm dev`
- **Build**: `pnpm build`
- **Lint**: `pnpm lint` (runs `tsc --noEmit && next lint`)
- **Preview prod build**: `pnpm preview`
- **Node version**: 22 (see `.nvmrc`)
- **Package manager**: pnpm

No test framework is configured.

## Architecture

### Content Pipeline

MDX content lives in `content/` and is processed by Contentlayer (`contentlayer.config.js`):
- **Posts** (`content/posts/*.mdx`): frontmatter fields `title`, `date`, `description`, `difficulty` (1-3)
- **Pages** (`content/pages/*.mdx`): frontmatter fields `title`, `description`

Contentlayer generates typed data at build time into `.contentlayer/generated/` (path alias: `contentlayer/generated`).

MDX plugins chain: `remark-math` → `rehype-katex` → `rehype-pretty-code` (dual themes: one-light / one-dark-pro) → `rehype-mdx-code-props` → `rehype-preset-minify`.

### Routing

- `/` — home page listing all posts (`app/page.tsx`)
- `/posts/[slug]` — individual post (`app/posts/[...slug]/page.tsx`)
- `/[slug]` — static pages like /about (`app/[...slug]/page.tsx`)
- `/api/subscribe` — email waitlist endpoint (Supabase)

### Custom MDX Components

Defined in `components/mdx-components.tsx`. Available in all MDX files:
- `Image`, `Code` (via custom `pre`), auto-anchor `h1`/`h2`
- `AlgorithmSummary`, `Problem`, `ProblemComplexity`, `ProblemBadge`, `Draft`

### Styling

Tailwind CSS with shadcn/ui (new-york style, zinc base). Dark mode via `next-themes` (class strategy). Article content uses `@tailwindcss/typography` prose classes. Color system uses CSS variables defined in `app/globals.css`.

### Path Aliases

- `@/*` → project root (`./`)
- `contentlayer/generated` → `./.contentlayer/generated`

### Environment Variables

`SUPABASE_URL`, `SUPABASE_ANON_KEY`, `USERS_TABLE` — used by the subscribe API route.
