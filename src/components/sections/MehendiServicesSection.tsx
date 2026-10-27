"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import OrnateButton from "@/components/ui/OrnateButton";
import SectionMotif from "@/components/ui/SectionMotif";
import KolamSectionDecorations from "@/components/ui/KolamSectionDecorations";

export default function MehendiServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handMehendiItems = [
    {
      length: "Palm / Wrist Length",
      oneSide: "₹150 (One Side)",
      bothSides: "₹300 (Both Sides)",
    },
    {
      length: "Bangle Length",
      oneSide: "₹300 (One Side)",
      bothSides: "₹600 (Both Sides)",
    },
    {
      length: "Elbow Length",
      oneSide: "₹1,000 (One Side)",
      bothSides: "₹2,000 (Both Sides)",
    },
    {
      length: "Above Elbow Length",
      oneSide: "₹1,500 (One Side)",
      bothSides: "₹3,000 (Both Sides)",
    },
  ];

  const feetMehendiItems = [
    { name: "Simple Feet Design", price: "₹150" },
    { name: "Classic Feet Design", price: "₹450" },
    { name: "Detailed Feet Design", price: "₹600" },
    { name: "Bridal Feet Design", price: "₹800" },
  ];

  return (
    <section
      id="mehendi-services"
      ref={ref}
      aria-label="Mehendi Services"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#FCF9EA] border-t border-[#B99A72]/25 overflow-hidden scroll-mt-20"
      style={{ backgroundColor: "#FCF9EA" }}
    >
      {/* ── Background Subtle Radiance ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(circle at 85% 20%, rgba(185, 154, 114, 0.06) 0%, transparent 45%),
            radial-gradient(circle at 15% 80%, rgba(143, 22, 76, 0.05) 0%, transparent 45%)
          `,
        }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-[820px] mx-auto mb-12 sm:mb-16"
        >
          {/* Eyebrow / Category */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <span
              className="text-[12px] sm:text-[12px] font-semibold tracking-[0.28em] uppercase text-[#75451F]/90"
              style={{
                fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
              }}
            >
              HANDCRAFTED HENNA ART
            </span>
          </div>

          {/* Main Heading: "MEHENDI SERVICES" */}
          <h2
            className="text-[34px] sm:text-[46px] lg:text-[52px] leading-[1.12] text-[#8F164C] mb-2.5 font-bold tracking-[0.02em]"
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            }}
          >
            Mehendi Services
          </h2>

          {/* Subtitle: "Choose Your Perfect Service." */}
          <p
            className="text-[16px] sm:text-[18px] text-[#75451F]/90 font-[600] mb-3"
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            }}
          >
            Choose Your Perfect Service.
          </p>

          {/* Subtle Decorative Separator Motif */}
          <div className="flex justify-center mt-3">
            <SectionMotif withLines={true} size="md" color="#8F164C" />
          </div>
        </motion.div>

        {/* ── Two Large Side-by-Side Cards with Symmetrical Kolams ── */}
        <div className="relative mb-12 sm:mb-16">
          {/* Two Symmetrical Kolam Decorations Centered with Cards */}
          <KolamSectionDecorations size="lg" opacity="opacity-25 sm:opacity-35" maxWidth="max-w-[1380px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 max-w-[1140px] mx-auto items-stretch">
          
          {/* ═════════════════════════════════════════════════
              CARD 1: Hand Mehendi
             ═════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-[#FCF9EA] border-[1.5px] border-[#B99A72] rounded-3xl p-6 sm:p-8 flex flex-col shadow-[0_10px_30px_rgba(117,69,31,0.06)] group hover:border-[#8F164C]/60 hover:shadow-[0_14px_35px_rgba(143,22,76,0.08)] transition-all duration-300"
          >
            {/* Corner Flourishes */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-[1.5px] border-l-[1.5px] border-[#B99A72]/60 rounded-tl-sm pointer-events-none" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-[1.5px] border-r-[1.5px] border-[#B99A72]/60 rounded-tr-sm pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-[1.5px] border-l-[1.5px] border-[#B99A72]/60 rounded-bl-sm pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-[1.5px] border-r-[1.5px] border-[#B99A72]/60 rounded-br-sm pointer-events-none" />

            {/* Arch-Shaped Image Frame */}
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] mx-auto aspect-[4/5] rounded-t-[150px] sm:rounded-t-[170px] rounded-b-xl overflow-hidden border-[1.5px] border-[#B99A72] mb-6 shadow-xs bg-[#FCF9EA]">
              <div className="absolute inset-1.5 rounded-t-[142px] sm:rounded-t-[162px] rounded-b-lg border border-[#B99A72]/40 z-10 pointer-events-none" />
              <Image
                src="/images/showcase-mehendi-hand.png"
                alt="Bridal hand mehendi design featuring delicate floral vine patterns and traditional mandala palm art"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 320px, 380px"
              />
            </div>

            {/* Card Heading */}
            <div className="text-center mb-6">
              <h3
                className="text-[28px] sm:text-[34px] font-semibold text-[#8F164C] mb-1"
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                }}
              >
                Hand Mehendi
              </h3>
              <p
                className="text-[13px] sm:text-[14px] text-[#75451F] font-normal"
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                }}
              >
                Intricate Bridal, Arabic &amp; Traditional Styles
              </p>
              <div className="flex items-center justify-center gap-2 w-full max-w-[140px] mx-auto mt-3">
                <span className="w-8 h-[1px] bg-[#B99A72]/50" />
                <span className="text-[#8F164C] text-xs">✦</span>
                <span className="w-8 h-[1px] bg-[#B99A72]/50" />
              </div>
            </div>

            {/* Pricing List Table */}
            <div className="space-y-3 mb-8 flex-1">
              {handMehendiItems.map((item) => (
                <div
                  key={item.length}
                  className="p-3 sm:p-3.5 rounded-xl border border-[#B99A72]/30 bg-[#FAF6E6]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 transition-colors hover:border-[#8F164C]/40"
                >
                  <span
                    className="text-[14.5px] sm:text-[15.5px] font-semibold text-[#8F164C]"
                    style={{
                      fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                    }}
                  >
                    {item.length}
                  </span>
                  <div
                    className="text-[12.5px] sm:text-[13.5px] text-[#75451F] font-medium tracking-wide flex items-center gap-2"
                    style={{
                      fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                    }}
                  >
                    <span className="text-[#8F164C] font-semibold">{item.oneSide}</span>
                    <span className="text-[#B99A72]">|</span>
                    <span className="text-[#8F164C] font-semibold">{item.bothSides}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mt-auto">
              <OrnateButton href="#booking" ariaLabel="Book Hand Mehendi">
                <span>Book Hand Mehendi</span>
                <span className="text-sm font-bold leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
              </OrnateButton>
            </div>
          </motion.div>

          {/* ═════════════════════════════════════════════════
              CARD 2: Feet Mehendi
             ═════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative bg-[#FCF9EA] border-[1.5px] border-[#B99A72] rounded-3xl p-6 sm:p-8 flex flex-col shadow-[0_10px_30px_rgba(117,69,31,0.06)] group hover:border-[#8F164C]/60 hover:shadow-[0_14px_35px_rgba(143,22,76,0.08)] transition-all duration-300"
          >
            {/* Corner Flourishes */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-[1.5px] border-l-[1.5px] border-[#B99A72]/60 rounded-tl-sm pointer-events-none" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-[1.5px] border-r-[1.5px] border-[#B99A72]/60 rounded-tr-sm pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-[1.5px] border-l-[1.5px] border-[#B99A72]/60 rounded-bl-sm pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-[1.5px] border-r-[1.5px] border-[#B99A72]/60 rounded-br-sm pointer-events-none" />

            {/* Arch-Shaped Image Frame */}
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] mx-auto aspect-[4/5] rounded-t-[150px] sm:rounded-t-[170px] rounded-b-xl overflow-hidden border-[1.5px] border-[#B99A72] mb-6 shadow-xs bg-[#FCF9EA]">
              <div className="absolute inset-1.5 rounded-t-[142px] sm:rounded-t-[162px] rounded-b-lg border border-[#B99A72]/40 z-10 pointer-events-none" />
              <Image
                src="/images/showcase-mehendi-leg.png"
                alt="Traditional bridal feet mehendi design with symmetrical anklet detailing and fine floral work"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 320px, 380px"
              />
            </div>

            {/* Card Heading */}
            <div className="text-center mb-6">
              <h3
                className="text-[28px] sm:text-[34px] font-semibold text-[#8F164C] mb-1"
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                }}
              >
                Feet Mehendi
              </h3>
              <p
                className="text-[13px] sm:text-[14px] text-[#75451F] font-normal"
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                }}
              >
                Graceful Bridal Feet &amp; Ankle Designs
              </p>
              <div className="flex items-center justify-center gap-2 w-full max-w-[140px] mx-auto mt-3">
                <span className="w-8 h-[1px] bg-[#B99A72]/50" />
                <span className="text-[#8F164C] text-xs">✦</span>
                <span className="w-8 h-[1px] bg-[#B99A72]/50" />
              </div>
            </div>

            {/* Pricing List Table */}
            <div className="space-y-3 mb-8 flex-1">
              {feetMehendiItems.map((item) => (
                <div
                  key={item.name}
                  className="p-3 sm:p-3.5 rounded-xl border border-[#B99A72]/30 bg-[#FAF6E6]/60 flex items-center justify-between gap-4 transition-colors hover:border-[#8F164C]/40"
                >
                  <span
                    className="text-[14.5px] sm:text-[15.5px] font-semibold text-[#8F164C]"
                    style={{
                      fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                    }}
                  >
                    {item.name}
                  </span>
                  <span
                    className="text-[15px] sm:text-[16px] font-bold text-[#8F164C] tracking-wide"
                    style={{
                      fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                    }}
                  >
                    {item.price}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mt-auto">
              <OrnateButton href="#booking" ariaLabel="Book Feet Mehendi">
                <span>Book Feet Mehendi</span>
                <span className="text-sm font-bold leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
              </OrnateButton>
            </div>
          </motion.div>
        </div>
      </div>

        {/* ── Decorative Banner: Portrait & Customised Designs ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative max-w-3xl mx-auto rounded-2xl border-[1.5px] border-[#B99A72] bg-[#FCF9EA] p-6 sm:p-8 text-center shadow-sm"
        >
          {/* Corner Flourishes */}
          <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-[1.5px] border-l-[1.5px] border-[#B99A72]/70 rounded-tl-sm pointer-events-none" />
          <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-[1.5px] border-r-[1.5px] border-[#B99A72]/70 rounded-tr-sm pointer-events-none" />
          <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-[1.5px] border-l-[1.5px] border-[#B99A72]/70 rounded-bl-sm pointer-events-none" />
          <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-[1.5px] border-r-[1.5px] border-[#B99A72]/70 rounded-br-sm pointer-events-none" />

          <SectionMotif withLines={false} size="sm" color="#8F164C" className="mb-2" />

          <h3
            className="text-[22px] sm:text-[28px] font-bold text-[#8F164C] tracking-[0.06em] uppercase mb-1.5"
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            }}
          >
            PORTRAIT &amp; CUSTOMISED DESIGNS
          </h3>

          <p
            className="text-[13px] sm:text-[14.5px] text-[#75451F] font-medium tracking-wide mb-5"
            style={{
              fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
            }}
          >
            Design complexity may incur additional charges.
          </p>

          <div className="flex justify-center">
            <OrnateButton href="#booking" ariaLabel="Inquire for Custom Portrait Mehendi">
              <span>Inquire for Custom Design</span>
              <span className="text-sm font-bold leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
            </OrnateButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
