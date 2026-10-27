"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const sareeServices = [
  {
    id: "box-folding",
    title: "Box Folding",
    price: "₹400",
    description:
      "Compact, precision preservation folding designed for wedding trousseau boxes, destination travel, and long-term silk fabric longevity.",
    highlights: [
      "Crease-free tissue layering",
      "Zari border protection",
      "Ideal for trousseau & travel",
      "Maintains fabric sheen",
    ],
  },
  {
    id: "hanger-folding",
    title: "Hanger Folding",
    price: "₹500",
    description:
      "Ready-to-wear vertical hanger pleating with padded non-slip support, allowing your bridal saree to hang gracefully without fold lines.",
    highlights: [
      "Ready-to-wear vertical pleats",
      "Padded non-slip hanger mount",
      "Immediate pre-event draping ready",
      "Protects heavy bridal pallu",
    ],
  },
  {
    id: "saree-draping",
    title: "Saree Draping",
    price: "₹300",
    description:
      "Professional on-site draping tailored to your posture and style — whether traditional South Indian Madisar, classic pleated, or modern sleek.",
    highlights: [
      "Customized pleat pinning",
      "Comfortable & secure hold",
      "Flattering silhouette finish",
      "All saree styles supported",
    ],
  },
];

export default function SareeServices() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="saree-draping"
      ref={ref}
      aria-label="Saree Services"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#FCF9EA] border-t border-[#B99A72]/25 overflow-hidden"
    >
      <div className="relative z-10 max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#B99A72]" />
            <span
              className="text-[10.5px] font-semibold tracking-[0.28em] uppercase text-[#75451F]"
              style={{
                fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
              }}
            >
              Art of Draping &amp; Preservation
            </span>
            <span className="w-8 h-[1px] bg-[#B99A72]" />
          </div>

          <h2
            className="text-[36px] sm:text-[46px] lg:text-[52px] leading-tight text-[#8F164C] mb-3 font-semibold"
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            }}
          >
            Saree Services
          </h2>

          <p
            className="text-[17px] sm:text-[19px] italic text-[#75451F] font-normal"
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            }}
          >
            Grace in Every Fold, Elegance in Every Drape.
          </p>
        </motion.div>

        {/* ── Luxurious Folded Silk Saree Showcase Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-[1100px] mx-auto mb-14 sm:mb-16 border-[1.5px] border-[#B99A72]/40 bg-[#FCF9EA] overflow-hidden shadow-md group"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            {/* Image side */}
            <div className="md:col-span-7 relative h-[260px] sm:h-[340px] overflow-hidden bg-[#EFE6D2]">
              <Image
                src="/images/saree-folded.jpg"
                alt="Luxurious folded South Indian Kanchipuram silk saree with rich gold zari border"
                fill
                sizes="(max-width: 768px) 100vw, 650px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>

            {/* Content side */}
            <div className="md:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <span
                className="text-[10px] font-semibold tracking-[0.24em] uppercase text-[#75451F] mb-2"
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                }}
              >
                Signature Silk Care
              </span>
              <h3
                className="text-[28px] sm:text-[32px] font-semibold text-[#8F164C] mb-3 leading-tight"
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                }}
              >
                Cherished Silks, Handled with Care
              </h3>
              <p
                className="text-[14px] text-[#75451F]/90 font-light leading-[1.75] mb-6"
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                }}
              >
                Each pure Kanchipuram, Banarasi, and bridal silk saree is treated as a masterpiece.
                Our folding and draping techniques preserve fabric integrity, maintain zari luster,
                and give you a picture-perfect look.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#booking"
                  className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8F164C] hover:opacity-80 transition-opacity"
                  style={{
                    fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  }}
                >
                  <span>Reserve Saree Care</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Three Refined Service Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1100px] mx-auto">
          {sareeServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.12 }}
              whileHover={{ y: -6 }}
              className="bg-[#FCF9EA] border-[1.5px] border-[#B99A72]/40 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 relative group"
            >
              {/* Corner Kolam Accent */}
              <div className="absolute top-3 right-3 text-[#B99A72] text-xs opacity-60">
                ✦
              </div>

              <div>
                <span
                  className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#75451F] block mb-2"
                  style={{
                    fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  }}
                >
                  Service 0{idx + 1}
                </span>

                <div className="flex items-baseline justify-between gap-2 mb-3">
                  <h3
                    className="text-[24px] sm:text-[27px] font-semibold text-[#8F164C] leading-tight"
                    style={{
                      fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                    }}
                  >
                    {service.title}
                  </h3>
                  <span
                    className="text-[26px] sm:text-[28px] font-bold text-[#8F164C]"
                    style={{
                      fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                    }}
                  >
                    {service.price}
                  </span>
                </div>

                <div className="h-[1px] w-12 bg-[#B99A72]/60 mb-4" />

                <p
                  className="text-[14px] text-[#75451F]/90 font-light leading-[1.7] mb-6"
                  style={{
                    fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  }}
                >
                  {service.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 border-t border-[#B99A72]/20 pt-4 mb-6">
                  {service.highlights.map((item, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-center gap-2 text-[12.5px] text-[#75451F]"
                      style={{
                        fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                      }}
                    >
                      <span className="text-[#8F164C] text-[10px]">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#booking"
                className="w-full text-center py-2.5 border border-[#8F164C] text-[#8F164C] group-hover:bg-[#8F164C] group-hover:text-white text-[10.5px] font-semibold tracking-[0.2em] uppercase transition-all duration-300"
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                }}
              >
                Select {service.title}
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}