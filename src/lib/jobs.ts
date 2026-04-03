import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const JOBS_DIR = path.join(process.cwd(), "jobs");

export interface JobMeta {
  slug: string;
  title: string;
  company: string;
  location: string;
  type: string;
  tags: string[];
  url?: string;
  date: string;
}

export interface Job extends JobMeta {
  contentHtml: string;
}

export function getAllJobs(): JobMeta[] {
  const files = fs.readdirSync(JOBS_DIR).filter((f) => f.endsWith(".md"));

  const jobs = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(JOBS_DIR, filename), "utf8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title ?? slug,
      company: data.company ?? "",
      location: data.location ?? "",
      type: data.type ?? "full-time",
      tags: data.tags ?? [],
      url: data.url,
      date: data.date ?? "",
    } satisfies JobMeta;
  });

  return jobs.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getJob(slug: string): Promise<Job | null> {
  const filePath = path.join(JOBS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark().use(remarkHtml).process(content);

  return {
    slug,
    title: data.title ?? slug,
    company: data.company ?? "",
    location: data.location ?? "",
    type: data.type ?? "full-time",
    tags: data.tags ?? [],
    url: data.url,
    date: data.date ?? "",
    contentHtml: processed.toString(),
  };
}
