"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastScrollY.current || currentY < 10);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLinkActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="px-2 sm:px-0 flex justify-center pt-2 sm:pt-[20px]">
        <div className="w-full max-w-[1063px] backdrop-blur-[2px] bg-[rgba(255,255,255,0.07)] rounded-[20px] shadow-[0px_6px_8px_0px_rgba(0,0,0,0.15)] px-6 sm:px-8 py-3.5">
          <div className="flex items-center justify-between min-h-[54px]">
          <Link href="/" className="shrink-0 hover:opacity-80 transition-opacity">
            <Image
              src="/devpev.svg"
              alt="DevPev"
              width={123}
              height={49}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-[10px] py-[10px] font-mono text-[24px] text-[#c9c9c9] transition-colors whitespace-nowrap rounded-[20px] ${
                  isLinkActive(href) ? "bg-[#914848]" : "hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link
            href="/about#partner"
            className="hidden md:block font-sans text-[24px] text-[#c9c9c9] hover:text-white transition-colors whitespace-nowrap px-[10px] py-[10px]"
          >
            Partner us
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="md:hidden text-[#c9c9c9] hover:text-white transition-colors font-mono text-sm"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
          >
            menu
          </button>
          </div>

          {isMenuOpen && (
            <div
              id="mobile-nav"
              className="md:hidden mt-4 border-t border-white/10 pt-4 flex flex-col gap-2"
            >
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-3 rounded-[14px] font-mono text-[18px] transition-colors ${
                    isLinkActive(href)
                      ? "bg-[#914848] text-white"
                      : "text-[#c9c9c9] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/about#partner"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 px-3 py-3 rounded-[14px] font-sans text-[18px] text-[#c9c9c9] hover:text-white hover:bg-white/5 transition-colors"
              >
                Partner us
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
