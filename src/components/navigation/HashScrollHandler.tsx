"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Handles smooth scrolling to section hashes when navigating between pages
 * (e.g. from /gallery to /#about, /#services, /#contact, /#booking).
 */
export default function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const targetId = hash.replace("#", "");
      // Allow slight delay for page content to mount
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, [pathname]);

  return null;
}
