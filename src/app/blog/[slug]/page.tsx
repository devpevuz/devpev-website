import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle, getAllArticles } from "@/lib/articles";

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  return (
    <div className="min-h-screen text-white">
      <section className="flex justify-center px-4 sm:px-0 pt-10 pb-20">
        <div className="w-full max-w-[1060px]">
          <Link
            href="/blog"
            className="font-mono text-[13px] text-[#b8b8b8] hover:text-white transition-colors"
          >
            ← back to blog
          </Link>

          <div className="mt-8 rounded-[28px] px-6 py-7 sm:px-8 sm:py-8">
            <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
              <span className="font-mono text-[12px] text-[#b8b8b8]">{article.date}</span>
              <span className="font-mono text-[12px] text-[#b8b8b8]">
                {article.author} · {article.github}
              </span>
              <span className="font-mono text-[12px] text-[#9e9e9e]">
                {article.tags.join(" ")}
              </span>
            </div>
            <h1 className="font-sans text-[40px] sm:text-[52px] leading-tight text-white">
              {article.title}
            </h1>

            <div
              className="mt-8 prose-article"
              dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
