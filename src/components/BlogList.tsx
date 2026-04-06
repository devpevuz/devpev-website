"use client";

import { useState } from "react";
import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";
import { useLanguage } from "@/lib/language-context";

export default function BlogList({ articles }: { articles: ArticleMeta[] }) {
  const [query, setQuery] = useState("");
  const { t } = useLanguage();

  const filtered = query.trim()
    ? articles.filter((a) => {
        const q = query.toLowerCase();
        return (
          a.title.toLowerCase().includes(q) ||
          a.author.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
        );
      })
    : articles;

  return (
    <>
      {/* Search bar */}
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
          placeholder={t.blog.searchPlaceholder}
          className="w-full bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-[14px] pl-10 pr-4 py-3 font-mono text-[14px] text-[#c9c9c9] placeholder:text-[#666] outline-none focus:border-white/20 transition-colors"
          autoComplete="off"
          spellCheck={false}
        />
      </div>

      {/* Article list */}
      <div className="flex flex-col">
        {filtered.length > 0 ? (
          filtered.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="py-4 border-b border-white/10 hover:bg-white/5 px-2 -mx-2 rounded-lg transition-colors block"
            >
              <p className="font-sans text-[24px] text-white mb-1">
                {article.title}
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-0.5">
                <span className="font-mono text-[13px] text-[#888]">
                  {article.date}
                </span>
                <span className="font-mono text-[13px] text-[#888]">
                  {article.author} · @{article.github}
                </span>
                <span className="font-mono text-[13px] text-[#666]">
                  {article.tags.join(" ")}
                </span>
              </div>
            </Link>
          ))
        ) : (
          <p className="font-mono text-[14px] text-[#666] py-4">
            {t.blog.noResults.replace("{query}", query)}
          </p>
        )}
      </div>
    </>
  );
}
