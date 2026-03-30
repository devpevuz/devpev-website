# DevPev Design Reference

This document captures the current visual system used in the project codebase.

## Stack

- Framework: Next.js App Router
- Styling: Tailwind CSS v4
- Fonts:
  - Title / display font: `Cutive`
  - Reading / mono font: `IBM Plex Mono`

## Core Tokens

Defined in [src/app/globals.css](/Users/beks/coding/Projects/devpev-website/src/app/globals.css).

### Base colors

- Background: `#202020`
- Foreground: `#ededed`

### Common text colors

- Primary text: `#ffffff`
- Default secondary text: `#c9c9c9`
- Elevated secondary text: `#dddddd`
- Muted metadata: `#b8b8b8`
- Deep muted metadata: `#999999`
- Lowest contrast tags / dividers text: `#666666`

### Accent colors

- Brand accent / active nav / primary CTA: `#914848`
- CTA hover accent: `#a85a5a`

### Borders and surfaces

- Standard border: `border-white/10`
- Strong border: `#e7e6e6`
- Mid border: `#a7a7a7`
- Glass surface: `bg-[rgba(255,255,255,0.07)]`
- Softer content surface: `bg-[rgba(255,255,255,0.04)]`
- Slightly elevated content surface: `bg-[rgba(255,255,255,0.05)]`
- Reading/article surface: `bg-[rgba(255,255,255,0.07)]`

### Shadows and blur

- Shared surface shadow: `shadow-[0px_6px_8px_0px_rgba(0,0,0,0.15)]`
- Shared blur: `backdrop-blur-[2px]`

## Typography

### Font roles

- `font-sans` maps to `Cutive`
- `font-mono` maps to `IBM Plex Mono`
- `body` defaults to `IBM Plex Mono`

### Homepage and marketing sizes

- Hero H1:
  - Mobile: `text-[40px]`
  - `sm`: `text-[56px]`
  - `lg`: `text-[72px]`
  - Leading: `leading-[1.02]`
- Section headings:
  - Typical: `text-[36px]`
  - `sm`: `text-[48px]`
- Card / feature headings:
  - Typical: `text-[28px]` to `text-[32px]`
- Primary nav:
  - Desktop: `text-[21px]`
  - Mobile menu: `text-[17px]`
- Button text:
  - Primary CTA: `text-[18px]`
  - Secondary / utility CTA: `text-[14px]` to `text-[16px]`
- Small labels / metadata:
  - Standard meta: `text-[12px]`
  - List meta: `text-[13px]`

### Article typography

Defined in `.prose-article`.

- Paragraphs:
  - Font: `IBM Plex Mono`
  - Size: `15px`
  - Line height: `1.8`
  - Color: `#dddddd`
- H2:
  - Font: `Cutive`
  - Size: `26px`
  - Color: `#ffffff`
- Inline code:
  - Size: `13px`
  - Background: `rgba(255,255,255,0.08)`
- Code blocks:
  - Border radius: `12px`
  - Padding: `1.25rem`
  - Border: `rgba(255,255,255,0.14)`

## Layout

### Main content width

- Shared max width: `1063px`

### Article width

- Article max width: `720px`

### Header

Defined in [src/components/Navbar.tsx](/Users/beks/coding/Projects/devpev-website/src/components/Navbar.tsx).

- Position: `fixed inset-x-0 top-0 z-50`
- Outer top spacing:
  - Mobile: `pt-2`
  - Desktop: `sm:pt-[20px]`
- Container padding:
  - Mobile: `px-5 py-3.5`
  - Desktop: `sm:px-7`
- Desktop nav layout:
  - centered nav group
  - equalized item width using `min-w-[88px]`
  - item padding: `px-4 py-3`
  - item radius: `rounded-[18px]`

### Main top offset

Defined in [src/app/layout.tsx](/Users/beks/coding/Projects/devpev-website/src/app/layout.tsx).

