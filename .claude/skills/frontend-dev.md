# Frontend Development — DevPev

## Stack
- React 19, TypeScript 5, Tailwind CSS v4
- Component-driven, mobile-aware (but desktop-first per Figma: 1440px)

## Tailwind v4 Rules
- Import: `@import "tailwindcss"` in globals.css — NOT `@tailwind base/components/utilities`
- Custom tokens live in `@theme inline { }` blocks in globals.css
- Use CSS variables for design tokens: `--background`, `--foreground`, etc.
- Arbitrary values: `bg-[#1f1f1f]`, `w-[95%]` — use sparingly; prefer design tokens
- Dark mode is configured via CSS (already dark-first in this project)
- No Tailwind config file needed for v4 — configuration is CSS-based

## Component Patterns
- One component per file, filename matches component name (PascalCase)
- Props interface defined above the component: `interface ButtonProps { ... }`
- Destructure props in the function signature
- Use `cn()` utility (install `clsx` + `tailwind-merge`) for conditional class merging
- Compound components for complex UI (e.g. Card + Card.Header + Card.Body)

## Styling Conventions (matching existing codebase)
- Surface/card style: `bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl`
- Glassmorphism is the design language — frosted glass surfaces on dark background
- Shadows: `shadow-[0_8px_32px_rgba(0,0,0,0.35)]`
- Transitions: `transition-all` or `transition-colors` with default duration
- Hover states: scale + color shift (`hover:scale-105 hover:bg-indigo-700/80`)
- Text hierarchy: white → `text-gray-300` → `text-gray-500`
- Rounded: `rounded-2xl` for cards, `rounded-full` for pill buttons, `rounded-lg` for inputs

## Accessibility
- All interactive elements must be keyboard accessible
- Use semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`
- Every `<img>` / `next/image` needs a descriptive `alt`
- Color contrast: text on dark backgrounds must meet WCAG AA (4.5:1 for normal text)
- Focus rings: never remove `outline` without providing a custom focus style
- ARIA labels on icon-only buttons

## Animation
- Prefer CSS keyframes (defined in globals.css) over JS animations
- Use `@keyframes` + Tailwind's `animate-[]` arbitrary value for custom animations
- Keep animations subtle — `duration-300` for micro-interactions
- Respect `prefers-reduced-motion`: wrap animations in `@media (prefers-reduced-motion: no-preference)`

## Responsive Design
- Desktop-first (Figma is 1440px wide)
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px), `2xl` (1536px)
- Container: `w-[95%] md:w-[80%] mx-auto` (matches existing Header pattern)
- Content max-width: ~1064px (189px margin on each side of 1440px canvas)

## State Management
- Local state: `useState` / `useReducer`
- Server state / async data: React's built-in `use()` + Suspense, or SWR/TanStack Query when needed
- No global state library unless complexity justifies it
- URL state: `useSearchParams` for filters/tabs that should be shareable
