import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const ARTICLES_DIR = path.join(process.cwd(), "articles");

export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  author: string;
  github: string;
  tags: string[];
}

export interface Article extends ArticleMeta {
  contentHtml: string;
}

export function getAllArticles(): ArticleMeta[] {
  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".md"));

  const articles = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, filename), "utf8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      author: data.author ?? "",
      github: data.github ?? "",
      tags: data.tags ?? [],
    } satisfies ArticleMeta;
  });

  return articles.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getArticle(slug: string): Promise<Article | null> {
  const filePath = path.join(ARTICLES_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark().use(remarkHtml).process(content);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    author: data.author ?? "",
    github: data.github ?? "",
    tags: data.tags ?? [],
    contentHtml: processed.toString(),
  };
}
