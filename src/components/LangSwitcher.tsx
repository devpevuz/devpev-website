"use client";

import { useLanguage } from "@/lib/language-context";
import type { Locale } from "@/lib/i18n";

const LOCALES: { value: Locale; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "uz", label: "UZ" },
];

export default function LangSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1 font-mono text-[13px]">
      {LOCALES.map(({ value, label }, i) => (
        <span key={value} className="flex items-center gap-1">
          {i > 0 && <span className="text-white/30">/</span>}
          <button
            type="button"
            onClick={() => setLocale(value)}
            className={`transition-colors ${
              locale === value
                ? "text-white"
                : "text-[#666] hover:text-[#c9c9c9]"
            }`}
          >
            {label}
          </button>
        </span>
      ))}
    </div>
  );
}
