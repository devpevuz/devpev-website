"use client";

import { useState } from "react";
import StatsBar from "@/components/StatsBar";

interface Event {
  date: string;
  day: string;
  time: string;
  title: string;
  location: string;
}

const upcomingEvents: Event[] = [
  {
    date: "7-Dec",
    day: "Sunday",
    time: "15:00 , 7-dec",
    title: "The title of the event",
    location: "Location",
  },
  {
    date: "14-Dec",
    day: "Saturday",
    time: "14:00 , 14-dec",
    title: "Another upcoming event",
    location: "Tashkent, Uzbekistan",
  },
];

const pastEvents: Event[] = [
  {
    date: "15-Nov",
    day: "Friday",
    time: "18:00 , 15-nov",
    title: "DevPev Meetup #3",
    location: "Tashkent, Uzbekistan",
  },
  {
    date: "12-Oct",
    day: "Saturday",
    time: "15:00 , 12-oct",
    title: "Open Source Workshop",
    location: "Online",
  },
];

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
      <div className="flex-1 bg-[rgba(255,255,255,0.07)] rounded-[20px] p-7 flex items-center justify-between gap-6">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-[18px] text-white">{event.time}</p>
          <p className="font-sans text-[24px] text-white">{event.title}</p>
          <p className="font-mono text-[18px] text-white">{event.location}</p>
        </div>
        <div className="w-[150px] h-[150px] shrink-0 rounded-xl bg-[#d9d9d9]" />
      </div>
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
