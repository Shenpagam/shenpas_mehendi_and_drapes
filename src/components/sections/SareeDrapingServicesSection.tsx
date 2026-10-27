"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import OrnateButton from "@/components/ui/OrnateButton";
import SectionMotif from "@/components/ui/SectionMotif";
import KolamSectionDecorations from "@/components/ui/KolamSectionDecorations";

interface SareeServiceCardProps {
  title: string;
  subtitle: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  delay?: number;
}

function SareeServiceCard({
  title,
  subtitle,
  price,
  imageSrc,
  imageAlt,
  delay = 0,
}: SareeServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="relative bg-[#FCF9EA] border-[1.5px] border-[#B99A72] rounded-3xl p-6 sm:p-7 flex flex-col items-center text-center shadow-[0_10px_30px_rgba(117,69,31,0.06)] group hover:border-[#8F164C]/60 hover:shadow-[0_14px_35px_rgba(143,22,76,0.08)] transition-all duration-300 w-full"
    >
      {/* Traditional Corner Flourishes */}
      <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-[1.5px] border-l-[1.5px] border-[#B99A72]/60 rounded-tl-sm pointer-events-none" />
      <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-[1.5px] border-r-[1.5px] border-[#B99A72]/60 rounded-tr-sm pointer-events-none" />
      <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-[1.5px] border-l-[1.5px] border-[#B99A72]/60 rounded-bl-sm pointer-events-none" />
      <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-[1.5px] border-r-[1.5px] border-[#B99A72]/60 rounded-br-sm pointer-events-none" />

      {/* ── Arch-Shaped Image Frame ── */}
      <div className="relative w-full max-w-[280px] sm:max-w-[300px] aspect-[3/4] rounded-t-[140px] sm:rounded-t-[150px] rounded-b-xl overflow-hidden border-[1.5px] border-[#B99A72] mb-5 shadow-xs bg-[#FCF9EA]">
        {/* Inner hairline border */}
        <div className="absolute inset-1.5 rounded-t-[132px] rounded-b-lg border border-[#B99A72]/40 z-10 pointer-events-none" />

        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 280px, (max-width: 1024px) 300px, 340px"
        />

        {/* Floating Maroon Price Badge */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full bg-[#8F164C] text-[#FCF9EA] text-sm sm:text-[15px] font-bold tracking-wider shadow-md border border-[#B99A72]/50 whitespace-nowrap">
          {price}
        </div>
      </div>

      {/* Service Title */}
      <h3
        className="text-[26px] sm:text-[30px] font-semibold text-[#8F164C] mb-1 leading-snug"
        style={{
          fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
        }}
      >
        {title}
      </h3>

      {/* Subtitle / Description */}
      <p
        className="text-[13px] sm:text-[14px] text-[#75451F] font-normal mb-4 tracking-wide"
        style={{
          fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
        }}
      >
        {subtitle}
      </p>

      {/* Decorative Gold Divider */}
      <div className="flex items-center justify-center gap-2 w-full max-w-[160px] mb-5">
        <span className="w-10 h-[1px] bg-[#B99A72]/50" />
        <span className="text-[#8F164C] text-xs">✦</span>
        <span className="w-10 h-[1px] bg-[#B99A72]/50" />
      </div>

      {/* CTA Button */}
      <div className="mt-auto pt-1">
        <OrnateButton href="#booking" ariaLabel={`Book ${title}`}>
          <span>Book Now</span>
          <span className="text-sm font-bold leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
        </OrnateButton>
      </div>
    </motion.div>
  );
}

export default function SareeDrapingServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const services = [
    {
      title: "Box Folding",
      subtitle: "Neat Box Pleats",
      price: "₹400",
      imageSrc: "/images/saree-box-folding.jpg",
      imageAlt: "Silk Saree with Neat Box Pleats Folding",
      delay: 0,
    },
    {
      title: "Hanger Folding",
      subtitle: "Ready-to-Hang Saree",
      price: "₹500",
      imageSrc: "/images/saree-hanger-folding.jpg",
      imageAlt: "Saree on Wooden Hanger Ready to Hang",
      delay: 0.15,
    },
    {
      title: "Saree Draping",
      subtitle: "Elegant, Neat Draping",
      price: "₹300",
      imageSrc: "/images/service-saree-photo.png",
      imageAlt: "Traditional Saree Draping on Model",
      delay: 0.3,
    },
  ];

  return (
    <section
      id="saree-draping-services"
      ref={ref}
      aria-label="Saree Draping Services"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#FCF9EA] border-t border-[#B99A72]/25 overflow-hidden scroll-mt-20"
      style={{ backgroundColor: "#FCF9EA" }}
    >
      {/* ── Background Subtle Radiance ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(circle at 15% 25%, rgba(185, 154, 114, 0.06) 0%, transparent 45%),
            radial-gradient(circle at 85% 75%, rgba(143, 22, 76, 0.05) 0%, transparent 45%)
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
              className="text-[12px] sm:text-[12px] font-semibold tracking-[0.28em] uppercase text-[#75451F]"
              style={{
                fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
              }}
            >
              DRAPING &amp; PLEATING CARE
            </span>
          </div>

          {/* Main Heading: "SAREE DRAPING SERVICES" */}
          <h2
            className="text-[34px] sm:text-[46px] lg:text-[52px] leading-[1.12] text-[#8F164C] mb-2.5 font-bold tracking-[0.02em]"
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            }}
          >
            Saree Draping Services
          </h2>

          {/* Subtitle: "Choose Your Perfect Service" */}
          <p
            className="text-[16px] sm:text-[18px] text-[#75451F]/90 font-[600] mb-3"
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            }}
          >
            Choose Your Perfect Service
          </p>

          {/* Subtle Decorative Separator Motif */}
          <div className="flex justify-center mt-3">
            <SectionMotif withLines={true} size="md" color="#8F164C" />
          </div>
        </motion.div>

        {/* ── Three Cards in One Row with Symmetrical Kolams ── */}
        <div className="relative">
          {/* Two Symmetrical Kolam Decorations Centered with Cards */}
          <KolamSectionDecorations size="lg" opacity="opacity-25 sm:opacity-35" maxWidth="max-w-[1380px]" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-[1160px] mx-auto items-stretch">
            {services.map((svc) => (
              <SareeServiceCard key={svc.title} {...svc} />
            ))}
          </div>
        </div>

        {/* ── Footer Notes Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 sm:mt-16 text-center max-w-xl mx-auto p-5 sm:p-6 rounded-2xl border border-[#B99A72]/40 bg-[#FCF9EA] shadow-xs relative"
        >
          {/* Decorative Corner Dots */}
          <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-[#B99A72]" />
          <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#B99A72]" />
          <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-[#B99A72]" />
          <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-[#B99A72]" />

          <p
            className="text-[12.5px] sm:text-[13.5px] text-[#75451F] font-normal tracking-wide mb-1.5"
            style={{
              fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
            }}
          >
            * Travel charges may apply depending on location
          </p>

          <p
            className="text-[13px] sm:text-[14.5px] font-bold text-[#8F164C] tracking-[0.2em] uppercase"
            style={{
              fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
            }}
          >
            DM FOR BOOKINGS &amp; DETAILS
          </p>
        </motion.div>
      </div>
    </section>
  );
}