- `main` top padding:
  - Mobile: `pt-[90px]`
  - Desktop: `sm:pt-[130px]`

## Radius System

- Large section / hero containers: `rounded-[28px]`
- Standard cards and event panel: `rounded-[24px]`
- Header/nav pills: `rounded-[18px]` to `rounded-[20px]`
- Small utility panels: `rounded-[14px]`
- Buttons: typically `rounded-full`
- Code blocks: `rounded-[12px]`

## Component Patterns

### Header

- Fixed top layer
- Glass panel on dark background
- Title font for nav items
- Accent background on active route
- Hidden on downward scroll, shown on upward scroll or near top

### StatsBar

Defined in [src/components/StatsBar.tsx](/Users/beks/coding/Projects/devpev-website/src/components/StatsBar.tsx).

- Utility buttons are text-first
- Active state uses white underline
- Reveal panels use soft glass surface with small mono text

### Hero

- Two-column layout on desktop
- Left: large `Cutive` headline + mono subtext + CTAs
- Right: elevated event panel with stronger border and soft surface

### Blog list

Defined in [src/app/blog/page.tsx](/Users/beks/coding/Projects/devpev-website/src/app/blog/page.tsx).

- Row-based list, aligned with jobs page pattern
- Title first
- Metadata line below in smaller mono text
- Hover treatment: `hover:bg-white/5`

### Blog article page

Defined in [src/app/blog/[slug]/page.tsx](/Users/beks/coding/Projects/devpev-website/src/app/blog/[slug]/page.tsx).

- Reading content sits inside a brighter panel
- Metadata is brighter than list metadata
- Dotted animated background is disabled on article routes

### Footer

- Glass surface matching header language
- Logo + tagline on left
- Link columns on right

## Motion

### Header motion

- Transition: `transition-transform duration-300`
- Behavior:
  - visible near top
  - hides on downward scroll
  - reappears on upward scroll

### Dot background

Implemented via [src/components/DotBackground.tsx](/Users/beks/coding/Projects/devpev-website/src/components/DotBackground.tsx).

- Fixed canvas background
- Small drifting white dots
- Hidden on article pages via `body.reading-mode`

## Reusable Spacing Patterns

- Utility microcopy and labels: `mt-2` to `mt-4`
- CTA spacing after subtext: `mt-8`
- Major section spacing:
  - `pt-14`
  - `sm:pt-20`
- Standard card padding:
  - `p-6`
  - `sm:p-8`

## Visual Principles In Use

- Dark-first interface
- Frosted glass panels over a dark field
- Decorative motion kept behind content
- `Cutive` for titles and navigation presence
- `IBM Plex Mono` for supporting copy and reading comfort
- Strong emphasis on centered max-width layouts rather than full-bleed sections

## Files To Check When Updating The Design

- [src/app/globals.css](/Users/beks/coding/Projects/devpev-website/src/app/globals.css)
- [src/app/layout.tsx](/Users/beks/coding/Projects/devpev-website/src/app/layout.tsx)
- [src/components/Navbar.tsx](/Users/beks/coding/Projects/devpev-website/src/components/Navbar.tsx)
- [src/components/Footer.tsx](/Users/beks/coding/Projects/devpev-website/src/components/Footer.tsx)
- [src/components/StatsBar.tsx](/Users/beks/coding/Projects/devpev-website/src/components/StatsBar.tsx)
- [src/components/DotBackground.tsx](/Users/beks/coding/Projects/devpev-website/src/components/DotBackground.tsx)
- [src/app/page.tsx](/Users/beks/coding/Projects/devpev-website/src/app/page.tsx)
- [src/app/blog/page.tsx](/Users/beks/coding/Projects/devpev-website/src/app/blog/page.tsx)
- [src/app/blog/[slug]/page.tsx](/Users/beks/coding/Projects/devpev-website/src/app/blog/[slug]/page.tsx)
