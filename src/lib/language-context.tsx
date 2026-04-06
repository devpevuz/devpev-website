"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { translations, type Locale } from "./i18n";

type T = typeof translations.en;

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: T;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const t = translations[locale] as T;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
