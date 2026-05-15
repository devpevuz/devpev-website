"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/language-context";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import StatsBar from "./StatsBar";

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
      if (currentY < 12) setVisible(true);
      else if (delta > 6) setVisible(false);
      else if (delta < -6) setVisible(true);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) setVisible(true);
  }, [isMenuOpen]);

  const isLinkActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-center px-3 pt-3">
        <div className="w-full max-w-[1063px] border border-border bg-background/90 backdrop-blur-md">
          <div className="flex items-center justify-between px-4 py-2.5 min-h-[52px]">
            {/* Logo */}
            <Link href="/" className="shrink-0 hover:opacity-80 transition-opacity">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/devpev.svg" alt="DevPev" width={100} height={40} className="logo-svg" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-0">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`px-3 py-2 font-sans text-[15px] leading-none transition-colors whitespace-nowrap border-r border-border last:border-r-0 ${
                    isLinkActive(href)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="hidden md:flex items-center gap-0 border-l border-border">
              <Link
                href="/about#partner"
                className="px-3 py-2 font-sans text-[15px] leading-none text-muted-foreground hover:text-foreground hover:bg-muted transition-colors whitespace-nowrap border-r border-border"
              >
                {t.nav.partner}
              </Link>
              <div className="px-2 flex items-center">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen((c) => !c)}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-nav"
                aria-label="Toggle menu"
                className="font-sans text-[14px]"
              >
                {t.nav.menu}
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div
              id="mobile-nav"
              className="md:hidden border-t border-border flex flex-col"
            >
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 font-sans text-[15px] border-b border-border last:border-b-0 transition-colors ${
                    isLinkActive(href)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/about#partner"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 font-sans text-[15px] text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {t.nav.partner}
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center px-3 pt-1">
        <div className="w-full max-w-[1063px]">
          <StatsBar />
        </div>
      </div>
    </header>
  );
}
