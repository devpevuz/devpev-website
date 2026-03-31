import StatsBar from "@/components/StatsBar";
import BlogList from "@/components/BlogList";
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
          <BlogList articles={articles} />
        </div>
      </section>
    </div>
  );
}
