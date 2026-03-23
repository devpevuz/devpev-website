"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/terminal", label: "Terminal" },
  { href: "/jobs", label: "Jobs" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 pt-2 sm:pt-[43px] px-2 sm:px-0 flex justify-center">
      <div className="w-full max-w-[1063px] backdrop-blur-[2px] bg-[rgba(255,255,255,0.07)] rounded-[20px] shadow-[0px_6px_8px_0px_rgba(0,0,0,0.15)] px-6 sm:px-8 h-[94px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0 hover:opacity-80 transition-opacity">
          <Image
            src="/devpev.svg"
            alt="DevPev"
            width={123}
            height={49}
            priority
          />
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`px-[10px] py-[10px] font-mono text-[24px] text-[#c9c9c9] transition-colors whitespace-nowrap rounded-[20px] ${
                  isActive ? "bg-[#914848]" : "hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/about#partner"
          className="hidden md:block font-sans text-[24px] text-[#c9c9c9] hover:text-white transition-colors whitespace-nowrap px-[10px] py-[10px]"
        >
          Partner us
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#c9c9c9] hover:text-white transition-colors font-mono text-sm"
          aria-label="Open menu"
        >
          menu
        </button>
      </div>
    </header>
  );
}
