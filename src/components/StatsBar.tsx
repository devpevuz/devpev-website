"use client";

import { useState } from "react";

interface StatItem {
  key: string;
  value: string;
}

interface StatsBarProps {
  stats?: StatItem[];
}

const defaultStats: StatItem[] = [
  { key: "community", value: "open" },
  { key: "meetups", value: "monthly" },
  { key: "projects", value: "active" },
  { key: "language", value: "uz / en" },
];

const supportLinks = [
  { href: "https://t.me/devpevuz", label: "telegram" },
  { href: "https://x.com/devpevuz", label: "x / twitter" },
  { href: "https://instagram.com/devpevuz", label: "instagram" },
];

export default function StatsBar({ stats = defaultStats }: StatsBarProps) {
  const [openPanel, setOpenPanel] = useState<"stats" | "donate" | null>(null);

  const togglePanel = (panel: "stats" | "donate") => {
    setOpenPanel((current) => (current === panel ? null : panel));
  };

  return (
    <div className="pt-1 pb-2 sm:pt-1 sm:pb-3">
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        <button
          type="button"
          onClick={() => togglePanel("stats")}
          aria-expanded={openPanel === "stats"}
          className={`font-mono text-[12px] text-white pb-0.5 transition-opacity hover:opacity-70 ${
            openPanel === "stats" ? "border-b border-white" : "border-b border-transparent"
          }`}
        >
          show stats
        </button>
        <button
          type="button"
          onClick={() => togglePanel("donate")}
          aria-expanded={openPanel === "donate"}
          className={`font-mono text-[12px] text-white pb-0.5 transition-opacity hover:opacity-70 ${
            openPanel === "donate" ? "border-b border-white" : "border-b border-transparent"
          }`}
        >
          donate$
        </button>
      </div>

      {openPanel === "stats" && (
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 rounded-[14px] border border-white/15 bg-[rgba(255,255,255,0.05)] px-4 py-3">
          {stats.map((stat) => (
            <span key={stat.key} className="font-mono text-[12px] text-white">
              {stat.key}: {stat.value}
            </span>
          ))}
        </div>
      )}

      {openPanel === "donate" && (
        <div className="mt-3 rounded-[14px] border border-white/15 bg-[rgba(255,255,255,0.05)] px-4 py-3">
          <p className="font-mono text-[12px] text-white">
            support address: @devpevuz
          </p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
            {supportLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] text-[#c9c9c9] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
