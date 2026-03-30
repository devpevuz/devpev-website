# DevPev Website — Claude Context

## Project Overview
DevPev is an open-source developer community platform based in Uzbekistan ("O'zbekistondagi ochiq dasturchilar jamiyati"). The site serves as the community hub for events, blog articles, jobs, terminal/projects, and contributor info.

**Tagline:** "by developers for developers" / "Loyihalarni birga do'stlar bilan quramiz"

## Tech Stack
- **Framework:** Next.js 15 (App Router, Turbopack)
- **UI:** React 19, TypeScript, Tailwind CSS v4
- **Fonts:** IBM Plex Mono (`--font-ibm-plex-mono`) + Cutive (`--font-cutive`) from next/font/google
- **Content:** Markdown blog posts via `gray-matter` + `remark-html`
- **Package manager:** npm

## Project Structure
```
src/
  app/
    layout.tsx              # Root layout — Navbar, Footer, DotBackground, RouteBodyClass
    page.tsx                # Home page — hero, stats, pathways, testimonials, CTAs
    globals.css             # Tailwind v4 import + global styles + .prose-article
    about/page.tsx          # About, contributors, contact, partnerships
    blog/
      page.tsx              # Blog listing (reads from src/articles/)
      [slug]/page.tsx       # Dynamic SSG article renderer
    events/page.tsx         # Events with tab switcher (upcoming / past)
    jobs/page.tsx           # Jobs with tab switcher (positions / freelance)
    speakers/page.tsx       # Speaker signup (Google Forms embed)
    terminal/page.tsx       # Terminal/CLI mockup
  components/
    Navbar.tsx              # Fixed header, hide-on-scroll, active route highlight
    Footer.tsx              # Logo + tagline + link columns
    DotBackground.tsx       # Canvas-based animated dot background
    StatsBar.tsx            # Expandable stats/donate panels
    RouteBodyClass.tsx      # Sets "reading-mode" class on /blog/[slug] routes
  lib/
    articles.ts             # getAllArticles() + getArticle(slug) — reads src/articles/
    jobs.ts                 # Hardcoded positions[] + freelanceJobs[]
  articles/                 # Markdown blog posts (YAML frontmatter)
public/
  devpev.svg                # Logo
references/
  Home.png                  # Design reference screenshot
DESIGN.md                   # Visual design tokens & component patterns (source of truth)
```

## Design File
**Figma:** `https://www.figma.com/design/9IAEKpYVABWY84DI1JIpsZ/devpev-website-design`
- fileKey: `9IAEKpYVABWY84DI1JIpsZ`
- Pages: Home (`9:76`), Blog (`16:30`), Events (`23:3`), About (`24:87`), Jobs (`24:144`), Terminal (`5:12`)
- Components frame: `4:11`
- 1440px wide desktop-first design
- Always use `get_design_context` (not just metadata) before implementing any Figma frame

## Design System
See `DESIGN.md` for the full token reference. Key values:

- **Background:** `#202020` (dark, near-black)
- **Foreground:** `#ededed`
- **Accent:** `#914848` (brand / active nav), `#a85a5a` (hover)
- **Glass surfaces:** `bg-[rgba(255,255,255,0.07)]` with `backdrop-blur-[2px]`
- **Font-sans:** `Cutive` — headings, nav, display
- **Font-mono:** `IBM Plex Mono` — body, labels, metadata, stats
- **Max content width:** `1063px`
- Nav items: Events, Blog, Terminal, Jobs, About | CTA: "Partner us"

## Code Conventions
- Use **App Router** exclusively — no Pages Router
- Prefer **Server Components** by default; add `"use client"` only when needed (event handlers, hooks)
- File naming: `PascalCase` for components, `camelCase` for utilities
- Tailwind v4 — use `@import "tailwindcss"` (no `@tailwind` directives)
- All pages live under `src/app/[route]/page.tsx`
- All reusable UI components live under `src/components/`
- Use `next/image` for all images, `next/link` for all internal navigation
- No inline styles except for one-off animations; prefer Tailwind utilities
- TypeScript strict mode — no `any` types
- Blog articles: Markdown files in `src/articles/` with YAML frontmatter (`title`, `date`, `author`, `github`, `tags`)

## Route Status
| Route | Status |
|---|---|
| `/` | Built — hero, stats, pathways, testimonials, CTAs |
| `/events` | Built — tab switcher (upcoming / past) with timeline |
| `/blog` | Built — listing from `src/articles/` |
| `/blog/[slug]` | Built — SSG dynamic article renderer |
| `/terminal` | Built — CLI mockup with help text |
| `/jobs` | Built — tab switcher (positions / freelance) |
| `/about` | Built — contributors, contact, partnerships |
| `/speakers` | Built — Google Form embed |

## Security Rules
- Never expose API keys or secrets in client components — use `NEXT_PUBLIC_` prefix only for truly public values
- Always use `rel="noopener noreferrer"` on external links
- Sanitize any user-generated content before rendering
- Use Next.js `headers()` / middleware for CSP when adding API routes
- No `dangerouslySetInnerHTML` without explicit sanitization
- iframes must have explicit `sandbox` and `allow` attributes scoped to minimum needed

## Dev Commands
```bash
npm run dev      # Start with Turbopack hot reload
npm run build    # Production build
npm run start    # Serve production build
```
