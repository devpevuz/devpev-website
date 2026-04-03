"use client";

import { useState } from "react";
import type { JobMeta } from "@/lib/jobs";

const TABS = ["full-time", "freelance"] as const;
type Tab = (typeof TABS)[number];

export default function JobList({ jobs }: { jobs: JobMeta[] }) {
  const [tab, setTab] = useState<Tab>("full-time");
  const [query, setQuery] = useState("");

  const byType = jobs.filter((j) => j.type === tab);

  const filtered = query.trim()
    ? byType.filter((j) => {
        const q = query.toLowerCase();
        return (
          j.title.toLowerCase().includes(q) ||
          j.company.toLowerCase().includes(q) ||
          j.location.toLowerCase().includes(q) ||
          j.tags.some((t) => t.toLowerCase().includes(q))
        );
      })
    : byType;

  return (
    <>
      {/* Title + tab switcher on the same row */}
      <div className="flex items-start justify-between mb-6">
        <h1 className="font-sans text-[48px] text-white">Jobs</h1>
        <div className="flex items-center border border-white rounded-[10px] shrink-0 mt-2">
          <button
            type="button"
            onClick={() => setTab("full-time")}
            className={`px-5 py-3 font-sans text-[24px] transition-colors rounded-[9px] ${
              tab === "full-time"
                ? "border border-white text-white"
                : "border border-transparent text-[#a7a7a7] hover:text-white"
            }`}
          >
            Positions
          </button>
          <button
            type="button"
            onClick={() => setTab("freelance")}
            className={`px-5 py-3 font-sans text-[24px] transition-colors rounded-[9px] ${
              tab === "freelance"
                ? "border border-white text-white"
                : "border border-transparent text-[#a7a7a7] hover:text-white"
            }`}
          >
            Freelance
          </button>
        </div>
      </div>

      {/* Search on its own row */}
      <div className="relative mb-8">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666]"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search jobs..."
          className="w-full bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-[14px] pl-10 pr-4 py-3 font-mono text-[14px] text-[#c9c9c9] placeholder:text-[#666] outline-none focus:border-white/20 transition-colors"
          autoComplete="off"
          spellCheck={false}
        />
      </div>

      {/* Job list */}
      <div className="flex flex-col">
        {filtered.length > 0 ? (
          filtered.map((job) => {
            const row = (
              <div className="py-4 border-b border-white/10 hover:bg-white/5 px-2 -mx-2 rounded-lg transition-colors">
                <p className="font-sans text-[24px] text-white mb-1">
                  {job.title}
                </p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-0.5">
                  <span className="font-mono text-[13px] text-[#888]">
                    {job.company}
                  </span>
                  <span className="font-mono text-[13px] text-[#888]">
                    {job.location}
                  </span>
                  <span className="font-mono text-[13px] text-[#888]">
                    {job.date}
                  </span>
                  <span className="font-mono text-[13px] text-[#666]">
                    {job.tags.map((t) => `#${t}`).join(" ")}
                  </span>
                </div>
              </div>
            );

            return job.url ? (
              <a
                key={job.slug}
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {row}
              </a>
            ) : (
              <div key={job.slug}>{row}</div>
            );
          })
        ) : (
          <p className="font-mono text-[14px] text-[#666] py-4">
            {query
              ? `no jobs found for "${query}"`
              : `no ${tab} positions available right now.`}
          </p>
        )}
      </div>
    </>
  );
}
