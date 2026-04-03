---
title: "App Router patterns we actually use in production"
date: "2026-03-02"
author: "Kamola Yusupova"
github: "@kamola_dev"
tags: ["#nextjs", "#react", "#webdev"]
---

The App Router shipped with a lot of new ideas at once — Server Components, layouts, loading states, server actions. A year of production use has given us a clearer picture of what's genuinely useful and what's just new.

## Server Components as the default

The most important shift is treating Server Components as the default and only reaching for `"use client"` when you actually need it. The practical rule: if the component has no event handlers and no browser-only APIs, it stays on the server.

This matters more than it sounds. Every client component adds to the JS bundle. If your page has ten components and only two need interactivity, shipping all ten as client components is waste you didn't have to take on.

## Collocating loading and error states

One pattern we've leaned into is colocating `loading.tsx` and `error.tsx` with the routes they cover rather than relying on a single root-level handler. A slow database query on the jobs page shouldn't make the entire layout feel broken — it should just show a skeleton in that section.

```
app/
  jobs/
    page.tsx
    loading.tsx   ← scoped to /jobs only
    error.tsx
```

## Parallel routes for modals

Parallel routes (`@modal`) sound complicated but solve a real problem: you want a URL-addressable modal that doesn't fully replace the current page. We use this for event detail overlays on the events page. The user can share the URL, hit back, and land exactly where they were.

## Server actions for forms

We replaced our API route handlers for simple mutations with server actions. Less boilerplate, progressive enhancement for free, and no need to think about CSRF for same-origin posts. The tradeoff is they're harder to test in isolation — something we're still working through.

## What to skip

Intercepting routes are powerful but add meaningful complexity. Unless you have a specific UX requirement they solve — like the modal case above — avoid them. The mental overhead is real and the debugging experience is not great yet.
