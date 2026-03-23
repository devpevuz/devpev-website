# Next.js 15 Development — DevPev

You are working on a Next.js 15 App Router project. Follow these rules strictly.

## App Router Patterns
- All routes are file-based under `src/app/`
- Page files: `page.tsx`, layouts: `layout.tsx`, loading states: `loading.tsx`, error boundaries: `error.tsx`
- Route groups: use `(group)` folders to share layouts without affecting the URL
- Dynamic routes: `[param]/page.tsx`, catch-all: `[...slug]/page.tsx`

## Server vs Client Components
- Default to **Server Components** — they can be async, fetch data directly, have no bundle size
- Add `"use client"` at the top only when the component needs: `useState`, `useEffect`, event handlers, browser APIs, or client-only libraries
- Never fetch data in Client Components when a Server Component can do it
- Pass serializable props from Server to Client components only

## Data Fetching
- Use `async/await` directly in Server Components for data fetching
- Use `fetch()` with Next.js cache options: `{ cache: 'force-cache' }` (SSG), `{ next: { revalidate: N } }` (ISR), `{ cache: 'no-store' }` (SSR)
- For mutations, use Server Actions (`"use server"`)

## Performance
- Use `next/image` for all images — always provide `width`, `height`, and `alt`
- Use `next/link` for all internal navigation
- Use `next/font` for custom fonts — never load fonts via `<link>` tags
- Add `loading="lazy"` to non-critical images; use `priority` only for above-the-fold images
- Minimize `"use client"` boundaries — push them as far down the component tree as possible

## File Organization
```
src/
  app/              # Routes
  components/       # Shared UI (PascalCase filenames)
  lib/              # Utilities, API clients, helpers
  types/            # Shared TypeScript types/interfaces
  hooks/            # Custom React hooks (use*.ts)
```

## TypeScript
- Enable strict mode (already configured in tsconfig.json)
- Define explicit interfaces/types for all props and API responses
- Use `import type` for type-only imports
- Avoid `any` — use `unknown` + type narrowing or proper generics

## Environment Variables
- Server-only secrets: `MY_SECRET` (never exposed to client)
- Client-safe values: `NEXT_PUBLIC_MY_VALUE`
- Load via `process.env.MY_VAR` — never import from `.env` directly
- Validate required env vars at startup in `src/lib/env.ts`

## Common Gotchas
- `cookies()`, `headers()`, `searchParams` are async in Next.js 15 — always `await` them
- `params` in page components is also a Promise in Next.js 15: `const { id } = await params`
- Don't use `useRouter` for redirects in Server Components — use `redirect()` from `next/navigation`
- `"use client"` components cannot import Server-only modules
