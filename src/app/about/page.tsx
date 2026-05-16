"use client";

import Link from "next/link";

const stats = [
  { value: "21+", label: "meetups" },
  { value: "300+", label: "telegram members" },
  { value: "2", label: "cities" },
  { value: "40+", label: "avg attendees" },
];

const contacts = [
  {
    label: "Telegram",
    href: "https://t.me/devpevuz",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.93 6.688-1.732 8.17c-.13.58-.47.72-.952.448l-2.63-1.938-1.27 1.222c-.14.14-.258.258-.53.258l.19-2.686 4.88-4.408c.212-.19-.046-.295-.328-.106L7.77 14.793l-2.585-.808c-.562-.175-.573-.562.117-.832l10.117-3.9c.468-.17.878.114.511.835z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/devpevuz",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@devpevuz",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/devpevuz",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/devpevuz",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L2.25 2.25h6.172l4.268 5.637 5.554-5.637zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/devpevuz",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="flex justify-center px-4 sm:px-0 pt-8 pb-16">
        <div className="w-full max-w-[1063px] flex flex-col gap-px border border-border">

          {/* Hero */}
          <div className="bg-card p-8 sm:p-12">
            <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest mb-4">Since May 2025 · Tashkent & Fergana, Uzbekistan</p>
            <h1 className="font-sans text-[36px] sm:text-[56px] text-foreground leading-tight mb-6">
              Developers who build,<br />learn, and have fun together.
            </h1>
            <p className="font-mono text-[14px] sm:text-[15px] text-muted-foreground leading-relaxed max-w-[640px]">
              DevPev is an open developer community in Uzbekistan. We get together every few weeks — in Tashkent and Fergana — to talk about code, share what we&apos;re building, learn from each other, and enjoy the process. No gatekeeping, no corporate fluff. Just developers being developers.
            </p>
          </div>

          {/* Stats bar */}
          <div className="bg-card p-8 sm:p-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-border border border-border">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1 p-6">
                  <span className="font-sans text-[32px] sm:text-[40px] text-foreground leading-none">{s.value}</span>
                  <span className="font-mono text-[11px] text-muted-foreground">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What we do */}
          <div className="bg-card p-8 sm:p-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest mb-3">Meet</p>
              <p className="font-mono text-[13px] text-muted-foreground leading-relaxed">Regular in-person meetups in Tashkent and Fergana. Every 2–3 weeks. Real people, real conversation.</p>
            </div>
            <div>
              <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest mb-3">Build</p>
              <p className="font-mono text-[13px] text-muted-foreground leading-relaxed">Open-source projects you can actually contribute to. We build in public, together, starting from scratch.</p>
            </div>
            <div>
              <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest mb-3">Learn</p>
              <p className="font-mono text-[13px] text-muted-foreground leading-relaxed">Talks, study groups, whitepaper dives, and honest discussions. From junior to senior, everyone teaches something.</p>
            </div>
          </div>

          {/* Contributors */}
          <div id="contributors" className="bg-card p-8 sm:p-12">
            <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest mb-2">Contributors</p>
            <h2 className="font-sans text-[28px] sm:text-[36px] text-foreground mb-6">Built by the community.</h2>
            <p className="font-mono text-[13px] text-muted-foreground leading-relaxed mb-8 max-w-[560px]">
              DevPev is run by volunteers who care about the local developer scene. Contributors list coming soon — pulled directly from GitHub.
            </p>
            <a
              href="https://github.com/devpevuz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-mono text-[13px] text-foreground border border-border px-5 py-2 hover:bg-muted transition-colors"
            >
              github.com/devpevuz →
            </a>
          </div>

          {/* Bottom row: contact + sponsor */}
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div id="contact" className="bg-card p-8 sm:p-10 border-b sm:border-b-0 sm:border-r border-border">
              <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest mb-6">Contact</p>
              <div className="flex flex-wrap gap-4 mb-6">
                {contacts.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={c.label}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {c.icon}
                  </a>
                ))}
              </div>
              <a
                href="mailto:devpevuz@gmail.com"
                className="font-mono text-[12px] text-muted-foreground hover:text-foreground transition-colors"
              >
                devpevuz@gmail.com
              </a>
            </div>

            <div id="partner" className="bg-card p-8 sm:p-10">
              <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest mb-6">Partner with us</p>
              <p className="font-mono text-[13px] text-muted-foreground leading-relaxed mb-4">
                Sponsor a meetup in Tashkent or Fergana. Your logo reaches 40+ developers per event across social posts, recap videos, and live mentions.
              </p>
            
              <div className="flex flex-col gap-3">
                
                <Link
                  href="/sponsorship"
                  className="inline-block font-mono text-[13px] text-foreground border border-border px-5 py-2 hover:bg-muted transition-colors"
                >
                  View sponsorship details →
                </Link>
                 <p className="font-mono text-[13px] text-muted-foreground leading-relaxed pt-4 mb-0">
                  Reach out directly to the organizer:
                </p>
                <a
                  href="https://t.me/asilbek_abdullayev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-mono text-[12px] text-muted-foreground px-1 hover:text-foreground transition-colors"
                >
                  t.me/asilbek_abdullayev →
                </a>
                
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
