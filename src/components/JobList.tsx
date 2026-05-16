"use client";

import { useState } from "react";
import Link from "next/link";
import type { JobMeta } from "@/lib/jobs";
import { useLanguage } from "@/lib/language-context";
import { Input } from "@/components/ui/input";

export default function JobList({ jobs }: { jobs: JobMeta[] }) {
  const [query, setQuery] = useState("");
  const { t } = useLanguage();

  const filtered = query.trim()
    ? jobs.filter((j) => {
        const q = query.toLowerCase();
        return (
          j.title.toLowerCase().includes(q) ||
          j.company.toLowerCase().includes(q) ||
          j.location.toLowerCase().includes(q) ||
          j.tags.some((tag) => tag.toLowerCase().includes(q))
        );
      })
    : jobs;

  return (
    <>
      <div className="flex items-center mb-4">
        <h1 className="font-sans text-[28px] sm:text-[40px] text-foreground">{t.jobs.title}</h1>
      </div>

      <div className="mb-6">
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.jobs.searchPlaceholder}
          className="h-9 w-full font-mono text-[13px]"
          autoComplete="off"
          spellCheck={false}
        />
      </div>

      <div className="flex flex-col border-t border-border">
        {filtered.length > 0 ? (
          filtered.map((job) => (
            <Link
              key={job.slug}
              href={`/jobs/${job.slug}`}
              className="py-4 px-2 border-b border-border hover:bg-muted transition-colors block"
            >
              <p className="font-sans text-[18px] sm:text-[22px] text-foreground mb-1">
                {job.title}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-0.5 mt-1">
                <span className="font-mono text-[11px] text-muted-foreground">{job.company}</span>
                <span className="font-mono text-[11px] text-muted-foreground">{job.location}</span>
                <span className="font-mono text-[11px] text-muted-foreground">{job.date}</span>
                <span className="font-mono text-[11px] text-muted-foreground/60">
                  {job.tags.map((tag) => `#${tag}`).join(" ")}
                </span>
              </div>
            </Link>
          ))
        ) : (
          <p className="font-mono text-[13px] text-muted-foreground py-4 px-2">
            {query ? t.jobs.noResults.replace("{query}", query) : t.jobs.noPositions.replace("{tab}", "jobs")}
          </p>
        )}
      </div>
    </>
  );
}
