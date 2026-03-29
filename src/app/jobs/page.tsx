"use client";

import { useState } from "react";
import StatsBar from "@/components/StatsBar";
import { positions, freelanceJobs, type Job } from "@/lib/jobs";

function JobRow({ job }: { job: Job }) {
  const row = (
    <div className="py-4 border-b border-white/10 hover:bg-white/5 px-2 -mx-2 rounded-lg transition-colors">
      <p className="font-sans text-[24px] text-white mb-1">{job.title}</p>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-0.5">
        <span className="font-mono text-[13px] text-[#888]">{job.company}</span>
        <span className="font-mono text-[13px] text-[#888]">{job.location}</span>
        <span className="font-mono text-[13px] text-[#888]">{job.type}</span>
        <span className="font-mono text-[13px] text-[#666]">
          {job.tags.map((t) => `#${t}`).join(" ")}
        </span>
      </div>
    </div>
  );

  if (job.url) {
    return (
      <a href={job.url} target="_blank" rel="noopener noreferrer" className="block">
        {row}
      </a>
    );
  }

  return <div className="cursor-default">{row}</div>;
}

export default function JobsPage() {
  const [tab, setTab] = useState<"positions" | "freelance">("positions");
  const jobs = tab === "positions" ? positions : freelanceJobs;

  return (
    <div className="min-h-screen text-white">
      <section className="flex justify-center px-4 sm:px-0 pt-8">
        <div className="w-full max-w-[1063px]">
          <div className="flex items-start justify-between mb-8">
            <div>
              <StatsBar />
              <h1 className="font-sans text-[48px] text-white">Jobs</h1>
            </div>

            <div className="flex items-center border border-white rounded-[10px] shrink-0 mt-8">
              <button
                type="button"
                onClick={() => setTab("positions")}
                className={`px-5 py-5 font-sans text-[24px] transition-colors rounded-[9px] ${
                  tab === "positions"
                    ? "border border-white text-white"
                    : "border border-transparent text-[#a7a7a7] hover:text-white"
                }`}
              >
                Positions
              </button>
              <button
                type="button"
                onClick={() => setTab("freelance")}
                className={`px-5 py-5 font-sans text-[24px] transition-colors rounded-[9px] ${
                  tab === "freelance"
                    ? "border border-white text-white"
                    : "border border-transparent text-[#a7a7a7] hover:text-white"
                }`}
              >
                Freelance
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            {jobs.map((job) => (
              <JobRow key={job.id} job={job} />
            ))}
            {jobs.length === 0 && (
              <p className="font-mono text-[13px] text-[#888] py-8 text-center">
                No {tab} positions available right now.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
