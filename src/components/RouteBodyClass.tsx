"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RouteBodyClass() {
  const pathname = usePathname();

  useEffect(() => {
    const isBlogArticle = pathname.startsWith("/blog/") && pathname !== "/blog";

    document.body.classList.toggle("reading-mode", isBlogArticle);

    return () => {
      document.body.classList.remove("reading-mode");
    };
  }, [pathname]);

  return null;
}
