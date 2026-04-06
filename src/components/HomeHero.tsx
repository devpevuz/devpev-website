"use client";

import Link from "next/link";
import type { Event } from "@/lib/events";
import type { ArticleMeta } from "@/lib/articles";
import { useLanguage } from "@/lib/language-context";
import StatsBar from "./StatsBar";

const homeStats = [
  { key: "members", value: "300+" },
  { key: "meetups", value: "12+" },
  { key: "projects", value: "8+" },
  { key: "speakers", value: "20+" },
];

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
    <div className="min-h-screen text-white">
      <section className="flex justify-center px-4 sm:px-0 pt-1 sm:pt-3">
        <div className="w-full max-w-[1063px]">
          <StatsBar stats={homeStats} />

          <div className="grid gap-10 border border-white/10 bg-[rgba(255,255,255,0.04)] rounded-[28px] px-6 py-8 sm:px-10 sm:py-10 lg:grid-cols-[1.2fr_0.8fr] lg:min-h-[calc(100svh-220px)]">
            <div className="flex items-center">
              <div className="w-full">
                <h1 className="max-w-[680px] font-sans text-[40px] leading-[1.02] text-white sm:text-[56px] lg:text-[72px]">
                  {t.home.heroHeading}
                </h1>
                <p className="mt-4 max-w-[420px] font-mono text-[13px] leading-6 text-[#c9c9c9] sm:text-[14px]">
                  {t.home.heroSubtitle}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://t.me/devpevuz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#914848] px-5 py-3 font-sans text-[18px] text-white transition-colors hover:bg-[#a85a5a]"
                  >
                    {t.home.joinCta}
                  </a>
                  <Link
                    href="/events"
                    className="rounded-full border border-white/20 px-5 py-3 font-mono text-[16px] text-[#c9c9c9] transition-colors hover:border-white hover:text-white"
                  >
                    {t.home.eventsCta}
                  </Link>
                </div>
              </div>
            </div>

            {nextEvent ? (
              <aside className="event-card-glow flex flex-col justify-between rounded-[24px] border border-[#e7e6e6] bg-[rgba(255,255,255,0.06)] p-6 sm:p-8">
                <div>
                  <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#c9c9c9]">
                    {t.home.nextEvent}
                  </p>
                  <h2 className="mt-4 font-sans text-[32px] leading-tight text-white sm:text-[42px]">
                    {nextEvent.title}
                  </h2>
                  <div className="mt-6 space-y-2 font-mono text-[14px] text-[#c9c9c9]">
                    <p>{nextEvent.time}</p>
                    <p>{nextEvent.location}</p>
                    {nextEvent.description && <p>{nextEvent.description}</p>}
                  </div>
                </div>
                <div className="mt-8 border-t border-white/10 pt-5">
                  <div className="grid gap-3 font-mono text-[12px] text-white sm:grid-cols-2">
                    {nextEvent.topic && <p>topic: {nextEvent.topic}</p>}
                    {nextEvent.venue && <p>venue: {nextEvent.venue}</p>}
                  </div>
                  {nextEvent.url && (
                    <a
                      href={nextEvent.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex rounded-full border border-white/20 px-4 py-3 font-mono text-[14px] text-white transition-colors hover:border-white hover:bg-white/5"
                    >
                      {t.home.registerLuma}
                    </a>
                  )}
                </div>
              </aside>
            ) : latestArticle ? (
              <aside className="event-card-glow flex flex-col justify-between rounded-[24px] border border-[#e7e6e6] bg-[rgba(255,255,255,0.06)] p-6 sm:p-8">
                <div>
                  <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#c9c9c9]">
                    {t.home.latestArticle}
                  </p>
                  <h2 className="mt-4 font-sans text-[32px] leading-tight text-white sm:text-[42px]">
                    {latestArticle.title}
                  </h2>
                  <div className="mt-6 space-y-2 font-mono text-[14px] text-[#c9c9c9]">
                    <p>{latestArticle.date}</p>
                    <p>by {latestArticle.author}</p>
                  </div>
                  {latestArticle.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {latestArticle.tags.map((tag) => (
                        <span key={tag} className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#c9c9c9] border border-white/10 rounded-full px-3 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="mt-8 border-t border-white/10 pt-5">
                  <Link
                    href={`/blog/${latestArticle.slug}`}
                    className="inline-flex rounded-full border border-white/20 px-4 py-3 font-mono text-[14px] text-white transition-colors hover:border-white hover:bg-white/5"
                  >
                    {t.home.readArticle}
                  </Link>
                </div>
              </aside>
            ) : (
              <aside className="event-card-glow flex flex-col justify-center rounded-[24px] border border-[#e7e6e6] bg-[rgba(255,255,255,0.06)] p-6 sm:p-8">
                <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#c9c9c9]">community</p>
                <p className="mt-4 font-sans text-[28px] text-white">{t.home.noEventsTitle}</p>
                <Link href="/events" className="mt-6 font-mono text-[14px] text-[#c9c9c9] hover:text-white transition-colors">
                  {t.home.noEventsCta}
                </Link>
              </aside>
            )}
          </div>
        </div>
      </section>

      <section className="flex justify-center px-4 sm:px-0 pt-14 sm:pt-20">
        <div className="w-full max-w-[1063px]">
          <div className="grid gap-8 border-y border-white/10 py-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-[#c9c9c9]">
                {t.home.whyLabel}
              </p>
              <h2 className="mt-4 max-w-[420px] font-sans text-[36px] leading-tight text-white sm:text-[48px]">
                {t.home.whyHeading}
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {pathways.map((pathway) => (
                <article key={pathway.title} className="space-y-4">
                  <h3 className="font-sans text-[30px] text-white">{pathway.title}</h3>
                  <p className="font-mono text-[13px] leading-5 text-[#d2d2d2]">{pathway.description}</p>
                  <ul className="space-y-2">
                    {pathway.points.map((point) => (
                      <li key={point} className="font-mono text-[12px] leading-5 text-[#e4e4e4]">{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center px-4 sm:px-0 pt-14 sm:pt-20">
        <div className="w-full max-w-[1063px]">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-[#c9c9c9]">{t.home.whatLabel}</p>
              <h2 className="mt-4 max-w-[380px] font-sans text-[36px] leading-tight text-white sm:text-[48px]">
                {t.home.whatHeading}
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6">
                <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#c9c9c9]">{t.home.meetups}</p>
                <p className="mt-4 font-sans text-[28px] leading-tight text-white">{t.home.meetupsText}</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6">
                <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#c9c9c9]">{t.home.projectsLabel}</p>
                <p className="mt-4 font-sans text-[28px] leading-tight text-white">{t.home.projectsText}</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6 sm:col-span-2">
                <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#c9c9c9]">{t.home.communityLabel}</p>
                <p className="mt-4 max-w-[620px] font-sans text-[28px] leading-tight text-white">{t.home.communityText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center px-4 sm:px-0 pt-14 pb-6 sm:pt-20 sm:pb-8">
        <div className="w-full max-w-[1063px]">
          <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-[#c9c9c9]">{t.home.notesLabel}</p>
              <h2 className="mt-4 font-sans text-[36px] text-white sm:text-[48px]">{t.home.notesHeading}</h2>
            </div>
            <Link href="/about" className="hidden sm:inline-flex font-mono text-[14px] text-[#c9c9c9] transition-colors hover:text-white">
              {t.home.learnMore}
            </Link>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-[24px] border border-[#a7a7a7] bg-[rgba(255,255,255,0.04)] p-6">
                <p className="font-mono text-[16px] leading-7 text-white">{testimonial.text}</p>
                <div className="mt-8 border-t border-white/10 pt-4">
                  <p className="font-sans text-[24px] text-white">{testimonial.name}</p>
                  <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#c9c9c9]">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.04)] px-6 py-8 sm:px-8 sm:py-10">
            <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-[#c9c9c9]">{t.home.finalLabel}</p>
            <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h3 className="max-w-[620px] font-sans text-[34px] leading-tight text-white sm:text-[44px]">
                  {t.home.finalHeading}
                </h3>
                <p className="mt-4 max-w-[520px] font-mono text-[14px] leading-6 text-[#c9c9c9]">{t.home.finalSub}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://t.me/devpevuz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#914848] px-5 py-3 font-sans text-[18px] text-white transition-colors hover:bg-[#a85a5a]"
                >
                  {t.home.joinTelegram}
                </a>
                <Link
                  href="/about#partner"
                  className="rounded-full border border-white/20 px-5 py-3 font-mono text-[14px] text-white transition-colors hover:border-white hover:bg-white/5"
                >
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
