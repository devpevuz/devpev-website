"use client";

import StatsBar from "@/components/StatsBar";
import { useLanguage } from "@/lib/language-context";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen text-white">
      <section className="flex justify-center px-4 sm:px-0 pt-8">
        <div className="w-full max-w-[1063px]">
          <StatsBar />
          <h1 className="font-sans text-[48px] text-white mb-12">{t.about.title}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div id="about" className="border border-[#e7e6e6] rounded-[20px] p-8">
              <h2 className="font-sans text-[36px] text-white mb-4">
                {t.about.aboutHeading}
              </h2>
              <p className="font-mono text-[18px] text-[#c9c9c9] leading-relaxed">
                {t.about.aboutText}
              </p>
            </div>

            <div id="contributors" className="border border-[#e7e6e6] rounded-[20px] p-8">
              <h2 className="font-sans text-[36px] text-white mb-4">
                {t.about.contributorsHeading}
              </h2>
              <p className="font-mono text-[18px] text-[#c9c9c9] leading-relaxed">
                {t.about.contributorsText}
              </p>
            </div>

            <div id="contact" className="border border-[#e7e6e6] rounded-[20px] p-8">
              <h2 className="font-sans text-[36px] text-white mb-4">
                {t.about.contactHeading}
              </h2>
              <div className="flex flex-col gap-3">
                <a
                  href="https://t.me/devpevuz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[18px] text-[#c9c9c9] hover:text-white transition-colors"
                >
                  Telegram: @devpevuz
                </a>
                <a
                  href="https://x.com/devpevuz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[18px] text-[#c9c9c9] hover:text-white transition-colors"
                >
                  Twitter: @devpevuz
                </a>
                <a
                  href="https://instagram.com/devpevuz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[18px] text-[#c9c9c9] hover:text-white transition-colors"
                >
                  Instagram: @devpevuz
                </a>
              </div>
            </div>

            <div id="partner" className="border border-[#e7e6e6] rounded-[20px] p-8">
              <h2 className="font-sans text-[36px] text-white mb-4">
                {t.about.partnerHeading}
              </h2>
              <p className="font-mono text-[18px] text-[#c9c9c9] leading-relaxed">
                {t.about.partnerText}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
