import StatsBar from "@/components/StatsBar";

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white">
      <section className="flex justify-center px-4 sm:px-0 pt-8">
        <div className="w-full max-w-[1063px]">
          <StatsBar />
          <h1 className="font-sans text-[48px] text-white mb-12">About</h1>

          {/* About content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div id="about" className="border border-[#e7e6e6] rounded-[20px] p-8">
              <h2 className="font-sans text-[36px] text-white mb-4">
                /about us
              </h2>
              <p className="font-mono text-[18px] text-[#c9c9c9] leading-relaxed">
                DevPev is an open-source developer community platform based in
                Uzbekistan. We build projects together, share knowledge, and
                foster the open-source ecosystem.
              </p>
            </div>

            <div id="contributors" className="border border-[#e7e6e6] rounded-[20px] p-8">
              <h2 className="font-sans text-[36px] text-white mb-4">
                /contributors
              </h2>
              <p className="font-mono text-[18px] text-[#c9c9c9] leading-relaxed">
                Our community is built by developers for developers. Join us and
                contribute to our open-source projects.
              </p>
            </div>

            <div id="contact" className="border border-[#e7e6e6] rounded-[20px] p-8">
              <h2 className="font-sans text-[36px] text-white mb-4">
                /contact us
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
                /partner us
              </h2>
              <p className="font-mono text-[18px] text-[#c9c9c9] leading-relaxed">
                Interested in partnering with DevPev? We welcome sponsorships,
                collaborations, and community partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
