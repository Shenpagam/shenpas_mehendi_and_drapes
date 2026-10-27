"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import OrnateButton from "@/components/ui/OrnateButton";
import SectionMotif from "@/components/ui/SectionMotif";
import KolamSectionDecorations from "@/components/ui/KolamSectionDecorations";

/* ─── Framer Motion Variants ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      id="hero"
      ref={ref}
      aria-label="Shenpa's Mehendi and Drapes Hero"
      className="relative overflow-hidden bg-[#FCF9EA] py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "#FCF9EA" }}
    >
      {/* ── Background Subtle Glow & Warmth ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 50% 55% at 75% 50%, rgba(239, 230, 210, 0.65) 0%, transparent 70%),
            radial-gradient(ellipse 35% 40% at 20% 70%, rgba(185, 154, 114, 0.08) 0%, transparent 60%)
          `,
        }}
      />

      {/* ── Two Symmetrical Kolam Decorations Centered Symmetrically Across Hero ── */}
      <KolamSectionDecorations size="lg" opacity="opacity-30 sm:opacity-40" maxWidth="max-w-[1480px]" />

      {/* ── Main Container ── */}
      <div className="relative z-10 w-full max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ═════════════════════════════════════════════════
              LEFT COLUMN: Typography & CTA (Clean & Elegant, No Arch Border)
             ═════════════════════════════════════════════════ */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-7 xl:col-span-6 flex justify-center order-2 lg:order-1"
          >
            <div className="relative flex flex-col items-center text-center w-full max-w-[520px] px-2 sm:px-4">

              {/* Eyebrow Row with Ornamental Motif */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center justify-center gap-3 mb-3.5 sm:mb-4 z-10"
              >
                <span
                  className="text-[11px] sm:text-[12px] font-bold tracking-[0.28em] uppercase text-[#75451F]"
                  style={{
                    fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  }}
                >
                  TRADITION, STYLED BEAUTIFULLY
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                id="hero-headline"
                variants={fadeUp}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-[#8F164C] leading-[1.12] tracking-[-0.015em] mb-3 sm:mb-4 select-none z-10"
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontSize: "clamp(34px, 4.2vw, 54px)",
                  fontWeight: 700,
                }}
              >
                Every detail tells a{" "}
                <span
                  className="italic font-semibold"
                  style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  }}
                >
                  Story.
                </span>
              </motion.h1>

              {/* Subtle Decorative Separator Motif */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="mb-4 sm:mb-5 z-10"
              >
                <SectionMotif withLines={true} size="sm" color="#8F164C" className="justify-center" />
              </motion.div>

              {/* Supporting Text Paragraph (Centered) */}
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="text-[#75451F]/90 text-[15px] sm:text-[16px] font-light leading-[1.8] max-w-[460px] mb-6 sm:mb-8 z-10 text-center"
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                From intricate mehendi patterns to graceful saree draping, make your special moments feel even more beautiful with a touch of tradition.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="flex justify-center z-10"
              >
                <OrnateButton
                  id="cta-explore-services"
                  href="#services"
                >
                  <span>Explore Services</span>
                  <span className="text-sm font-bold leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
                </OrnateButton>
              </motion.div>

            </div>
          </motion.div>

          {/* ═════════════════════════════════════════════════
              RIGHT COLUMN: Arch Frame + Clean Illustration + Badge (~5-6 cols)
             ═════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="lg:col-span-5 xl:col-span-6 relative flex items-center justify-center order-1 lg:order-2"
          >
            {/* ── Architectural Arch Frame ── */}
            <div className="relative w-[250px] sm:w-[290px] lg:w-[320px] h-[310px] sm:h-[360px] lg:h-[390px] flex items-end justify-center shrink-0">
              
              {/* The Golden Arch Outline */}
              <div
                className="absolute inset-0 rounded-t-[210px] border-[1.5px] border-[#B99A72] pointer-events-none z-0"
              >
                {/* Bottom baseline line */}
                <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B99A72]" />

                {/* Burgundy Accent Notch on bottom-left of arch base */}
                <div className="absolute -bottom-[2px] left-6 w-8 h-[5px] bg-[#8F164C]" />
              </div>

              {/* ── The Authentic Brand Character Illustration (Image 1, Transparent BG) ── */}
              <div className="relative z-10 w-[100%] pb-0 flex items-end justify-center">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-full aspect-square"
                >
                  <Image
                    src="/images/brand-character-clean.png"
                    alt="Shenpa's brand character — girl in traditional purple pattu pavadai holding a green parrot"
                    fill
                    priority
                    sizes="(max-width: 800px) 600px, (max-width: 1400px) 750px, 850px"
                    className="object-contain object-bottom"
                    style={{
                      filter:
                        "drop-shadow(0 16px 32px rgba(117, 69, 31, 0.12))",
                    }}
                  />
                </motion.div>
              </div>

              {/* ── "Made with love & tradition" Solid Badge ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-3 sm:-bottom-3.5 -right-2 sm:-right-4 z-20"
              >
                <div
                  id="hero-love-badge"
                  className="bg-[#8F164C] text-white px-4 sm:px-6 py-2.5 sm:py-3 shadow-xl select-none"
                  style={{
                    fontFamily:
                      "var(--font-cormorant), 'Cormorant Garamond', serif",
                  }}
                >
                  <p className="text-[15px] sm:text-[19px] font-medium tracking-[0.02em] whitespace-nowrap leading-none">
                    Made with love &amp; tradition
                  </p>
                </div>
              </motion.div>

            </div>
            {/* / Arch container */}

          </motion.div>
          {/* / RIGHT COLUMN */}

        </div>
      </div>
    </section>
  );
}