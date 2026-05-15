"use client";

import { useState } from "react";
import Link from "next/link";
import type { JobMeta } from "@/lib/jobs";
import { useLanguage } from "@/lib/language-context";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const TABS = ["full-time", "freelance"] as const;
type Tab = (typeof TABS)[number];

export default function JobList({ jobs }: { jobs: JobMeta[] }) {
  const [tab, setTab] = useState<Tab>("full-time");
  const [query, setQuery] = useState("");
  const { t } = useLanguage();

  const byType = jobs.filter((j) => j.type === tab);

  const filtered = query.trim()
    ? byType.filter((j) => {
        const q = query.toLowerCase();
        return (
          j.title.toLowerCase().includes(q) ||
          j.company.toLowerCase().includes(q) ||
          j.location.toLowerCase().includes(q) ||
          j.tags.some((tag) => tag.toLowerCase().includes(q))
        );
      })
    : byType;

  return (
    <>
      <div className="flex items-start justify-between mb-4">
        <h1 className="font-sans text-[40px] text-foreground">{t.jobs.title}</h1>
        <div className="flex border border-border mt-2">
          <Button
            variant={tab === "full-time" ? "default" : "ghost"}
            size="sm"
            onClick={() => setTab("full-time")}
            className="font-sans text-[13px] border-r border-border"
          >
            {t.jobs.positions}
          </Button>
          <Button
            variant={tab === "freelance" ? "default" : "ghost"}
            size="sm"
            onClick={() => setTab("freelance")}
            className="font-sans text-[13px]"
          >
            {t.jobs.freelance}
          </Button>
        </div>
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
              <p className="font-sans text-[22px] text-foreground mb-1">
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
            {query
              ? t.jobs.noResults.replace("{query}", query)
              : t.jobs.noPositions.replace("{tab}", tab)}
          </p>
        )}
      </div>
    </>
  );
}
