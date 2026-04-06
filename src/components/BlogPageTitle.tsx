"use client";

import { useLanguage } from "@/lib/language-context";

export default function BlogPageTitle() {
  const { t } = useLanguage();
  return (
    <h1 className="font-sans text-[48px] text-white mb-8">{t.blog.title}</h1>
  );
}
