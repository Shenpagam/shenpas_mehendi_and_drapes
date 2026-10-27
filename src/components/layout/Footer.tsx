"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

interface FooterLinkItem {
  name: string;
  hash: string | null;
  pageHref: string;
}

const footerLinks: FooterLinkItem[] = [
  { name: "Home", hash: "#hero", pageHref: "/" },
  { name: "About", hash: "#about", pageHref: "/#about" },
  { name: "Services", hash: "#services", pageHref: "/#services" },
  { name: "Gallery", hash: null, pageHref: "/gallery" },
  { name: "FAQ", hash: "#faq", pageHref: "/#faq" },
  { name: "Contact", hash: "#contact", pageHref: "/#contact" },
];

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "";

  const getFooterLinkHref = (item: FooterLinkItem) => {
    if (item.name === "Gallery") return "/gallery";
    if (isHomePage && item.hash) return item.hash;
    return item.pageHref;
  };
  return (
    <footer
      aria-label="Footer — Shenpa's Mehendi and Drapes"
      className="relative bg-[#8F164C] text-[#FCF9EA] pt-14 pb-10 border-t border-[#B99A72]/40 overflow-hidden"
      style={{ backgroundColor: "#8F164C" }}
    >
      {/* Decorative Traditional Border Rule Top */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B99A72] to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#B99A72]/30 text-center md:text-left">
          
          {/* Brand Logo: brand-logo.png */}
          <Link
            href="/"
            className="flex items-center group select-none focus:outline-none"
            aria-label="Shenpa's — Mehendi & Drapes Home"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-[#FCF9EA] border border-[#B99A72]/40 shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-md">
              <Image
                src="/brand-logo.png"
                alt="Shenpa's Mehendi and Drapes"
                fill
                sizes="(max-width: 640px) 64px, 80px"
                className="object-contain"
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <nav
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8"
            aria-label="Footer Navigation"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={getFooterLinkHref(link)}
                className="text-[12.5px] font-semibold tracking-[0.2em] text-[#FCF9EA]/90 hover:text-[#B99A72] uppercase transition-colors"
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Subtle Kolam Accent Icon */}
          <div className="flex items-center gap-2 text-[#B99A72] text-xl">
            <span>✦</span>
            <span
              className="text-[12px] font-bold tracking-[0.22em] uppercase text-[#B99A72]"
              style={{
                fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
              }}
            >
              Tradition &amp; Grace
            </span>
            <span>✦</span>
          </div>
        </div>

        {/* Bottom Copyright & Traditional Ornament */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-[#FCF9EA]/70">
          <p
            style={{
              fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
            }}
            className="text-[14px]"
          >
            &copy; 2026 Shenpa&apos;s — Mehendi and Drapes. All rights reserved.
          </p>

          <p
            className="italic text-[20px] text-[#B99A72] font-bold"
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            }}
           
          >
            Handcrafted with devotion &amp; cultural heritage.
          </p>
        </div>

      </div>
    </footer>
  );
}