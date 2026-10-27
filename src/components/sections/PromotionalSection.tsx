"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import OrnateButton from "@/components/ui/OrnateButton";

export default function PromotionalSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="gallery-preview"
      ref={ref}
      aria-label="A Little Tradition, A Lot of Love"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#8F164C] text-[#FCF9EA] overflow-hidden border-t border-[#B99A72]/30"
      style={{ backgroundColor: "#8F164C" }}
    >
      {/* ── Subtle Background Warmth & Flourishes ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(circle at 15% 25%, rgba(185, 154, 114, 0.12) 0%, transparent 55%),
            radial-gradient(circle at 85% 75%, rgba(252, 249, 234, 0.06) 0%, transparent 55%)
          `,
        }}
      />

      {/* ── Authentic Kolam Pattern Side Accents ── */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0 flex items-center justify-between px-2 sm:px-6 lg:px-10 max-w-[1440px] mx-auto overflow-hidden"
        aria-hidden="true"
      >
        {/* Left Flanking Kolam */}
        <div className="relative w-8 sm:w-12 md:w-16 lg:w-20 aspect-[301/601] opacity-20 sm:opacity-25 transition-opacity duration-300">
          <Image
            src="/kollam-pattern.png"
            alt=""
            fill
            sizes="(max-width: 640px) 48px, 80px"
            className="object-contain"
          />
        </div>

        {/* Right Flanking Kolam (Mirrored) */}
        <div className="relative w-8 sm:w-12 md:w-16 lg:w-20 aspect-[301/601] opacity-20 sm:opacity-25 scale-x-[-1] transition-opacity duration-300">
          <Image
            src="/kollam-pattern.png"
            alt=""
            fill
            sizes="(max-width: 640px) 48px, 80px"
            className="object-contain"
          />
        </div>
      </div>

      {/* Subtle Corner Kolam Watermark Accents */}
      <div
        className="absolute -top-6 -right-6 w-32 sm:w-44 lg:w-56 aspect-[301/601] opacity-10 sm:opacity-15 pointer-events-none select-none z-0 rotate-12 scale-x-[-1]"
        aria-hidden="true"
      >
        <Image
          src="/kollam-pattern.png"
          alt=""
          fill
          sizes="(max-width: 640px) 120px, 220px"
          className="object-contain"
        />
      </div>
      <div
        className="absolute -bottom-8 -left-6 w-32 sm:w-44 lg:w-56 aspect-[301/601] opacity-10 sm:opacity-15 pointer-events-none select-none z-0 -rotate-12"
        aria-hidden="true"
      >
        <Image
          src="/kollam-pattern.png"
          alt=""
          fill
          sizes="(max-width: 640px) 120px, 220px"
          className="object-contain"
        />
      </div>

      {/* Decorative Corner Geometric Flourishes */}
      <div className="absolute top-4 left-4 w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-[#B99A72]/40 rounded-tl-sm pointer-events-none" />
      <div className="absolute top-4 right-4 w-6 h-6 border-t-[1.5px] border-r-[1.5px] border-[#B99A72]/40 rounded-tr-sm pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-b-[1.5px] border-l-[1.5px] border-[#B99A72]/40 rounded-bl-sm pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-[#B99A72]/40 rounded-br-sm pointer-events-none" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ═════════════════════════════════════════════════
              LEFT COLUMN: Brand Illustration with Gold Arch
             ═════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[390px] aspect-[4/5] flex items-center justify-center">
              
              {/* Outer Gold Arch Frame */}
              <div
                className="absolute inset-0 rounded-t-[190px] sm:rounded-t-[220px] rounded-b-2xl border-[1.5px] border-[#B99A72] pointer-events-none"
                aria-hidden="true"
              />
              {/* Inner Hairline Arch Border */}
              <div
                className="absolute inset-2 sm:inset-2.5 rounded-t-[180px] sm:rounded-t-[210px] rounded-b-xl border border-[#B99A72]/40 pointer-events-none"
                aria-hidden="true"
              />

              {/* Soft Radial Illumination */}
              <div
                className="absolute inset-0 rounded-t-[190px] rounded-b-2xl pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 55%, rgba(252, 249, 234, 0.08) 0%, transparent 70%)",
                }}
              />

              {/* Brand Character Illustration */}
              <div className="relative w-[100%] h-[100%] z-10">
                <Image
                  src="/images/brand-character-clean.png"
                  alt="Shenpa's Brand Artistry"
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 390px"
                  className="object-contain"
                  priority={false}
                />
              </div>

            </div>
          </motion.div>

          {/* ═════════════════════════════════════════════════
              RIGHT COLUMN: Typography, Features & CTA
             ═════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="w-8 sm:w-12 h-[1px] bg-[#B99A72]" />
              <span
                className="text-[11px] sm:text-[12px] font-semibold tracking-[0.28em] uppercase text-[#FCF9EA]/90"
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                }}
              >
                A LITTLE TRADITION, A LOT OF LOVE
              </span>
            </div>

            {/* Main Heading */}
            <h2
              className="text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.12] text-[#FCF9EA] mb-5 sm:mb-6 font-bold tracking-tight"
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
              }}
            >
              Your occasion.
              <br />
              Our careful touch.
            </h2>

            {/* Description */}
            <p
              className="text-[14.5px] sm:text-[16px] text-[#FCF9EA]/90 font-light leading-[1.8] max-w-[620px] mb-8"
              style={{
                fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
              }}
            >
              At Shenpa&apos;s, every pleat and every pattern deserves attention. We bring together the beauty of traditional styling and a thoughtful, personal approach—so you can feel confident and celebration-ready.
            </p>

            {/* Two Side-by-Side Features */}
            <div className="w-full pt-6 pb-8 border-t border-[#B99A72]/40 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
              {/* Feature 1 */}
              <div>
                <h3
                  className="text-[20px] sm:text-[22px] font-semibold text-[#FCF9EA] mb-1.5 leading-snug"
                  style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  }}
                >
                  Thoughtful details
                </h3>
                <p
                  className="text-[13px] sm:text-[14px] text-[#FCF9EA]/80 font-normal leading-relaxed"
                  style={{
                    fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  }}
                >
                  Carefully finished, beautifully presented.
                </p>
              </div>

              {/* Feature 2 */}
              <div>
                <h3
                  className="text-[20px] sm:text-[22px] font-semibold text-[#FCF9EA] mb-1.5 leading-snug"
                  style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  }}
                >
                  Your style, your moment
                </h3>
                <p
                  className="text-[13px] sm:text-[14px] text-[#FCF9EA]/80 font-normal leading-relaxed"
                  style={{
                    fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  }}
                >
                  Service choices to suit your occasion.
                </p>
              </div>
            </div>

            {/* Call to Action: SEE OUR GALLERY → using authentic cream ornate button asset */}
            <div>
              <OrnateButton
                id="cta-see-our-gallery"
                href="/gallery"
                ariaLabel="See our gallery"
                variant="cream"
              >
                <span>SEE OUR GALLERY</span>
                <span className="text-sm font-bold leading-none transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </OrnateButton>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
