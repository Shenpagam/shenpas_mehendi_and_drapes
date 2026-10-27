"use client";

import React from "react";
import { motion } from "framer-motion";

const keyPoints = [
  "BEAUTIFULLY DETAILED",
  "TRADITIONAL ELEGANCE",
  "FOR YOUR SPECIAL MOMENTS",
];

export default function KeyPointsStrip() {
  return (
    <section
      aria-label="Core Brand Attributes"
      className="w-full bg-[#FCF9EA] border-y border-[#B99A72]/40 py-5 sm:py-6 relative z-10"
      style={{ backgroundColor: "#FCF9EA" }}
    >
      <div className="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-wrap items-center justify-center gap-7 sm:gap-12 md:gap-16 lg:gap-24">
        {keyPoints.map((point, index) => (
          <motion.div
            key={point}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center gap-3 select-none"
          >
            {/* 4-pointed diamond star in primary maroon #8F164C */}
            <span
              className="text-[#8F164C] text-[13px] sm:text-[15px] leading-none shrink-0"
              aria-hidden="true"
            >
              ✦
            </span>
            <span
              className="text-[#75451F] text-[11.5px] sm:text-[13px] font-semibold tracking-[0.24em] uppercase whitespace-nowrap"
              style={{
                fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
              }}
            >
              {point}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
