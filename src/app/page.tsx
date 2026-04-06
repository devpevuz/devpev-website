import { upcomingEvents } from "@/lib/events";
import { getAllArticles } from "@/lib/articles";
import HomeHero from "@/components/HomeHero";

export default function Home() {
  const nextEvent = upcomingEvents[0] ?? null;
  const latestArticle = nextEvent ? null : (getAllArticles()[0] ?? null);

  return <HomeHero nextEvent={nextEvent} latestArticle={latestArticle} />;
}
