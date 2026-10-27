"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import OrnateButton from "@/components/ui/OrnateButton";

interface NavItem {
  name: string;
  hash: string | null;
  pageHref: string;
}

const navItems: NavItem[] = [
  { name: "Home", hash: "#hero", pageHref: "/" },
  { name: "About", hash: "#about", pageHref: "/#about" },
  { name: "Services", hash: "#services", pageHref: "/#services" },
  { name: "Gallery", hash: null, pageHref: "/gallery" },
  { name: "FAQ", hash: "#faq", pageHref: "/#faq" },
  { name: "Contact", hash: "#contact", pageHref: "/#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "";

  const [activeSection, setActiveSection] = useState<string>("Home");
  const currentActive = pathname === "/gallery" ? "Gallery" : activeSection;

  useEffect(() => {
    if (!isHomePage) return;

    const sections = [
      { id: "contact", name: "Contact" },
      { id: "faq", name: "FAQ" },
      { id: "mehendi-services", name: "Services" },
      { id: "saree-draping-services", name: "Services" },
      { id: "services", name: "Services" },
      { id: "about", name: "About" },
      { id: "hero", name: "Home" },
    ];

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // At or near bottom of page -> activate Contact
      if (scrollY + clientHeight >= scrollHeight - 90) {
        setActiveSection("Contact");
        return;
      }

      // Near top of page -> activate Home
      if (scrollY < 180) {
        setActiveSection("Home");
        return;
      }

      const triggerPoint = scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          if (triggerPoint >= top) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const getLinkHref = (item: NavItem) => {
    if (item.name === "Gallery") return "/gallery";
    if (isHomePage && item.hash) return item.hash;
    return item.pageHref;
  };

  const bookNowHref = isHomePage ? "#booking" : "/#booking";

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full sticky top-0 z-50 bg-[#FCF9EA] border-b border-[#B99A72]/30 border-t-0 border-x-0 backdrop-blur-sm"
      style={{ backgroundColor: "#FCF9EA", top: 0 }}
    >
      <div className="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-2 sm:py-2.5 flex items-center justify-between">
        {/* ── Brand Logo / Left: brand-logo.png ── */}
        <Link
          href="/"
          className="flex items-center select-none focus:outline-none"
          aria-label="Shenpa's — Mehendi & Drapes Home"
        >
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] lg:w-[80px] lg:h-[80px] shrink-0 transition-transform duration-300 hover:scale-105">
            <Image
              src="/brand-logo.png"
              alt="Shenpa's Mehendi and Drapes"
              fill
              sizes="(max-width: 640px) 56px, (max-width: 768px) 64px, (max-width: 1024px) 72px, 80px"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* ── Nav Links / Center ── */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-11"
          aria-label="Primary Navigation"
        >
          {navItems.map((link) => {
            const href = getLinkHref(link);
            const isActive = currentActive === link.name;

            return (
              <Link
                key={link.name}
                href={href}
                onClick={() => {
                  if (link.name === "Gallery") {
                    setActiveSection("Gallery");
                  } else if (isHomePage) {
                    setActiveSection(link.name);
                  }
                }}
                className={`relative text-[12px] font-bold tracking-[0.24em] uppercase transition-colors duration-200 py-1 group ${
                  isActive ? "text-[#8F164C]" : "text-[#75451F] hover:text-[#8F164C]"
                }`}
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                }}
              >
                <span>{link.name}</span>
                {isActive ? (
                  <motion.span
                    layoutId="activeNavUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#8F164C]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    aria-hidden="true"
                  />
                ) : (
                  <span
                    className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#8F164C]/40 transition-all duration-300 group-hover:w-full"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ── CTA Button / Right ── */}
        <div className="hidden md:flex items-center">
          <OrnateButton href={bookNowHref} ariaLabel="Book Now">
            <span>Book Now</span>
            <span className="text-xs font-bold leading-none transform translate-y-[-1px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </OrnateButton>
        </div>

        {/* ── Mobile Hamburger Toggle ── */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8F164C] focus-visible:ring-offset-2 rounded-lg hover:bg-[#8F164C]/5 active:scale-95 transition-all select-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`w-6 h-[2px] bg-[#8F164C] transition-transform duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-[#8F164C] transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-[#8F164C] transition-transform duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-[#B99A72]/20 bg-[#FCF9EA] px-6 py-5 flex flex-col gap-4"
          >
            {navItems.map((link) => {
              const href = getLinkHref(link);
              const isActive = currentActive === link.name;

              return (
                <Link
                  key={link.name}
                  href={href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setActiveSection(link.name);
                  }}
                  className={`relative text-[12px] font-semibold tracking-[0.2em] uppercase py-1 w-fit transition-colors ${
                    isActive ? "text-[#8F164C] font-bold" : "text-[#75451F] hover:text-[#8F164C]"
                  }`}
                  style={{
                    fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  }}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#8F164C]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
            <div className="pt-2 flex justify-center">
              <OrnateButton
                href={bookNowHref}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full max-w-[280px]"
              >
                <span>Book Now</span>
                <span className="text-xs font-bold leading-none transform translate-y-[-1px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </OrnateButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}