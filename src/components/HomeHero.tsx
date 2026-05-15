"use client";

import Link from "next/link";
import type { Event } from "@/lib/events";
import type { ArticleMeta } from "@/lib/articles";
import { useLanguage } from "@/lib/language-context";
import { buttonVariants } from "@/components/ui/button";

interface HomeHeroProps {
  nextEvent: Event | null;
  latestArticle: ArticleMeta | null;
}

export default function HomeHero({ nextEvent, latestArticle }: HomeHeroProps) {
  const { t } = useLanguage();

  const pathways = [
    {
      title: t.home.vibePath,
      description: t.home.vibeDesc,
      points: [t.home.vibePoint1, t.home.vibePoint2],
    },
    {
      title: t.home.learnPath,
      description: t.home.learnDesc,
      points: [t.home.learnPoint1, t.home.learnPoint2],
    },
    {
      title: t.home.buildPath,
      description: t.home.buildDesc,
      points: [t.home.buildPoint1, t.home.buildPoint2],
    },
  ];

  const testimonials = [
    { text: t.home.t1, name: t.home.t1name, role: t.home.t1role },
    { text: t.home.t2, name: t.home.t2name, role: t.home.t2role },
    { text: t.home.t3, name: t.home.t3name, role: t.home.t3role },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="flex justify-center px-4 sm:px-0 pt-1 sm:pt-3">
        <div className="w-full max-w-[1063px]">
          <div className="grid gap-0 border border-border bg-card lg:grid-cols-[1.2fr_0.8fr]">
            <div className="flex items-center border-b lg:border-b-0 lg:border-r border-border p-8 sm:p-10">
              <div className="w-full py-30">
                <h1 className="max-w-[680px] font-sans text-[40px] leading-[1.02] text-foreground sm:text-[56px] lg:text-[68px]">
                  {t.home.heroHeading}
                </h1>
                <p className="mt-4 max-w-[420px] font-mono text-[12px] leading-6 text-muted-foreground sm:text-[13px]">
                  {t.home.heroSubtitle}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  <a href="https://t.me/devpevuz" target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "lg" })}>
                    {t.home.joinCta}
                  </a>
                  <Link href="/events" className={buttonVariants({ variant: "outline", size: "lg" })}>
                    {t.home.eventsCta}
                  </Link>
                </div>
              </div>
            </div>

            {nextEvent ? (
              <aside className="event-card-glow flex flex-col justify-between border-l border-border">
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-3 border-b border-border">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {t.home.nextEvent}
                    </span>
                    {nextEvent.type && (
                      <span className="font-mono text-[10px] uppercase tracking-widest border border-primary/60 text-primary px-2 py-0.5">
                        {nextEvent.type}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <div className="px-5 py-4 border-b border-border">
                    <h2 className="font-sans text-[24px] leading-tight text-foreground">
                      {nextEvent.title}
                    </h2>
                    {nextEvent.description && (
                      <p className="mt-1 font-mono text-[11px] leading-5 text-muted-foreground">
                        {nextEvent.description}
                      </p>
                    )}
                  </div>

                  {/* Info rows */}
                  <div className="flex flex-col divide-y divide-border">
                    <div className="flex items-baseline gap-3 px-5 py-3">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground w-16 shrink-0">when</span>
                      <span className="font-mono text-[12px] text-foreground">{nextEvent.day}, {nextEvent.date} · {nextEvent.time}</span>
                    </div>
                    <div className="flex items-baseline gap-3 px-5 py-3">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground w-16 shrink-0">where</span>
                      <span className="font-mono text-[12px] text-foreground">{nextEvent.location}</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                {nextEvent.url && (
                  <div className="px-5 py-4 border-t border-border">
                    <a
                      href={nextEvent.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({ variant: "default", size: "lg" }) + " w-full justify-center"}
                    >
                      {t.home.registerLuma}
                    </a>
                  </div>
                )}
              </aside>
            ) : latestArticle ? (
              <aside className="event-card-glow flex flex-col justify-between p-8">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {t.home.latestArticle}
                  </p>
                  <h2 className="mt-3 font-sans text-[28px] leading-tight text-foreground sm:text-[36px]">
                    {latestArticle.title}
                  </h2>
                  <div className="mt-4 space-y-1 font-mono text-[12px] text-muted-foreground">
                    <p>{latestArticle.date}</p>
                    <p>by {latestArticle.author}</p>
                  </div>
                  {latestArticle.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {latestArticle.tags.map((tag) => (
                        <span key={tag} className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground border border-border px-2 py-0.5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="mt-6 border-t border-border pt-4">
                  <Link href={`/blog/${latestArticle.slug}`} className={buttonVariants({ variant: "outline", size: "sm" })}>
                    {t.home.readArticle}
                  </Link>
                </div>
              </aside>
            ) : (
              <aside className="event-card-glow flex flex-col justify-center p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">community</p>
                <p className="mt-3 font-sans text-[24px] text-foreground">{t.home.noEventsTitle}</p>
                <Link href="/events" className={buttonVariants({ variant: "outline", size: "sm" }) + " mt-4 w-fit"}>
                  {t.home.noEventsCta}
                </Link>
              </aside>
            )}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="flex justify-center px-4 sm:px-0 pt-10 sm:pt-14">
        <div className="w-full max-w-[1063px]">
          <div className="grid gap-0 border-y border-border py-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="pr-0 lg:pr-8 pb-6 lg:pb-0 lg:border-r border-border">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {t.home.whyLabel}
              </p>
              <h2 className="mt-3 max-w-[420px] font-sans text-[32px] leading-tight text-foreground sm:text-[44px]">
                {t.home.whyHeading}
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-3 lg:pl-8">
              {pathways.map((pathway) => (
                <article key={pathway.title} className="space-y-3">
                  <h3 className="font-sans text-[24px] text-foreground">{pathway.title}</h3>
                  <p className="font-mono text-[12px] leading-5 text-muted-foreground">{pathway.description}</p>
                  <ul className="space-y-1">
                    {pathway.points.map((point) => (
                      <li key={point} className="font-mono text-[11px] leading-5 text-foreground/70 before:content-['—_'] before:text-muted-foreground">{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What */}
      <section className="flex justify-center px-4 sm:px-0 pt-10 sm:pt-14">
        <div className="w-full max-w-[1063px]">
          <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="pb-6 lg:pb-0 lg:border-r border-border lg:pr-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{t.home.whatLabel}</p>
              <h2 className="mt-3 max-w-[380px] font-sans text-[32px] leading-tight text-foreground sm:text-[44px]">
                {t.home.whatHeading}
              </h2>
            </div>
            <div className="grid gap-0 sm:grid-cols-2 border border-border lg:ml-8">
              <div className="border-b sm:border-b-0 sm:border-r border-border p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{t.home.meetups}</p>
                <p className="mt-3 font-sans text-[22px] leading-tight text-foreground">{t.home.meetupsText}</p>
              </div>
              <div className="border-b border-border p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{t.home.projectsLabel}</p>
                <p className="mt-3 font-sans text-[22px] leading-tight text-foreground">{t.home.projectsText}</p>
              </div>
              <div className="sm:col-span-2 p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{t.home.communityLabel}</p>
                <p className="mt-3 max-w-[620px] font-sans text-[22px] leading-tight text-foreground">{t.home.communityText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="flex justify-center px-4 sm:px-0 pt-10 pb-6 sm:pt-14 sm:pb-8">
        <div className="w-full max-w-[1063px]">
          <div className="flex items-end justify-between gap-4 border-b border-border pb-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{t.home.notesLabel}</p>
              <h2 className="mt-3 font-sans text-[32px] text-foreground sm:text-[44px]">{t.home.notesHeading}</h2>
            </div>
            <Link href="/about" className={buttonVariants({ variant: "ghost", size: "sm" }) + " hidden sm:inline-flex"}>
              {t.home.learnMore}
            </Link>
          </div>

          <div className="mt-6 grid gap-0 border border-border lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <article key={testimonial.name} className={`p-6 ${i < testimonials.length - 1 ? "border-b lg:border-b-0 lg:border-r border-border" : ""}`}>
                <p className="font-mono text-[13px] leading-6 text-foreground">{testimonial.text}</p>
                <div className="mt-6 border-t border-border pt-3">
                  <p className="font-sans text-[20px] text-foreground">{testimonial.name}</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Final CTA */}
          <div className="mt-0 border border-t-0 border-border px-6 py-8 sm:px-8 sm:py-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{t.home.finalLabel}</p>
            <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h3 className="max-w-[620px] font-sans text-[28px] leading-tight text-foreground sm:text-[38px]">
                  {t.home.finalHeading}
                </h3>
                <p className="mt-3 max-w-[520px] font-mono text-[12px] leading-6 text-muted-foreground">{t.home.finalSub}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a href="https://t.me/devpevuz" target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "lg" })}>
                  {t.home.joinTelegram}
                </a>
                <Link href="/about#partner" className={buttonVariants({ variant: "outline", size: "lg" })}>
                  {t.home.partnerCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
