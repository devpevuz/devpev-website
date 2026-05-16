"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Event } from "@/lib/events";
import type { ArticleMeta } from "@/lib/articles";
import { useLanguage } from "@/lib/language-context";
import { buttonVariants } from "@/components/ui/button";

const TYPE_SPEED = 80;
const DELETE_SPEED = 50;
const PAUSE_AFTER_TYPE = 5000;
const PAUSE_AFTER_DELETE = 200;

interface HomeHeroProps {
  nextEvent: Event | null;
  latestArticle: ArticleMeta | null;
}

export default function HomeHero({ nextEvent, latestArticle }: HomeHeroProps) {
  const { t } = useLanguage();
  const [displayed, setDisplayed] = useState<string>(t.home.heroWords[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("pausing");

  useEffect(() => {
    setWordIndex(0);
    setDisplayed(t.home.heroWords[0]);
    setPhase("pausing");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t.home.heroWords]);

  useEffect(() => {
    const target = t.home.heroWords[wordIndex];

    if (phase === "typing") {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), TYPE_SPEED);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("deleting"), PAUSE_AFTER_TYPE);
        return () => clearTimeout(t);
      }
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), DELETE_SPEED);
        return () => clearTimeout(t);
      } else {
        const words = t.home.heroWords;
        const timer = setTimeout(() => {
          setWordIndex((i) => (i + 1) % words.length);
          setPhase("typing");
        }, PAUSE_AFTER_DELETE);
        return () => clearTimeout(timer);
      }
    }

    if (phase === "pausing") {
      const t = setTimeout(() => setPhase("deleting"), PAUSE_AFTER_TYPE);
      return () => clearTimeout(t);
    }
  }, [displayed, wordIndex, phase]);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="flex justify-center px-4 sm:px-0 pt-1 sm:pt-3">
        <div className="w-full max-w-[1063px]">
          <div className="grid gap-0 border border-border bg-card lg:grid-cols-[1.2fr_0.8fr]">
            <div className="flex items-center border-b lg:border-b-0 lg:border-r border-border p-8 sm:p-10">
              <div className="w-full py-30">
                <h1 className="max-w-[680px] font-sans text-[40px] leading-[1.02] text-foreground sm:text-[56px] lg:text-[68px]">
                  <span className="text-primary inline-block">
                    {displayed}
                    <span className="animate-pulse">_</span>
                  </span>
                  {" " + t.home.heroSuffix}
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

      {/* What we do */}
      <section className="flex justify-center px-4 sm:px-0 pt-10 sm:pt-14">
        <div className="w-full max-w-[1063px]">
          <div className="grid gap-0 border border-border lg:grid-cols-3">
            <Link href="/events" className="group block border-b lg:border-b-0 lg:border-r border-border p-6 hover:bg-muted transition-colors">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">meetups</p>
              <h3 className="mt-3 font-sans text-[26px] leading-tight text-foreground">Monthly, in Tashkent & Fergana.</h3>
              <p className="mt-3 font-mono text-[12px] leading-5 text-muted-foreground">Talks, workshops, and open discussions. 21+ events since 2024. Free to attend.</p>
              <p className="mt-4 font-mono text-[11px] text-primary group-hover:underline">See all events →</p>
            </Link>
            <Link href="/blog" className="group block border-b lg:border-b-0 lg:border-r border-border p-6 hover:bg-muted transition-colors">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">blog</p>
              <h3 className="mt-3 font-sans text-[26px] leading-tight text-foreground">Written by members.</h3>
              <p className="mt-3 font-mono text-[12px] leading-5 text-muted-foreground">Technical posts, project writeups, and notes from community events.</p>
              <p className="mt-4 font-mono text-[11px] text-primary group-hover:underline">Read articles →</p>
            </Link>
            <Link href="/projects" className="group block p-6 hover:bg-muted transition-colors">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">projects</p>
              <h3 className="mt-3 font-sans text-[26px] leading-tight text-foreground">Open source, built together.</h3>
              <p className="mt-3 font-mono text-[12px] leading-5 text-muted-foreground">Side projects, tools, and experiments started at meetups and continued in public.</p>
              <p className="mt-4 font-mono text-[11px] text-primary group-hover:underline">See all projects →</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="flex justify-center px-4 sm:px-0 pt-10 pb-10 sm:pt-14 sm:pb-14">
        <div className="w-full max-w-[1063px]">
          <div className="border border-border px-6 py-8 sm:px-10 sm:py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">300+ members · 21+ meetups · open source</p>
              <h3 className="mt-2 font-sans text-[28px] sm:text-[36px] leading-tight text-foreground">{t.home.finalHeading}</h3>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <a href="https://t.me/devpevuz" target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "lg" })}>
                {t.home.joinTelegram}
              </a>
              <Link href="/about#partner" className={buttonVariants({ variant: "outline", size: "lg" })}>
                {t.home.partnerCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
