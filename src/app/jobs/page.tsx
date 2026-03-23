"use client";

import { useState } from "react";
import StatsBar from "@/components/StatsBar";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  tags: string[];
}

const positions: Job[] = [
  {
    id: "frontend-techcorp",
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Tashkent, Uzbekistan",
    type: "Full-time",
    tags: ["React", "TypeScript", "Next.js"],
  },
  {
    id: "backend-startupxyz",
    title: "Backend Developer",
    company: "StartupXYZ",
    location: "Remote",
    type: "Full-time",
    tags: ["Node.js", "PostgreSQL"],
  },
  {
    id: "devops-enterprise",
    title: "DevOps Engineer",
    company: "Enterprise Inc",
    location: "Tashkent, Uzbekistan",
    type: "Part-time",
    tags: ["Docker", "Kubernetes", "AWS"],
  },
];

const freelanceJobs: Job[] = [
  {
    id: "react-client",
    title: "React Developer",
    company: "Client Project",
    location: "Remote",
    type: "Freelance",
    tags: ["React", "JavaScript"],
  },
  {
    id: "ui-design-agency",
    title: "UI Designer",
    company: "Design Agency",
    location: "Remote",
    type: "Freelance",
    tags: ["Figma", "Tailwind"],
  },
];

function JobCard({ job }: { job: Job }) {
  return (
    <div className="py-5 border-b border-white/10 hover:bg-white/5 px-2 -mx-2 rounded-lg transition-colors cursor-pointer">
      <p className="font-sans text-[24px] text-[#c9c9c9] mb-2">{job.title}</p>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
        <span className="font-mono text-[18px] text-white">{job.company}</span>
        <span className="font-mono text-[18px] text-white">{job.location}</span>
        <span className="font-mono text-[18px] text-white">{job.type}</span>
        <span className="font-mono text-[18px] text-[#999]">
          {job.tags.map((t) => `#${t.toLowerCase()}`).join(" ")}
        </span>
      </div>
    </div>
  );
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

            {/* Tab switcher */}
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

          <div>
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
            {jobs.length === 0 && (
              <p className="font-mono text-[18px] text-[#999] py-8 text-center">
                No {tab} positions available right now.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
