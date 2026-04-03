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
    <div className="min-h-screen text-white">
      <section className="flex justify-center px-4 sm:px-0 pt-10 pb-20">
        <div className="w-full max-w-[1060px]">
          <Link
            href="/jobs"
            className="font-mono text-[13px] text-[#b8b8b8] hover:text-white transition-colors"
          >
            ← back to jobs
          </Link>

          <div className="mt-8 rounded-[28px] px-6 py-7 sm:px-8 sm:py-8">
            <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
              <span className="font-mono text-[12px] text-[#b8b8b8]">{job.company}</span>
              <span className="font-mono text-[12px] text-[#b8b8b8]">{job.location}</span>
              <span className="font-mono text-[12px] text-[#b8b8b8]">{job.type}</span>
              <span className="font-mono text-[12px] text-[#b8b8b8]">{job.date}</span>
              <span className="font-mono text-[12px] text-[#9e9e9e]">
                {job.tags.map((t) => `#${t}`).join(" ")}
              </span>
            </div>

            <h1 className="font-sans text-[40px] sm:text-[52px] leading-tight text-white">
              {job.title}
            </h1>

            {job.url && (
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 font-mono text-[13px] text-[#914848] hover:text-[#a85a5a] transition-colors"
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
