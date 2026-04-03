import StatsBar from "@/components/StatsBar";
import JobList from "@/components/JobList";
import { getAllJobs } from "@/lib/jobs";

export default function JobsPage() {
  const jobs = getAllJobs();

  return (
    <div className="min-h-screen text-white">
      <section className="flex justify-center px-4 sm:px-0 pt-8">
        <div className="w-full max-w-[1063px]">
          <StatsBar />
          <JobList jobs={jobs} />
        </div>
      </section>
    </div>
  );
}
