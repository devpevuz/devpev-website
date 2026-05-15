"use client";

import { useLanguage } from "@/lib/language-context";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <section className="flex justify-center px-4 sm:px-0 pt-8">
        <div className="w-full max-w-[1063px]">
          <h1 className="font-sans text-[48px] text-foreground mb-12">{t.about.title}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div id="about" className="border border-border p-8 bg-card">
              <h2 className="font-sans text-[36px] text-foreground mb-4">
                {t.about.aboutHeading}
              </h2>
              <p className="font-mono text-[18px] text-muted-foreground leading-relaxed">
                {t.about.aboutText}
              </p>
            </div>

            <div id="contributors" className="border border-border p-8 bg-card">
              <h2 className="font-sans text-[36px] text-foreground mb-4">
                {t.about.contributorsHeading}
              </h2>
              <p className="font-mono text-[18px] text-muted-foreground leading-relaxed">
                {t.about.contributorsText}
              </p>
            </div>

            <div id="contact" className="border border-border p-8 bg-card">
              <h2 className="font-sans text-[36px] text-foreground mb-4">
                {t.about.contactHeading}
              </h2>
              <div className="flex flex-col gap-3">
                <a
                  href="https://t.me/devpevuz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[18px] text-muted-foreground hover:text-foreground transition-colors"
                >
                  Telegram: @devpevuz
                </a>
                <a
                  href="https://x.com/devpevuz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[18px] text-muted-foreground hover:text-foreground transition-colors"
                >
                  Twitter: @devpevuz
                </a>
                <a
                  href="https://instagram.com/devpevuz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[18px] text-muted-foreground hover:text-foreground transition-colors"
                >
                  Instagram: @devpevuz
                </a>
              </div>
            </div>

            <div id="partner" className="border border-border p-8 bg-card">
              <h2 className="font-sans text-[36px] text-foreground mb-4">
                {t.about.partnerHeading}
              </h2>
              <p className="font-mono text-[18px] text-muted-foreground leading-relaxed">
                {t.about.partnerText}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
