# DevPev Design Reference

This document captures the current visual system used in the project codebase.

## Stack

- Framework: Next.js 15, App Router
- Styling: Tailwind CSS v4 + shadcn/ui
- Fonts:
  - Display / nav font: `Cutive` → `--font-cutive` → `font-sans`
  - Body / mono font: `IBM Plex Mono` → `--font-ibm-plex-mono` → `font-mono`
- Theme: dual-mode (light + dark) via `.dark` class; default respects system preference

## Core Tokens

Defined in [src/app/globals.css](src/app/globals.css) using oklch color space.

### Dark mode base

- Background: `oklch(0.14 0.004 75)` ≈ deep near-black neutral
- Foreground: `oklch(0.95 0.006 75)` ≈ near-white
- Card: `oklch(0.19 0.005 75)`
- Muted: `oklch(0.25 0.005 75)`
- Muted foreground: `oklch(0.62 0.008 75)`
- Border: `oklch(1 0 0 / 10%)` (white/10)
- Input: `oklch(1 0 0 / 12%)`

### Light mode base

- Background: `oklch(0.985 0.002 75)` ≈ near-white warm
- Foreground: `oklch(0.18 0.006 75)` ≈ near-black
- Card: `oklch(0.97 0.004 75)`
- Muted: `oklch(0.93 0.005 75)`
- Muted foreground: `oklch(0.52 0.01 75)`
- Border: `oklch(0.88 0.008 75)`

### Primary (amber accent)

- Dark: `oklch(0.76 0.18 68)` — buttons, active nav, primary CTA
- Light: `oklch(0.72 0.18 68)`
- Primary foreground: `oklch(0.12 0.02 68)`

### Terminal / special colors (both modes)

- `--term-green`: `#28c840`
- `--term-red`: `#ff5f57`
- `--term-yellow`: `#febc2e`
- `--term-accent`: `#914848` (legacy brand accent, kept for terminal)
- `--term-normal`: `#c9c9c9`
- `--term-dim`: `#999999`
- `--term-muted`: `#666666`
- `--term-white`: `#ffffff`

### Radius

- Base `--radius`: `0rem` — sharp corners throughout
- All radius scale values (`--radius-sm` through `--radius-4xl`) multiply from this base, so effectively all 0 unless explicitly overridden

## Typography

### Font roles

- `font-sans` → `Cutive` — headings, nav items, section titles
- `font-mono` / `font-heading` → `IBM Plex Mono` — body, labels, metadata, buttons
- `body` defaults to `font-mono` (IBM Plex Mono)
- `html` also defaults to `font-mono`

### Sizes in use

- Hero H1: `text-[40px]` → `sm:text-[56px]` → `lg:text-[68px]`, `leading-[1.02]`
- Section / feature headings: `text-[26px]`
- Event card title: `text-[24px]`
- Nav links (desktop): `text-[15px]` font-sans
- Nav links (mobile): `text-[15px]` font-sans
- Button text: typically `text-sm` via shadcn
- Small labels / uppercase metadata: `text-[10px]` to `text-[11px]`, `uppercase tracking-widest`
- List meta / tag text: `text-[12px]` to `text-[13px]`
- Footer link column labels: `text-[9px] sm:text-xs`, uppercase tracking-wider

### Article typography

Defined in `.prose-article` in [src/app/globals.css](src/app/globals.css).

- Paragraphs: IBM Plex Mono, `15px`, `line-height: 1.8`, color `--foreground`
- H2: Cutive, `26px`, color `--foreground`
- Inline code: `13px`, `background: oklch(0 0 0 / 8%)` (light) / `oklch(1 0 0 / 8%)` (dark), `border-radius: 4px`
- Code blocks: `border-radius: 12px`, `padding: 1.25rem`, theme-aware border and bg
- Lists: no bullets, `—` prefix via `::before`, same font/size as paragraphs

## Layout

### Content width

- Max width throughout: `max-w-[1063px]` centered with `flex justify-center`

### Article width

- Max width: `720px`

### Header

Defined in [src/components/Navbar.tsx](src/components/Navbar.tsx).

- Position: `fixed inset-x-0 top-0 z-50`
- Outer wrapper: `flex justify-center px-3 pt-3`
- Nav container: `w-full max-w-[1063px] border border-border bg-background/90 backdrop-blur-md`
- Inner: `flex items-center justify-between px-4 py-2.5 min-h-[52px]`
- Nav links (desktop): `px-3 py-2 font-sans text-[15px]`, divided by `border-r border-border`
- Active state: `bg-primary text-primary-foreground`
- Hover state: `hover:text-foreground hover:bg-muted`
- Resources dropdown: same styling, opens below with `border border-t-0`
- StatsBar sits below nav in its own `flex justify-center px-3 pt-1` row

### Main top offset

Defined in [src/app/layout.tsx](src/app/layout.tsx).

- `pt-[130px] sm:pt-[170px]` (accounts for fixed nav + StatsBar)

## Background

### Grid

- Body has a subtle 20×20px grid via `background-image` linear gradients
- Dark: `rgba(255,255,255,0.029)` lines
- Light: `rgba(0,0,0,0.025)` lines

### Dot background

[src/components/DotBackground.tsx](src/components/DotBackground.tsx) — currently returns `null` (disabled / placeholder).

- Controlled via `body.reading-mode` class (set by `RouteBodyClass` on `/blog/[slug]`)
- When present, `canvas { opacity: 0 }` hides it

## Component Patterns

### Header / Navbar

