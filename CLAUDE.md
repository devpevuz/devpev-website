# DevPev Website — Claude Context

## Project Overview
DevPev is an open-source developer community platform based in Uzbekistan ("O'zbekistondagi ochiq dasturchilar jamiyati"). The site serves as the community hub for events, blog articles, jobs, terminal/projects, and contributor info.

**Tagline:** "by developers for developers" / "Loyihalarni birga do'stlar bilan quramiz"

## Tech Stack
- **Framework:** Next.js 15 (App Router, Turbopack)
- **UI:** React 19, TypeScript, Tailwind CSS v4
- **Fonts:** Cutive Mono (`--font-cutive-mono`) + Cutive (`--font-cutive`) from next/font/google
- **Package manager:** npm

## Project Structure
```
src/
  app/
    layout.tsx        # Root layout — mounts Header globally
    page.tsx          # Home page (currently "under construction")
    globals.css       # Tailwind v4 import + global styles
    speakers/
      page.tsx        # Speaker signup form (Google Forms embed)
  components/
    Header.tsx        # Sticky glassmorphism navbar
public/
  devpev.svg          # Logo
```

## Design File
**Figma:** `https://www.figma.com/design/9IAEKpYVABWY84DI1JIpsZ/devpev-website-design`
- fileKey: `9IAEKpYVABWY84DI1JIpsZ`
- Pages: Home (`9:76`), Blog (`16:30`), Events (`23:3`), About (`24:87`), Jobs (`24:144`), Terminal (`5:12`)
- Components frame: `4:11`
- 1440px wide desktop-first design
- Always use `get_design_context` (not just metadata) before implementing any Figma frame

## Design System
- **Background:** `#202020` (dark, near-black)
- **Primary text:** white / `#ededed`
- **Secondary text:** `text-gray-300`
- **Accent:** indigo (`indigo-600`)
- **Cards/surfaces:** `bg-white/10` with `backdrop-blur-xl`, `border border-white/20`, `rounded-2xl`
- **Font:** Cutive Mono (`font-mono`) for body/labels/stats; Cutive (`font-sans`) for headings/display
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

## Route Plan (from Figma)
| Route | Status |
|---|---|
| `/` | Placeholder (needs full Home implementation) |
| `/events` | Not built |
| `/blog` | Not built |
| `/terminal` | Not built |
| `/jobs` | Not built |
| `/about` | Not built |
| `/speakers` | Built (Google Form embed) |

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
