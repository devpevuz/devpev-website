import StatsBar from "@/components/StatsBar";

export default function TerminalPage() {
  return (
    <div className="min-h-screen text-white">
      <section className="flex justify-center px-4 sm:px-0 pt-8">
        <div className="w-full max-w-[1063px]">
          <StatsBar />

          {/* Terminal window */}
          <div className="border border-[#e7e6e6] rounded-[20px] overflow-hidden">
            {/* Title bar */}
            <div className="bg-[rgba(255,255,255,0.07)] border-b border-[#e7e6e6] px-6 py-2 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="font-mono text-[13px] text-[#c9c9c9]">devpev</span>
              <div className="w-16" />
            </div>

            {/* Terminal body */}
            <div className="p-6 min-h-[500px] font-mono text-[14px] leading-relaxed">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#28c840]">devpev</span>
                <span className="text-[#c9c9c9]">~</span>
                <span className="text-white">$</span>
                <span className="text-[#c9c9c9] ml-2">welcome</span>
              </div>
              <p className="text-[#c9c9c9] mb-4">
                Welcome to DevPev Terminal — the developer community platform.
              </p>

              <div className="flex flex-col gap-3 text-[#c9c9c9]">
                <div>
                  <span className="text-[#28c840]">$</span>
                  <span className="ml-2">devpev --help</span>
                </div>
                <div className="pl-4 text-[#999] space-y-1">
                  <p>Available commands:</p>
                  <p className="pl-4">
                    <span className="text-white">events</span>
                    {"  "}— Browse upcoming developer events
                  </p>
                  <p className="pl-4">
                    <span className="text-white">blog</span>
                    {"    "}— Read community articles
                  </p>
                  <p className="pl-4">
                    <span className="text-white">jobs</span>
                    {"    "}— Find developer jobs
                  </p>
                  <p className="pl-4">
                    <span className="text-white">about</span>
                    {"   "}— Learn about DevPev
                  </p>
                  <p className="pl-4">
                    <span className="text-white">projects</span>
                    {" "}— Explore open-source projects
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-[#c9c9c9]">
                <span className="text-[#28c840]">$</span>
                <span className="ml-2 animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
