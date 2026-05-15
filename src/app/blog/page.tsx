import BlogList from "@/components/BlogList";
import { getAllArticles } from "@/lib/articles";
import BlogPageTitle from "@/components/BlogPageTitle";

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen">
      <section className="flex justify-center px-4 sm:px-0 pt-8">
        <div className="w-full max-w-[1063px]">
          <BlogPageTitle />
          <BlogList articles={articles} />
        </div>
      </section>
    </div>
  );
}
