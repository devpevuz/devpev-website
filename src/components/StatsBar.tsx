"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";

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
  { href: "https://tirikchilik.uz/devpev_uz", label: "tirikchilik" },
];

const cryptoChains = [
  { chain: "usdt on eth / bnb", address: "0x1234567890abcdef1234567890abcdef12345678" },
  { chain: "usdc on base", address: "0x1234567890abcdef1234567890abcdef12345678" },
  { chain: "usdc on sol", address: "7EcDhSYGxXyscszYEp35KHN8vvw3svAuLKTzXwCFLtV" },
];

export default function StatsBar({ stats = defaultStats }: StatsBarProps) {
  const [openPanel, setOpenPanel] = useState<"stats" | "donate" | null>(null);
  const [showCrypto, setShowCrypto] = useState(false);
  const { t } = useLanguage();

  const togglePanel = (panel: "stats" | "donate") => {
    setOpenPanel((current) => (current === panel ? null : panel));
  };

  return (
    <div>
      <div className="flex border border-border w-fit">
        <Button
          variant={openPanel === "stats" ? "default" : "ghost"}
          size="xs"
          onClick={() => togglePanel("stats")}
          aria-expanded={openPanel === "stats"}
          className="font-mono text-[11px] border-r border-border"
        >
          {t.stats.showStats}
        </Button>
        <Button
          variant={openPanel === "donate" ? "default" : "ghost"}
          size="xs"
          onClick={() => togglePanel("donate")}
          aria-expanded={openPanel === "donate"}
          className="font-mono text-[11px]"
        >
          {t.stats.donate}
        </Button>
      </div>

      {openPanel === "stats" && (
        <div className="mt-0 border border-t-0 border-border bg-muted flex flex-wrap gap-x-6 gap-y-1 px-3 py-2">
          {stats.map((stat) => (
            <span key={stat.key} className="font-mono text-[11px] text-foreground">
              <span className="text-muted-foreground">{stat.key}:</span> {stat.value}
            </span>
          ))}
        </div>
      )}

      {openPanel === "donate" && (
        <div className="mt-0 border border-t-0 border-border bg-muted px-3 py-2 flex flex-wrap items-baseline gap-x-6 gap-y-1">
          {supportLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-foreground hover:text-primary transition-colors inline-flex items-baseline gap-0.5"
            >
              {link.label}<span className="text-[13px] leading-none">↗</span>
            </a>
          ))}
          <button
            onClick={() => setShowCrypto((c) => !c)}
            className="font-mono text-[11px] text-foreground hover:text-primary transition-colors"
          >
            crypto {showCrypto ? "▴" : "▾"}
          </button>
          {showCrypto && cryptoChains.map(({ chain, address }) => (
            <span key={chain} className="font-mono text-[11px] text-foreground inline-flex items-baseline gap-1">
              <span className="text-muted-foreground">{chain}:</span>
              <span>{address.slice(0, 6)}…{address.slice(-4)}</span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
