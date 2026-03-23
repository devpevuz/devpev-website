import Link from "next/link";
import StatsBar from "@/components/StatsBar";

interface Article {
  slug: string;
  date: string;
  author: string;
  tags: string[];
  title: string;
}

const articles: Article[] = [
  {
    slug: "article-title-long",
    date: "12-nov, 2025",
    author: "authorName, @github",
    tags: ["#tag1", "#tag2", "#tag3"],
    title: "The title of the article , lets say it is gonna be long",
  },
  {
    slug: "article-title-even-longer",
    date: "12-nov, 2025",
    author: "authorName, @github",
    tags: ["#tag1", "#tag2", "#tag3"],
    title: "The title of the article , lets say it is gonna be long, maybe even longer",
  },
  {
    slug: "article-title-long-2",
    date: "12-nov, 2025",
    author: "authorName, @github",
    tags: ["#tag1", "#tag2", "#tag3"],
    title: "The title of the article , lets say it is gonna be long",
  },
  {
    slug: "article-title",
    date: "12-nov, 2025",
    author: "authorName, @github",
    tags: ["#tag1", "#tag2", "#tag3"],
    title: "The title of the article",
  },
  {
    slug: "article-title-another-long",
    date: "12-nov, 2025",
    author: "authorName, @github",
    tags: ["#tag1", "#tag2", "#tag3"],
    title: "The title of the article , lets say it is gonna be long, another long",
  },
];

export default function BlogPage() {
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
                <p className="font-sans text-[24px] text-[#c9c9c9] mb-2">
                  {article.title}
                </p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-1">
                  <span className="font-mono text-[18px] text-white">
                    {article.date}
                  </span>
                  <span className="font-mono text-[18px] text-white">
                    {article.author}
                  </span>
                  <span className="font-mono text-[18px] text-white">
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