- Sharp-cornered glass panel, `bg-background/90 backdrop-blur-md`
- Title font for nav items
- Amber primary bg on active route
- Hide on downscroll (>6px delta), show on upscroll or near top (`currentY < 12`)
- Mobile: hamburger toggles full-width stacked menu; Resources shown as labeled section

### StatsBar

Defined in [src/components/StatsBar.tsx](src/components/StatsBar.tsx).

- Two toggle buttons: "show stats" and "donate", using shadcn `Button` size `xs`
- Buttons share a single row, joined border (`border-r-0` on left)
- Active panel uses `variant="default"` (amber fill)
- Reveal panel: `border border-t-0 border-border bg-muted`, `px-3 py-2`, small mono text
- Donate panel: support links + collapsible crypto addresses

### Hero

Defined in [src/components/HomeHero.tsx](src/components/HomeHero.tsx).

- Full page sections, `max-w-[1063px]`, sharp borders
- Hero grid: `lg:grid-cols-[1.2fr_0.8fr]`, single column below lg
- Left: large Cutive headline with typewriter effect on first word, mono subtext, CTA buttons
- Right: next-event card with amber spinning-glow border (`event-card-glow`), info rows divided by border
- Fallback to latest article card if no next event
- Below hero: 3-col feature grid (meetups / blog / projects)
- Bottom: CTA strip with stats tagline and join/partner buttons

### Event card glow

CSS in [src/app/globals.css](src/app/globals.css), class `.event-card-glow`.

- `::before` pseudo with `conic-gradient` rotating via `@property --angle`
- Animation: `glow-angle 4s linear infinite`
- Color: amber `oklch(0.72 0.18 68)` sweep

### Blog list

Defined in [src/components/BlogList.tsx](src/components/BlogList.tsx) / [src/app/blog/page.tsx](src/app/blog/page.tsx).

- Row-based list
- Title first, metadata below in smaller mono text
- Hover: `hover:bg-muted`

### Blog article page

Defined in [src/app/blog/[slug]/page.tsx](src/app/blog/[slug]/page.tsx).

- Content in `.prose-article`
- `RouteBodyClass` adds `reading-mode` to body → disables dot canvas

### Footer

Defined in [src/components/Footer.tsx](src/components/Footer.tsx).

- `flex justify-center px-3 pb-8 pt-4`
- Container: `max-w-[1063px] border border-border bg-background`, sharp
- Left column: logo + tagline + social icon row (Telegram, Instagram, YouTube, GitHub, X, LinkedIn)
- Right: 3-col link grid (Community / Resources / About), responsive: `grid-cols-3 sm:flex`
- Column labels: `font-sans text-[9px] sm:text-xs uppercase tracking-wider sm:tracking-widest`
- Links: `font-mono text-[10px] sm:text-sm`, `hover:text-primary`
- Bottom bar: `border-t`, copyright left + "by developers for developers" right

### Terminal

Defined in [src/components/Terminal.tsx](src/components/Terminal.tsx).

- Uses `--term-*` color tokens
- Hacking animation: `terminal-hacking` class — glitch-skew + flicker keyframes, red outline + glow

### ThemeToggle

[src/components/ThemeToggle.tsx](src/components/ThemeToggle.tsx) — toggles `.dark` class on `<html>`, persists to `localStorage`.

## Motion

### Navbar scroll hide/show

- `transition-transform duration-300`
- `translate-y-0` ↔ `-translate-y-full` based on scroll direction

### Typewriter (HomeHero)

- Types at 80ms/char, deletes at 50ms/char, pauses 5000ms after full word, 200ms after delete

### Event card glow

- `conic-gradient` rotates `0deg → 360deg` over 4s, continuous

### Terminal glitch

- `glitch-skew` (0.3s infinite) + `glitch-flicker` (0.15s infinite) on `.terminal-hacking`

## Reusable Spacing Patterns

- Section outer: `pt-10 sm:pt-14`
- Card inner: `p-6 sm:p-8` (hero left panel: `p-8 sm:p-10`)
- CTA spacing after subtext: `mt-8`
- Utility labels above content: `mt-2` to `mt-4`

## Routes

| Route | Component |
|---|---|
| `/` | `HomeHero` + sections in `src/app/page.tsx` |
| `/events` | `src/app/events/page.tsx` |
| `/blog` | `BlogList` + `BlogPageTitle` |
| `/blog/[slug]` | SSG article renderer, `.prose-article` |
| `/projects` | `src/app/projects/page.tsx` |
| `/jobs` | `JobList` in `src/app/jobs/page.tsx` |
| `/terminal` | `Terminal` component |
| `/about` | `src/app/about/page.tsx` |
| `/speakers` | Google Form embed |
| `/sponsorship` | `src/app/sponsorship/page.tsx` |

## Files To Check When Updating The Design

- [src/app/globals.css](src/app/globals.css) — tokens, prose, animations
- [src/app/layout.tsx](src/app/layout.tsx) — fonts, root classes, main offset
- [src/components/Navbar.tsx](src/components/Navbar.tsx)
- [src/components/Footer.tsx](src/components/Footer.tsx)
- [src/components/StatsBar.tsx](src/components/StatsBar.tsx)
- [src/components/HomeHero.tsx](src/components/HomeHero.tsx)
- [src/components/ThemeToggle.tsx](src/components/ThemeToggle.tsx)
- [src/app/page.tsx](src/app/page.tsx)
- [src/app/blog/page.tsx](src/app/blog/page.tsx)
- [src/app/blog/[slug]/page.tsx](src/app/blog/[slug]/page.tsx)
