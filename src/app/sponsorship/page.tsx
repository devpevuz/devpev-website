import Link from "next/link";

const deliverables = [
  {
    phase: "Pre-event",
    items: [
      "1 announcement post (Telegram, Instagram, LinkedIn) — sponsor logo included",
      "1 announcement video (Instagram Reels) — sponsor mention",
    ],
  },
  {
    phase: "At the event",
    items: [
      "Verbal mention at opening — in front of 40+ attendees",
      "Verbal mention at closing — streamed live on YouTube",
      "Logo displayed on event slides",
    ],
  },
  {
    phase: "Post-event",
    items: [
      "1 recap video (Instagram Reels) — sponsor logo + featuring the event",
      "Recap post across all channels",
    ],
  },
];

const audience = [
  { label: "Core audience", value: "Junior & mid-level developers" },
  { label: "Also present", value: "Senior devs, startup builders" },
  { label: "Age range", value: "18–30" },
  { label: "Avg attendees", value: "40+ per meetup" },
  { label: "Turnout rate", value: "~90%" },
  { label: "Cadence", value: "Every 2–3 weeks" },
];

const cities = [
  {
    city: "Tashkent",
    description: "Capital. Larger developer pool. Meetups every 2–3 weeks.",
  },
  {
    city: "Fergana",
    description: "Growing scene. Independent meetups, same format and energy.",
  },
];

export default function SponsorshipPage() {
  return (
    <div className="min-h-screen">
      <section className="flex justify-center px-4 sm:px-0 pt-8 pb-16">
        <div className="w-full max-w-[1063px] flex flex-col gap-px border border-border">

          {/* Hero */}
          <div className="bg-card p-8 sm:p-12">
            <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest mb-4">
              Sponsorship
            </p>
            <h1 className="font-sans text-[32px] sm:text-[52px] text-foreground leading-tight mb-6">
              Put your brand in front of<br />Uzbekistan&apos;s developer community.
            </h1>
            <p className="font-mono text-[14px] text-muted-foreground leading-relaxed max-w-[600px]">
              DevPev runs regular in-person meetups in Tashkent and Fergana. Sponsoring a meetup means real reach — physical presence, social content, and genuine community goodwill.
            </p>
          </div>

          {/* Audience */}
          <div className="bg-card p-8 sm:p-12">
            <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest mb-8">The audience</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {audience.map((a) => (
                <div key={a.label}>
                  <p className="font-mono text-[11px] text-muted-foreground mb-1">{a.label}</p>
                  <p className="font-sans text-[15px] text-foreground">{a.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-4 flex-wrap">
              <a
                href="https://luma.com/devpevuz"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] text-muted-foreground hover:text-foreground transition-colors"
              >
                luma.com/devpevuz — attendance records →
              </a>
              <a
                href="https://instagram.com/devpevuz"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] text-muted-foreground hover:text-foreground transition-colors"
              >
                @devpevuz — recap reels →
              </a>
            </div>
          </div>

          {/* Cities */}
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {cities.map((c, i) => (
              <div
                key={c.city}
                className={`bg-card p-8 sm:p-10 ${i === 0 ? "border-b sm:border-b-0 sm:border-r border-border" : ""}`}
              >
                <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest mb-3">{c.city}</p>
                <p className="font-mono text-[13px] text-muted-foreground leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>

          {/* Deliverables */}
          <div className="bg-card p-8 sm:p-12">
            <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest mb-8">What you get per meetup</p>
            <div className="flex flex-col gap-8">
              {deliverables.map((d) => (
                <div key={d.phase}>
                  <p className="font-mono text-[12px] text-foreground mb-3">{d.phase}</p>
                  <ul className="flex flex-col gap-2">
                    {d.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="font-mono text-[11px] text-primary mt-0.5 shrink-0">→</span>
                        <span className="font-mono text-[13px] text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-card p-8 sm:p-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest mb-3">Get in touch</p>
              <p className="font-mono text-[13px] text-muted-foreground max-w-[480px] leading-relaxed">
                Sponsorship is available per city or both together. Reach out on Telegram or email to discuss the next meetup.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <a
                href="https://t.me/devpevuz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-mono text-[13px] text-foreground border border-border px-6 py-2 hover:bg-muted transition-colors text-center"
              >
                Telegram →
              </a>
              <Link
                href="/about#contact"
                className="inline-block font-mono text-[13px] text-muted-foreground px-6 py-2 hover:text-foreground transition-colors text-center"
              >
                All contacts
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
