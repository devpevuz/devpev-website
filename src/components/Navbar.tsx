"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/language-context";
// import LangSwitcher from "./LangSwitcher";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const { t } = useLanguage();

  const navLinks = [
    { href: "/events", label: t.nav.events },
    { href: "/blog", label: t.nav.blog },
    { href: "/terminal", label: t.nav.terminal },
    { href: "/jobs", label: t.nav.jobs },
    { href: "/about", label: t.nav.about },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      if (currentY < 12) {
        setVisible(true);
      } else if (delta > 6) {
        setVisible(false);
      } else if (delta < -6) {
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      setVisible(true);
    }
  }, [isMenuOpen]);

  const isLinkActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="px-2 sm:px-0 flex justify-center pt-2 sm:pt-[20px]">
        <div className="w-full max-w-[1063px] backdrop-blur-[2px] bg-[rgba(255,255,255,0.07)] rounded-[20px] shadow-[0px_6px_8px_0px_rgba(0,0,0,0.15)] px-5 sm:px-7 py-3.5">
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

            <nav className="hidden md:flex flex-1 items-center justify-center gap-2 px-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`min-w-[88px] rounded-[18px] px-4 py-3 text-center font-sans text-[21px] leading-none text-[#c9c9c9] transition-colors whitespace-nowrap ${
                    isLinkActive(href) ? "bg-[#914848]" : "hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4 shrink-0">
              {/* <LangSwitcher /> */}
              <Link
                href="/about#partner"
                className="rounded-[18px] px-4 py-3 text-center font-sans text-[21px] leading-none text-[#c9c9c9] hover:text-white transition-colors whitespace-nowrap"
              >
                {t.nav.partner}
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              className="md:hidden font-sans text-[16px] text-[#c9c9c9] hover:text-white transition-colors"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              aria-label="Toggle menu"
            >
              {t.nav.menu}
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
                  className={`px-3 py-3 rounded-[14px] font-sans text-[17px] transition-colors ${
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
                className="mt-2 px-3 py-3 rounded-[14px] font-sans text-[17px] text-[#c9c9c9] hover:text-white hover:bg-white/5 transition-colors"
              >
                {t.nav.partner}
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
