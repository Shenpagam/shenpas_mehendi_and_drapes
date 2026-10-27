"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import OrnateButton from "@/components/ui/OrnateButton";
import SectionMotif from "@/components/ui/SectionMotif";
import KolamSectionDecorations from "@/components/ui/KolamSectionDecorations";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      aria-label="About Shenpa's"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#FCF9EA] border-t border-[#B99A72]/25 overflow-hidden"
      style={{ backgroundColor: "#FCF9EA" }}
    >
      {/* Symmetrical Flanking Kolams */}
      <KolamSectionDecorations size="lg" opacity="opacity-20 sm:opacity-30" maxWidth="max-w-[1480px]" />

      <div className="relative z-10 max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ── LEFT: Story & Narrative (~6 cols) ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Eyebrow with decorative motif */}
            <div className="flex items-center gap-3 mb-3">
              
              <span
                className="text-[12px] font-semibold tracking-[0.28em] uppercase text-[#75451F]"
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                }}
              >
                Our Heritage &amp; Passion
              </span>
            </div>

            <h2
              className="text-[36px] sm:text-[46px] lg:text-[52px] leading-tight text-[#8F164C] mb-3 font-semibold"
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
              }}
            >
              About Shenpa&apos;s
            </h2>

            {/* Subtitle: "Mehendi and Drapes" */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#75451F] mb-3 sm:mb-4 font-bold tracking-[0.03em]"
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontSize: "clamp(24px, 2.4vw, 32px)",
              }}
            >
              Mehendi and Drapes
            </motion.p>
            
            {/* Subtle decorative separator motif */}
            <div className="mb-6">
              <SectionMotif withLines={true} size="sm" color="#8F164C" className="justify-start" />
            </div>

            <div className="space-y-4 text-[14.5px] font-medium sm:text-[15.5px] text-[#75451F]/90 leading-[1.8] mb-8">
              <p
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                }}
              >
                At Shenpa&apos;s, we believe that true elegance lies in the details. Founded on a
                deep reverence for Indian traditions, our studio specializes in two timeless
                celebration arts: intricate handcrafted mehendi and graceful saree draping.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                }}
              >
                Whether it is the aromatic richness of fresh, skin-safe organic henna or the
                sculptural symmetry of crisp silk pleats, we dedicate personalized care to each bride
                and client to make your most sacred milestones feel radiant and unforgettable.
              </p>
            </div>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full mb-8 pt-4 border-t border-[#B99A72]/20">
              <div className="flex items-start gap-3">
                <span className="text-[#8F164C] text-sm mt-0.5">✦</span>
                <div>
                  <h3
                    className="text-[14px] font-semibold text-[#8F164C] uppercase tracking-wider mb-1"
                    style={{
                      fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                    }}
                  >
                    100% Organic Henna
                  </h3>
                  <p
                    className="text-[12.5px] text-[#75451F]/80 font-medium leading-snug"
                    style={{
                      fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                    }}
                  >
                    Natural herbal blends delivering deep, long-lasting color safely.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-[#8F164C] text-sm mt-0.5">✦</span>
                <div>
                  <h3
                    className="text-[14px] font-semibold text-[#8F164C] uppercase tracking-wider mb-1"
                    style={{
                      fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                    }}
                  >
                    Personalized Care
                  </h3>
                  <p
                    className="text-[12.5px] text-[#75451F]/80 font-medium leading-snug"
                    style={{
                      fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                    }}
                  >
                    Tailored consultations for bridal themes, poses, and draping comfort.
                  </p>
                </div>
              </div>
            </div>

            <OrnateButton href="#booking">
              <span>Connect with Us</span>
              <span className="text-sm font-bold leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
            </OrnateButton>
          </motion.div>

          {/* ── RIGHT: Tasteful Imagery Collage (~6 cols) ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            {/* The Collage Layout with Antique Gold Borders */}
            <div className="relative w-full max-w-[500px] mx-auto grid grid-cols-12 gap-4">
              
              {/* Primary Image: Bridal Hand Mehendi */}
              <div className="col-span-8 relative h-[320px] sm:h-[360px] border-[1.5px] border-[#B99A72] overflow-hidden shadow-lg group">
                <Image
                  src="/images/showcase-mehendi-hand.png"
                  alt="Intricate bridal hand mehendi artistry with traditional Indian peacock and floral motifs by Shenpa's"
                  fill
                  sizes="(max-width: 768px) 60vw, 340px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Secondary Floating Image: Folded Silk Saree */}
              <div className="col-span-4 relative h-[200px] sm:h-[220px] self-end border-[1.5px] border-[#B99A72] overflow-hidden shadow-md group">
                <Image
                  src="/images/saree-hanger-folding.jpg"
                  alt="Ready-to-wear silk saree hanger folding with crisp vertical pleats"
                  fill
                  sizes="(max-width: 768px) 40vw, 180px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Tertiary Floating Image: Bridal Saree Box Folding */}
              <div className="col-span-6 col-start-4 -mt-8 relative h-[180px] sm:h-[200px] border-[1.5px] border-[#B99A72] overflow-hidden shadow-lg z-20 group">
                <Image
                  src="/images/saree-box-folding.jpg"
                  alt="Compact saree box folding for bridal trousseau packing and safe preservation"
                  fill
                  sizes="(max-width: 768px) 50vw, 240px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Decorative Kolam Overlay Motif */}
              <div className="absolute -bottom-6 -right-6 w-20 aspect-[301/601] opacity-25 pointer-events-none select-none z-10" aria-hidden="true">
                <Image
                  src="/images/kolam-trimmed.png"
                  alt=""
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </div>

              {/* Subtle Gold Frame Accent Tag */}
              <div className="absolute top-4 -left-4 bg-[#8F164C] text-white px-4 py-2 shadow-lg z-20 select-none">
                <p
                  className="text-[10px] font-semibold tracking-[0.24em] uppercase"
                  style={{
                    fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  }}
                >
                  Authentic Artistry
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}