"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const mehendiServices = [
  {
    id: "hand-mehendi",
    title: "Hand Mehendi",
    subtitle: "Bridal, Arabic & Traditional Styles",
    price: "Starting from ₹1,500",
    image: "/images/mehendi-hands.jpg",
    description:
      "Intricate peacock, mandala, and floral patterns tailored to your personal love story with 100% organic henna for a rich, deep mahogany stain.",
    features: [
      "Full Bridal Palm & Forearm Coverage",
      "Traditional & Contemporary Arabic Motifs",
      "Pure Organic Henna Cones (Skin-Safe)",
      "Long-Lasting Deep Color Guarantee",
    ],
  },
  {
    id: "feet-mehendi",
    title: "Feet Mehendi",
    subtitle: "Graceful Bridal Feet & Ankle Designs",
    price: "Starting from ₹1,200",
    image: "/images/mehendi-feet.jpg",
    description:
      "Stunning floral mandalas, geometric Jaali grids, and ankle-band motifs that crown your feet with timeless bridal grandeur.",
    features: [
      "Intricate Bridal Feet & Ankle Bands",
      "Traditional Alta Highlights",
      "Matching Motifs with Hand Design",
      "Comfortable & Relaxed Application",
    ],
  },
];

export default function MehendiServices() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="mehendi"
      ref={ref}
      aria-label="Mehendi Services"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#FCF9EA] border-t border-[#B99A72]/25 overflow-hidden"
    >
      {/* Decorative Kolam Background Watermark */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 opacity-[0.06] pointer-events-none select-none"
        aria-hidden="true"
      >
        <Image
          src="/images/kolam-trimmed.png"
          alt="Kolam Watermark"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-10 max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-16"
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
              Artisan Henna Creations
            </span>
            <span className="w-8 h-[1px] bg-[#B99A72]" />
          </div>

          {/* Heading */}
          <h2
            className="text-[36px] sm:text-[46px] lg:text-[52px] leading-tight text-[#8F164C] mb-3 font-semibold"
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            }}
          >
            Mehendi Services
          </h2>

          {/* Tagline */}
          <p
            className="text-[17px] sm:text-[19px] italic text-[#75451F] font-normal"
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            }}
          >
            Art on Your Hands, Joy in Your Heart.
          </p>
        </motion.div>

        {/* 2 Attractive Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-[1100px] mx-auto mb-14">
          {mehendiServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="group bg-[#FCF9EA] border-[1.5px] border-[#B99A72]/40 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Gold Border */}
              <div className="relative w-full h-[260px] sm:h-[300px] overflow-hidden bg-[#EFE6D2]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                
                {/* Floating Price Tag */}
                <div className="absolute bottom-4 left-4 bg-[#8F164C] text-white px-4 py-1.5 shadow-md">
                  <span
                    className="text-[14px] sm:text-[15px] font-semibold tracking-wide"
                    style={{
                      fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                    }}
                  >
                    {service.price}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-[26px] sm:text-[30px] font-semibold text-[#8F164C] mb-1 leading-tight"
                    style={{
                      fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[#75451F] mb-4"
                    style={{
                      fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                    }}
                  >
                    {service.subtitle}
                  </p>
                  <p
                    className="text-[14.5px] text-[#75451F]/90 font-light leading-[1.75] mb-6"
                    style={{
                      fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 mb-6 border-t border-[#B99A72]/20 pt-4">
                    {service.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-center gap-2.5 text-[13px] text-[#75451F]"
                        style={{
                          fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                        }}
                      >
                        <span className="text-[#8F164C] text-xs">✦</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#booking"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 border border-[#8F164C] text-[#8F164C] group-hover:bg-[#8F164C] group-hover:text-white text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-300"
                  style={{
                    fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  }}
                >
                  <span>Book This Service</span>
                  <span className="text-sm">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Gallery Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <motion.a
            href="#booking"
            whileHover={{ y: -2, boxShadow: "0 10px 28px rgba(143, 22, 76, 0.28)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-[#8F164C] text-white px-8 py-4 text-[11px] font-semibold tracking-[0.22em] uppercase transition-all duration-300 shadow-sm"
            style={{
              fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
            }}
          >
            <span>View Mehendi Gallery</span>
            <span className="text-sm">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}