export default function Speakers() {
  return (
    <div className="min-h-screen text-white px-4 sm:px-0">
      <div className="max-w-[1063px] mx-auto">
        <div className="text-center mb-12 pt-8">
          <h1 className="font-sans text-[48px] text-white mb-4">Become a Speaker</h1>
          <p className="font-mono text-[18px] text-[#c9c9c9]">
            If you want to give a talk or share your ideas, please fill out this form
          </p>
        </div>

        {/* Direct Link */}
        <div className="mb-8 text-center">
          <a
            href="https://forms.gle/dv5xdWwpSpYNN7Jc8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white/30 rounded-[10px] font-mono text-[18px] text-white hover:bg-white/10 px-6 py-3 transition-colors"
          >
            Open Form in New Tab
          </a>
        </div>

        {/* Embedded Form */}
        <div className="flex justify-center">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScz2zaZITgCW_w0LhpTP4B85dIZTNkmFJIt7FQf901auddyvw/viewform?embedded=true"
            width="640"
            height="1702"
            className="border-0 rounded-lg max-w-full"
            sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
            title="DevPev Speaker Application Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}
