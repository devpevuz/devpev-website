import Link from "next/link";
import { notFound } from "next/navigation";
import { getJob, getAllJobs } from "@/lib/jobs";

export async function generateStaticParams() {
  return getAllJobs().map((j) => ({ slug: j.slug }));
}

export default async function JobPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = await getJob(slug);
  if (!job) notFound();

  return (
    <div className="min-h-screen">
      <section className="flex justify-center px-4 sm:px-0 pt-10 pb-20">
        <div className="w-full max-w-[1060px]">
          <Link
            href="/jobs"
            className="font-mono text-[13px] text-muted-foreground hover:text-foreground transition-colors"
          >
            ← back to jobs
          </Link>

          <div className="mt-8 px-6 py-7 sm:px-8 sm:py-8">
            <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
              <span className="font-mono text-[12px] text-muted-foreground">{job.company}</span>
              <span className="font-mono text-[12px] text-muted-foreground">{job.location}</span>
              <span className="font-mono text-[12px] text-muted-foreground">{job.type}</span>
              <span className="font-mono text-[12px] text-muted-foreground">{job.date}</span>
              <span className="font-mono text-[12px] text-muted-foreground/70">
                {job.tags.map((tag) => `#${tag}`).join(" ")}
              </span>
            </div>

            <h1 className="font-sans text-[40px] sm:text-[52px] leading-tight text-foreground">
              {job.title}
            </h1>

            {job.url && (
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 font-mono text-[13px] text-primary hover:opacity-80 transition-opacity"
              >
                apply →
              </a>
            )}

            <div
              className="mt-8 prose-article"
              dangerouslySetInnerHTML={{ __html: job.contentHtml }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
