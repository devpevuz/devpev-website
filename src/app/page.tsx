import Link from "next/link";
import StatsBar from "@/components/StatsBar";

interface Stat {
  key: string;
  value: string;
}

interface Pathway {
  title: string;
  description: string;
  points: string[];
}

interface Testimonial {
  text: string;
  name: string;
  role: string;
}

const homeStats: Stat[] = [
  { key: "members", value: "300+" },
  { key: "meetups", value: "12+" },
  { key: "projects", value: "8+" },
  { key: "speakers", value: "20+" },
];

const pathways: Pathway[] = [
  {
    title: "/vibe",
    description: "A developer circle that feels approachable from the first meetup.",
    points: ["Meet people building in Uzbekistan", "Stay close to local tech news"],
  },
  {
    title: "/learn",
    description: "Talks, workshops, and shared notes focused on practical skills.",
    points: ["Frontend, backend, AI, and career sessions", "Community write-ups and post-event recaps"],
  },
  {
    title: "/build",
    description: "Turn conversations into open-source projects and real contributions.",
    points: ["Collaborate with contributors", "Ship demos, tools, and experiments together"],
  },
];

const testimonials: Testimonial[] = [
  {
    text: "DevPev feels like the rare community where the meetup conversation actually turns into collaboration the week after.",
    name: "Aziza",
    role: "Frontend engineer",
  },
  {
    text: "The format is straightforward: useful talks, strong people in the room, and enough space to ask beginner questions without friction.",
    name: "Bekzod",
    role: "CS student",
  },
  {
    text: "It gives local developers a place to show work, find collaborators, and stay close to what others are building.",
    name: "Sardor",
    role: "Product engineer",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <section className="flex justify-center px-4 sm:px-0 pt-1 sm:pt-3">
        <div className="w-full max-w-[1063px]">
          <StatsBar stats={homeStats} />

          <div className="grid gap-10 border border-white/10 bg-[rgba(255,255,255,0.04)] rounded-[28px] px-6 py-8 sm:px-10 sm:py-10 lg:grid-cols-[1.2fr_0.8fr] lg:min-h-[calc(100svh-220px)]">
            <div className="flex items-center">
              <div className="w-full">
                <h1 className="max-w-[680px] font-sans text-[40px] leading-[1.02] text-white sm:text-[56px] lg:text-[72px]">
                  Build with your friends.
                </h1>
                <p className="mt-4 max-w-[420px] font-mono text-[13px] leading-6 text-[#c9c9c9] sm:text-[14px]">
                  Meet developers in Uzbekistan, learn in public, and build
                  useful things together.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://t.me/devpevuz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#914848] px-5 py-3 font-sans text-[18px] text-white transition-colors hover:bg-[#a85a5a]"
                  >
                    Join the community
                  </a>
                  <Link
                    href="/events"
                    className="rounded-full border border-white/20 px-5 py-3 font-mono text-[16px] text-[#c9c9c9] transition-colors hover:border-white hover:text-white"
                  >
                    See next meetup
                  </Link>
                </div>
              </div>
            </div>

            <aside className="flex flex-col justify-between rounded-[24px] border border-[#e7e6e6] bg-[rgba(255,255,255,0.06)] p-6 sm:p-8">
              <div>
                <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#c9c9c9]">
                  next event
                </p>
                <h2 className="mt-4 font-sans text-[32px] leading-tight text-white sm:text-[42px]">
                  Claude Skills Meetup April 4
                </h2>
                <div className="mt-6 space-y-2 font-mono text-[14px] text-[#c9c9c9]">
                  <p>April 4, 17:30</p>
                  <p>School 21 Tashkent</p>
                  <p>Agentic skills, live demos, pizza, and networking.</p>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-5">
                <div className="grid gap-3 font-mono text-[12px] text-white sm:grid-cols-2">
                  <p>topic: Claude Code, skills, agents, and tool integrations</p>
                  <p>venue: Ziyolar ko&apos;chasi 13, Tashkent</p>
                </div>
                <a
                  href="https://luma.com/sv5jryj3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-full border border-white/20 px-4 py-3 font-mono text-[14px] text-white transition-colors hover:border-white hover:bg-white/5"
                >
                  Register on Luma
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="flex justify-center px-4 sm:px-0 pt-14 sm:pt-20">
        <div className="w-full max-w-[1063px]">
          <div className="grid gap-8 border-y border-white/10 py-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-[#c9c9c9]">
                why devpev
              </p>
              <h2 className="mt-4 max-w-[420px] font-sans text-[36px] leading-tight text-white sm:text-[48px]">
                A local community with a clear job to do.
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {pathways.map((pathway) => (
                <article key={pathway.title} className="space-y-4">
                  <h3 className="font-sans text-[30px] text-white">
                    {pathway.title}
                  </h3>
                  <p className="font-mono text-[14px] leading-6 text-[#c9c9c9]">
                    {pathway.description}
                  </p>
                  <ul className="space-y-2">
                    {pathway.points.map((point) => (
                      <li
                        key={point}
                        className="font-mono text-[12px] leading-6 text-white"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center px-4 sm:px-0 pt-14 sm:pt-20">
        <div className="w-full max-w-[1063px]">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-[#c9c9c9]">
                what happens here
              </p>
              <h2 className="mt-4 max-w-[380px] font-sans text-[36px] leading-tight text-white sm:text-[48px]">
                Less posturing. More practical momentum.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6">
                <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#c9c9c9]">
                  meetups
                </p>
                <p className="mt-4 font-sans text-[30px] leading-tight text-white">
                  Sessions that help people understand what others are building now.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6">
                <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#c9c9c9]">
                  projects
                </p>
                <p className="mt-4 font-sans text-[30px] leading-tight text-white">
                  Shared experiments, open-source repos, and side projects worth continuing.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6 sm:col-span-2">
                <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#c9c9c9]">
                  community
                </p>
                <p className="mt-4 max-w-[620px] font-sans text-[30px] leading-tight text-white">
                  A place to ask questions, find collaborators, share writing,
                  and stay close to the people pushing local developer culture forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center px-4 sm:px-0 pt-14 pb-16 sm:pt-20 sm:pb-20">
        <div className="w-full max-w-[1063px]">
          <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-[#c9c9c9]">
                community notes
              </p>
              <h2 className="mt-4 font-sans text-[36px] text-white sm:text-[48px]">
                Why people come back.
              </h2>
            </div>
            <Link
              href="/about"
              className="hidden sm:inline-flex font-mono text-[14px] text-[#c9c9c9] transition-colors hover:text-white"
            >
              Learn more about DevPev
            </Link>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-[24px] border border-[#a7a7a7] bg-[rgba(255,255,255,0.04)] p-6"
              >
                <p className="font-mono text-[18px] leading-8 text-white">
                  {testimonial.text}
                </p>
                <div className="mt-8 border-t border-white/10 pt-4">
                  <p className="font-sans text-[24px] text-white">
                    {testimonial.name}
                  </p>
                  <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#c9c9c9]">
                    {testimonial.role}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.04)] px-6 py-8 sm:px-8 sm:py-10">
            <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-[#c9c9c9]">
              final call
            </p>
            <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h3 className="max-w-[620px] font-sans text-[34px] leading-tight text-white sm:text-[44px]">
                  If you want a stronger local developer scene, help build it.
                </h3>
                <p className="mt-4 max-w-[520px] font-mono text-[14px] leading-6 text-[#c9c9c9]">
                  Join the Telegram channel, come to the next meetup, or reach
                  out to partner with the community.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://t.me/devpevuz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#914848] px-5 py-3 font-sans text-[18px] text-white transition-colors hover:bg-[#a85a5a]"
                >
                  Join on Telegram
                </a>
                <Link
                  href="/about#partner"
                  className="rounded-full border border-white/20 px-5 py-3 font-mono text-[14px] text-white transition-colors hover:border-white hover:bg-white/5"
                >
                  Partner with DevPev
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
