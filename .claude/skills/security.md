# Security Guidelines — DevPev

## OWASP Top 10 Checklist for Next.js

### XSS Prevention
- Never use `dangerouslySetInnerHTML` — if unavoidable, sanitize with DOMPurify first
- React auto-escapes JSX text content — do NOT use template literals to inject HTML
- Validate and sanitize all user input before displaying
- CSP headers: configure in `next.config.ts` or middleware

### Injection
- Never concatenate user input into SQL queries — use parameterized queries / ORMs
- Avoid `eval()`, `Function()`, and dynamic `import()` with user-supplied strings
- Validate all form inputs server-side (not just client-side)

### Authentication & Authorization (when added)
- Use `httpOnly`, `Secure`, `SameSite=Strict` cookie flags for session tokens
- Never store JWTs or sensitive tokens in `localStorage` — use `httpOnly` cookies
- Implement rate limiting on auth endpoints
- Use Next.js middleware to protect routes: check session before rendering protected pages

### Sensitive Data Exposure
- Never log sensitive user data (passwords, tokens, PII) — even in dev
- Use `NEXT_PUBLIC_` prefix ONLY for values safe to expose publicly
- Secrets (API keys, DB URLs) must stay in server-side env vars only
- Never commit `.env` files — `.gitignore` already covers this

### External Links & iframes
- Always use `rel="noopener noreferrer"` on `target="_blank"` links (already in codebase)
- iframes must specify `sandbox` attribute with minimum permissions
- Validate iframe `src` URLs — only allow trusted origins (lu.ma, Google Forms)
- Add `X-Frame-Options: SAMEORIGIN` header to prevent clickjacking on own pages

### Dependency Security
- Run `npm audit` before PRs — fix critical/high severity issues
- Keep `next`, `react`, `react-dom` on latest stable versions
- Avoid unmaintained packages

### Next.js Specific
- Use `next.config.ts` security headers:
  ```ts
  headers: async () => [{
    source: '/(.*)',
    headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    ]
  }]
  ```
- Validate `params` and `searchParams` in page components — they come from user-controlled URLs
- Use Server Actions for mutations — they're automatically CSRF-protected in Next.js 15
- Don't expose internal error details to the client — use generic error messages in production

### Content Security
- Images from external domains must be added to `next.config.ts` `images.remotePatterns`
- Validate file uploads (type, size, content) if added in the future
- Use `next/script` with `strategy="afterInteractive"` for third-party scripts

## Pre-PR Security Checklist
- [ ] No secrets or API keys in client-side code
- [ ] No `dangerouslySetInnerHTML` without sanitization
- [ ] External links have `rel="noopener noreferrer"`
- [ ] User inputs are validated server-side
- [ ] `npm audit` passes (no critical/high)
- [ ] No console.log with sensitive data
