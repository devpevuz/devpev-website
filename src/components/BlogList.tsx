"use client";

import { useState } from "react";
import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";
import { useLanguage } from "@/lib/language-context";
import { Input } from "@/components/ui/input";

export default function BlogList({ articles }: { articles: ArticleMeta[] }) {
  const [query, setQuery] = useState("");
  const { t } = useLanguage();

  const filtered = query.trim()
    ? articles.filter((a) => {
        const q = query.toLowerCase();
        return (
          a.title.toLowerCase().includes(q) ||
          a.author.toLowerCase().includes(q) ||
          a.tags.some((tag) => tag.toLowerCase().includes(q))
        );
      })
    : articles;

  return (
    <>
      <div className="mb-6">
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.blog.searchPlaceholder}
          className="h-9 w-full font-mono text-[13px]"
          autoComplete="off"
          spellCheck={false}
        />
      </div>

      <div className="flex flex-col border-t border-border">
        {filtered.length > 0 ? (
          filtered.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="py-4 px-2 border-b border-border hover:bg-muted transition-colors block"
            >
              <p className="font-sans text-[22px] text-foreground mb-1">
                {article.title}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-0.5 mt-1">
                <span className="font-mono text-[11px] text-muted-foreground">
                  {article.date}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {article.author} · @{article.github}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground/60">
                  {article.tags.join(" ")}
                </span>
              </div>
            </Link>
          ))
        ) : (
          <p className="font-mono text-[13px] text-muted-foreground py-4 px-2">
            {t.blog.noResults.replace("{query}", query)}
          </p>
        )}
      </div>
    </>
  );
}
