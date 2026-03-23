import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-center px-2 sm:px-0 pb-[83px] pt-16">
      <div className="w-full max-w-[1063px] backdrop-blur-[2px] bg-[rgba(255,255,255,0.07)] rounded-[20px] shadow-[0px_6px_8px_0px_rgba(0,0,0,0.15)] px-8 py-10 flex flex-col sm:flex-row items-start justify-between gap-8">
        {/* Left: logo + tagline */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image src="/devpev.svg" alt="DevPev" width={161} height={65} />
          </Link>
          <p className="font-mono text-[24px] text-white">
            by developers for developers
          </p>
        </div>

        {/* Right: link columns */}
        <div className="flex gap-16">
          <div className="flex flex-col gap-5">
            <span className="font-sans text-[20px] text-[#c9c9c9]">Resources</span>
            <div className="flex flex-col gap-[10px]">
              <Link href="/blog" className="font-mono text-[20px] text-[#999] hover:text-[#c9c9c9] transition-colors">
                Blog
              </Link>
              <Link href="/terminal" className="font-mono text-[20px] text-[#999] hover:text-[#c9c9c9] transition-colors">
                Projects
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <span className="font-sans text-[20px] text-[#c9c9c9]">About</span>
            <div className="flex flex-col gap-[10px]">
              <Link href="/about" className="font-mono text-[20px] text-[#999] hover:text-[#c9c9c9] transition-colors">
                About us
              </Link>
              <Link href="/about#contributors" className="font-mono text-[20px] text-[#999] hover:text-[#c9c9c9] transition-colors">
                Contributors
              </Link>
              <Link href="/about#contact" className="font-mono text-[20px] text-[#999] hover:text-[#c9c9c9] transition-colors">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
