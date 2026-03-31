"use client";

import { useState } from "react";
import StatsBar from "@/components/StatsBar";
import { type Event, upcomingEvents, pastEvents } from "@/lib/events";

function EventCard({ event }: { event: Event }) {
  return (
    <div className="flex items-start gap-6 py-6">
      {/* Date column */}
      <div className="w-[151px] shrink-0 text-center pt-2">
        <p className="font-sans text-[24px] text-[#c9c9c9]">{event.date}</p>
        <p className="font-sans text-[18px] text-[#c9c9c9]">{event.day}</p>
      </div>

      {/* Vertical line + dot */}
      <div className="flex flex-col items-center shrink-0 pt-3">
        <div className="w-[10px] h-[10px] rounded-full bg-white" />
        <div className="w-px flex-1 bg-white/30 mt-1" />
      </div>

      {/* Event card */}
      {event.url ? (
        <a
          href={event.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[rgba(255,255,255,0.07)] hover:bg-[rgba(255,255,255,0.11)] rounded-[20px] p-7 flex items-center justify-between gap-6 transition-colors"
        >
          <div className="flex flex-col gap-4">
            <p className="font-mono text-[18px] text-white">{event.time}</p>
            <p className="font-sans text-[24px] text-white">{event.title}</p>
            <p className="font-mono text-[18px] text-white">{event.location}</p>
          </div>
          <div className="w-[150px] h-[150px] shrink-0 rounded-xl bg-[rgba(255,255,255,0.06)] border border-white/10 flex flex-col items-center justify-center gap-1">
            <span className="text-[32px] leading-none">
              {event.title.match(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/u)?.[0] ?? "📅"}
            </span>
            <span className="font-mono text-[20px] text-white text-center px-2 leading-tight">
              {event.title.match(/#\d+/)?.[0] ?? "devpev"}
            </span>
          </div>
        </a>
      ) : (
        <div className="flex-1 bg-[rgba(255,255,255,0.07)] rounded-[20px] p-7 flex items-center justify-between gap-6">
          <div className="flex flex-col gap-4">
            <p className="font-mono text-[18px] text-white">{event.time}</p>
            <p className="font-sans text-[24px] text-white">{event.title}</p>
            <p className="font-mono text-[18px] text-white">{event.location}</p>
          </div>
          <div className="w-[150px] h-[150px] shrink-0 rounded-xl bg-[rgba(255,255,255,0.06)] border border-white/10 flex flex-col items-center justify-center gap-1">
            <span className="text-[32px] leading-none">
              {event.title.match(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/u)?.[0] ?? "📅"}
            </span>
            <span className="font-mono text-[20px] text-white text-center px-2 leading-tight">
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

  return (
    <div className="min-h-screen text-white">
      <section className="flex justify-center px-4 sm:px-0 pt-8">
        <div className="w-full max-w-[1063px]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <StatsBar />
              <h1 className="font-sans text-[48px] text-white">Events</h1>
            </div>

            {/* Tab switcher */}
            <div className="flex items-center border border-white rounded-[10px] shrink-0">
              <button
                type="button"
                onClick={() => setTab("upcoming")}
                className={`px-5 py-5 font-sans text-[24px] transition-colors rounded-[9px] ${
                  tab === "upcoming"
                    ? "border border-white text-white"
                    : "border border-transparent text-[#a7a7a7] hover:text-white"
                }`}
              >
                Upcoming
              </button>
              <button
                type="button"
                onClick={() => setTab("past")}
                className={`px-5 py-5 font-sans text-[24px] transition-colors rounded-[9px] ${
                  tab === "past"
                    ? "border border-white text-white"
                    : "border border-transparent text-[#a7a7a7] hover:text-white"
                }`}
              >
                Past
              </button>
            </div>
          </div>

          <div className="divide-y divide-white/10">
            {events.map((event) => (
              <EventCard key={`${event.date}-${event.title}`} event={event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
