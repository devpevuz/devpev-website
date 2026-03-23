import StatsBar from "@/components/StatsBar";

interface Stat {
  key: string;
  value: string;
}

interface VisionCard {
  id: string;
  label: string;
  subtitle: string | null;
  description: string | null;
}

interface Testimonial {
  text: string;
  handle: string;
}

const stats: Stat[] = [
  { key: "members", value: "324" },
  { key: "articles", value: "324" },
  { key: "events", value: "324" },
  { key: "git_commits", value: "324" },
  { key: "projects", value: "324" },
  { key: "forks", value: "324" },
];

const visionCards: VisionCard[] = [
  {
    id: "vision",
    label: "/vision",
    subtitle: "VIBE\nLEARN\nBUILD",
    description: null,
  },
  {
    id: "vibe",
    label: "/VIBE",
    subtitle: null,
    description: "Lorem imnsud lorems piposn",
  },
  {
    id: "learn",
    label: "/LEARN",
    subtitle: null,
    description: "lorem ipsum lorem ipsom",
  },
  {
    id: "build",
    label: "/BUILD",
    subtitle: null,
    description: "Lorem ipsum lorem impus akjhdfasf",
  },
];

const testimonials: Testimonial[] = [
  { text: "The opinion about the community how great it is and such and such", handle: "@github_user" },
  { text: "The opinion about the community how great it is and such and such", handle: "@github_user" },
  { text: "The opinion about the community how great it is and such and such", handle: "@github_user" },
  { text: "The opinion about the community how great it is and such and such", handle: "@github_user" },
  { text: "The opinion about the community how great it is and such and such", handle: "@github_user" },
  { text: "The opinion about the community how great it is and such and such", handle: "@github_user" },
  { text: "The opinion about the community how great it is and such and such", handle: "@github_user" },
];

const avatarCount1 = 12;
const avatarCount2 = 13;

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      {/* ── Stats bar ── */}
      <section className="flex justify-center px-4 sm:px-0 pt-4 pb-2">
        <div className="w-full max-w-[1063px] flex flex-wrap items-center gap-x-6 gap-y-2">
          <StatsBar />
          <div className="flex flex-wrap gap-x-4 gap-y-1 ml-auto">
            {stats.map(({ key, value }) => (
              <span key={key} className="font-mono text-[12px] text-white">
                {key}: {value}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hero ── */}
      <section className="flex justify-center px-4 sm:px-0 pt-10 pb-6">
        <div className="w-full max-w-[1063px]">
          <h1 className="font-sans text-[48px] leading-tight text-white max-w-[752px]">
            Loyihalarni birga do&apos;stlar bilan quramiz _
          </h1>
          <p className="font-mono text-[12px] text-white mt-4 max-w-[610px]">
            DevPev — we are building the most free community for developers
            fostering open source community
          </p>
        </div>
      </section>

      {/* ── Next event highlight ── */}
      <section className="flex justify-center px-4 sm:px-0 py-6">
        <div className="w-full max-w-[1063px]">
          <div className="border border-[#e7e6e6] rounded-[20px] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-mono text-[18px] text-white">
                Kelayotgan meetupda sizni kutamiz
              </p>
              <p className="font-sans text-[36px] text-[#c9c9c9] mt-1">
                The title of the next meetup
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Avatar rows ── */}
      <section className="overflow-hidden py-6">
        <div className="flex gap-2 px-4 mb-2">
          {Array.from({ length: avatarCount1 }).map((_, i) => (
            <div
              key={i}
              className="shrink-0 w-[89px] h-[89px] rounded-full bg-[rgba(255,255,255,0.12)] border border-[rgba(255,255,255,0.08)]"
            />
          ))}
        </div>
        <div className="flex gap-2 px-8">
          {Array.from({ length: avatarCount2 }).map((_, i) => (
            <div
              key={i}
              className="shrink-0 w-[89px] h-[89px] rounded-full bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.06)]"
            />
          ))}
        </div>
      </section>

      {/* ── Bizning maqsadimiz ── */}
      <section className="flex justify-center px-4 sm:px-0 pt-16 pb-8">
        <div className="w-full max-w-[1063px] text-center">
          <h2 className="font-sans text-[48px] text-white">
            Bizning maqsadimiz
          </h2>
          <p className="font-mono text-[12px] text-white mt-4 max-w-[610px] mx-auto">
            DevPev — we are building the most free community for developers
            fostering open source community
          </p>
        </div>
      </section>

      {/* ── Vision / Vibe / Learn / Build cards — true 2×2 grid ── */}
      <section className="flex justify-center px-4 sm:px-0 pb-16">
        <div className="w-full max-w-[1063px] grid grid-cols-1 sm:grid-cols-2 gap-8">
          {visionCards.map((card) => (
            <div
              key={card.id}
              className="border border-[#e7e6e6] rounded-[20px] p-7 flex flex-col justify-between h-[282px]"
            >
              <p className="font-sans text-[36px] text-white">{card.label}</p>
              {card.subtitle && (
                <p className="font-mono text-[30px] text-white leading-snug whitespace-pre-line">
                  {card.subtitle}
                </p>
              )}
              {card.description && (
                <p className="font-mono text-[24px] text-white">
                  {card.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Jamiyatdan fikrlar ── */}
      <section className="flex justify-center px-4 sm:px-0 pt-8 pb-16">
        <div className="w-full max-w-[1063px]">
          <h2 className="font-sans text-[48px] text-white text-center mb-12">
            Jamiyatdan fikrlar
          </h2>
          <p className="font-mono text-[12px] text-white mb-12 max-w-[610px] mx-auto text-center">
            DevPev — we are building the most free community for developers
            fostering open source community
          </p>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((t, i) => (
              <div
                key={`testimonial-${i}`}
                className="break-inside-avoid border border-[#a7a7a7] rounded-[20px] p-[15px] flex flex-col gap-5"
              >
                <p className="font-mono text-[24px] text-white leading-relaxed">
                  {t.text}
                </p>
                <p className="font-mono text-[24px] text-white">{t.handle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
