"use client";

import { useState } from "react";
import { type Event, upcomingEvents, pastEvents } from "@/lib/events";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";

function EventCard({ event }: { event: Event }) {
  return (
    <div className="flex items-start gap-6 py-6">
      <div className="w-[151px] shrink-0 text-center pt-2">
        <p className="font-sans text-[24px] text-muted-foreground">{event.date}</p>
        <p className="font-sans text-[18px] text-muted-foreground">{event.day}</p>
      </div>

      <div className="flex flex-col items-center shrink-0 pt-3">
        <div className="w-[8px] h-[8px] bg-primary" />
        <div className="w-px flex-1 bg-border mt-1" />
      </div>

      {event.url ? (
        <a
          href={event.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-card hover:bg-muted border border-border p-6 flex items-center justify-between gap-6 transition-colors"
        >
          <div className="flex flex-col gap-3">
            <p className="font-mono text-[13px] text-muted-foreground">{event.time}</p>
            <p className="font-sans text-[22px] text-foreground">{event.title}</p>
            <p className="font-mono text-[13px] text-muted-foreground">{event.location}</p>
          </div>
          <div className="w-[100px] h-[100px] shrink-0 bg-muted border border-border flex flex-col items-center justify-center gap-1">
            <span className="text-[28px] leading-none">
              {event.title.match(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/u)?.[0] ?? "📅"}
            </span>
            <span className="font-mono text-[13px] text-foreground text-center px-2 leading-tight">
              {event.title.match(/#\d+/)?.[0] ?? "devpev"}
            </span>
          </div>
        </a>
      ) : (
        <div className="flex-1 bg-card border border-border p-6 flex items-center justify-between gap-6">
          <div className="flex flex-col gap-3">
            <p className="font-mono text-[13px] text-muted-foreground">{event.time}</p>
            <p className="font-sans text-[22px] text-foreground">{event.title}</p>
            <p className="font-mono text-[13px] text-muted-foreground">{event.location}</p>
          </div>
          <div className="w-[100px] h-[100px] shrink-0 bg-muted border border-border flex flex-col items-center justify-center gap-1">
            <span className="text-[28px] leading-none">
              {event.title.match(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/u)?.[0] ?? "📅"}
            </span>
            <span className="font-mono text-[13px] text-foreground text-center px-2 leading-tight">
              {event.title.match(/#\d+/)?.[0] ?? "devpev"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function EventsPage() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const events = tab === "upcoming" ? upcomingEvents : pastEvents;
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <section className="flex justify-center px-4 sm:px-0 pt-8">
        <div className="w-full max-w-[1063px]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-sans text-[48px] text-foreground">{t.events.title}</h1>
            </div>

            <div className="flex border border-border shrink-0">
              <Button
                variant={tab === "upcoming" ? "default" : "ghost"}
                size="sm"
                onClick={() => setTab("upcoming")}
                className="font-sans text-[13px] border-r border-border"
              >
                {t.events.upcoming}
              </Button>
              <Button
                variant={tab === "past" ? "default" : "ghost"}
                size="sm"
                onClick={() => setTab("past")}
                className="font-sans text-[13px]"
              >
                {t.events.past}
              </Button>
            </div>
          </div>

          <div className="divide-y divide-border">
            {events.map((event) => (
              <EventCard key={`${event.date}-${event.title}`} event={event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
