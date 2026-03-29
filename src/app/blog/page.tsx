import Link from "next/link";
import StatsBar from "@/components/StatsBar";
import { getAllArticles } from "@/lib/articles";

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen text-white">
      <section className="flex justify-center px-4 sm:px-0 pt-8">
        <div className="w-full max-w-[1063px]">
          <StatsBar />
          <h1 className="font-sans text-[48px] text-white mb-8">
            habarlar &amp; bloglar
          </h1>

          <div className="flex flex-col">
            {articles.map((article) => (
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
                    {article.author} · {article.github}
                  </span>
                  <span className="font-mono text-[13px] text-[#666]">
                    {article.tags.join(" ")}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
