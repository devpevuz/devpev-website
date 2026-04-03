import StatsBar from "@/components/StatsBar";
import Terminal from "@/components/Terminal";
import { getAllArticles } from "@/lib/articles";
import { upcomingEvents, pastEvents } from "@/lib/events";

export default function TerminalPage() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen text-white">
      <section className="flex justify-center px-4 sm:px-0 pt-8">
        <div className="w-full max-w-[1063px]">
          <StatsBar />
          <Terminal
            articles={articles}
            upcomingEvents={upcomingEvents}
            pastEvents={pastEvents}
          />
        </div>
      </section>
    </div>
  );
}
