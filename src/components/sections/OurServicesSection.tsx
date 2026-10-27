"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OrnateButton from "@/components/ui/OrnateButton";
import SectionMotif from "@/components/ui/SectionMotif";
import KolamSectionDecorations from "@/components/ui/KolamSectionDecorations";

export default function OurServicesSection() {
  const [activeModal, setActiveModal] = useState<"mehendi" | "saree" | null>(null);

  return (
    <section
      id="services"
      aria-label="Our Services"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#FCF9EA] overflow-hidden"
      style={{ backgroundColor: "#FCF9EA" }}
    >
      {/* ── Background Subtle Glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(circle at 10% 20%, rgba(185, 154, 114, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(143, 22, 76, 0.04) 0%, transparent 50%)
          `,
        }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* ── Section Header ── */}
        <div className="text-center max-w-[820px] mx-auto mb-12 sm:mb-16">
          {/* Top Lotus Motif & Eyebrow */}
          <div className="flex flex-col items-center justify-center gap-2 mb-3">
            {/* <SectionMotif withLines={false} size="md" color="#8F164C" className="mb-1" /> */}
            <div className="flex items-center justify-center gap-3">
              {/* <span className="w-8 sm:w-12 h-[1px] bg-[#B99A72]" /> */}
              <span
                className="text-[12px] sm:text-[12px] font-semibold tracking-[0.28em] uppercase text-[#75451F]"
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                }}
              >
                OUR SERVICES
              </span>
              {/* <span className="w-8 sm:w-12 h-[1px] bg-[#B99A72]" /> */}
            </div>
          </div>

          {/* Main Heading */}
          <h2
            className="text-[34px] sm:text-[44px] lg:text-[50px] leading-[1.14] text-[#8F164C] mb-4 font-semibold tracking-[-0.01em]"
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            }}
          >
            Traditional Artistry,
            <br />
            Tailored for Your Special Moments
          </h2>

          {/* Subtitle */}
          <p
            className="text-[14.5px] sm:text-[16px] text-[#75451F]/90 font-medium leading-[1.7] max-w-[620px] mx-auto mb-4"
            style={{
              fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
            }}
          >
            From intricate mehendi designs to elegant saree draping, we bring timeless beauty to your celebrations.
          </p>

          {/* Decorative Section Separator Motif */}
          <div className="flex justify-center mt-4">
            <SectionMotif withLines={true} size="md" color="#8F164C" />
          </div>
        </div>

        {/* ── Two Arch-Shaped Cards Container with Symmetrical Kolams ── */}
        <div className="relative">
          {/* Two Symmetrical Kolam Decorations Centered with Cards */}
          <KolamSectionDecorations size="lg" opacity="opacity-25 sm:opacity-35" maxWidth="max-w-[1360px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-[1060px] mx-auto items-stretch">
          
          {/* ═════════════════════════════════════════════════
              CARD 1: Mehendi Services (Arch-Shaped Card)
             ═════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-[#FCF9EA] border-[1.5px] border-[#B99A72] rounded-t-[190px] sm:rounded-t-[220px] rounded-b-3xl sm:rounded-b-[2rem] pt-10 sm:pt-12 pb-6 sm:pb-8 px-6 sm:px-8 flex flex-col items-center text-center shadow-[0_10px_30px_rgba(117,69,31,0.06)] group hover:border-[#8F164C]/60 hover:shadow-[0_16px_40px_rgba(143,22,76,0.08)] transition-all duration-300 w-full max-w-[450px] mx-auto h-full justify-between"
          >
            {/* Inner hairline arch outline for authentic traditional architectural framing */}
            <div
              className="absolute inset-2 sm:inset-2.5 rounded-t-[178px] sm:rounded-t-[208px] rounded-b-[20px] sm:rounded-b-[24px] border border-[#B99A72]/30 pointer-events-none"
              aria-hidden="true"
            />

            {/* Top Arch Apex Motif & Card Info */}
            <div className="flex flex-col items-center w-full z-10">
              <SectionMotif withLines={false} size="sm" color="#8F164C" className="mb-2.5 sm:mb-3" />

              {/* Card Heading */}
              <h3
                className="text-[28px] sm:text-[34px] font-semibold text-[#8F164C] mb-1.5 leading-tight"
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                }}
              >
                Mehendi Services
              </h3>

              {/* Card Tagline */}
              <p
                className="text-[13px] sm:text-[14px] text-[#75451F] font-normal mb-3 sm:mb-4 tracking-wide"
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                }}
              >
                Art on Your Hands, Joy in Your Heart
              </p>

              {/* Subtle gold divider */}
              <div className="w-14 h-[1px] bg-[#B99A72]/40 mb-5 sm:mb-6" />

              {/* 3 Circular Feature Icons */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full mb-3 sm:mb-4">
                {/* Feature 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full border border-[#B99A72]/60 bg-[#FCF9EA] flex items-center justify-center text-[#75451F] mb-1.5 shadow-xs group-hover:border-[#8F164C]/50 transition-colors">
                    {/* Mandala Floral Icon */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#75451F" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                  </div>
                  <span
                    className="text-[11px] sm:text-[12px] font-medium text-[#75451F] text-center leading-tight"
                    style={{
                      fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                    }}
                  >
                    Hand<br />Mehendi
                  </span>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full border border-[#B99A72]/60 bg-[#FCF9EA] flex items-center justify-center text-[#75451F] mb-1.5 shadow-xs group-hover:border-[#8F164C]/50 transition-colors">
                    {/* Feet Motif Icon */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#75451F" strokeWidth="1.5">
                      <ellipse cx="9" cy="14" rx="3.5" ry="5.5" />
                      <circle cx="8" cy="5.5" r="1.3" />
                      <circle cx="10.8" cy="6.2" r="1.1" />
                      <circle cx="13" cy="7.3" r="1" />
                      <circle cx="14.8" cy="9" r="0.8" />
                    </svg>
                  </div>
                  <span
                    className="text-[11px] sm:text-[12px] font-medium text-[#75451F] text-center leading-tight"
                    style={{
                      fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                    }}
                  >
                    Feet<br />Mehendi
                  </span>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center">
                  <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full border border-[#B99A72]/60 bg-[#FCF9EA] flex items-center justify-center text-[#75451F] mb-1.5 shadow-xs group-hover:border-[#8F164C]/50 transition-colors">
                    {/* Portrait / Custom Lotus Icon */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#75451F" strokeWidth="1.5">
                      <path d="M12 3c-2 3-5 5-5 8a5 5 0 0 0 10 0c0-3-3-5-5-8z" />
                      <path d="M7 11c-2 1-4 3-4 6 0 1 2 2 4 2" />
                      <path d="M17 11c2 1 4 3 4 6 0 1-2 2-4 2" />
                    </svg>
                  </div>
                  <span
                    className="text-[11px] sm:text-[12px] font-medium text-[#75451F] text-center leading-tight"
                    style={{
                      fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                    }}
                  >
                    Portrait &amp;<br />Customised Designs
                  </span>
                </div>
              </div>
            </div>

            {/* View Price List Button using OrnateButton */}
            <div className="mt-3 sm:mt-4 z-10 flex justify-center">
              <OrnateButton
                href="#mehendi-services"
                ariaLabel="View Mehendi Price List"
              >
                <span>View Price List</span>
                <span className="text-sm font-bold leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
              </OrnateButton>
            </div>
          </motion.div>

          {/* ═════════════════════════════════════════════════
              CARD 2: Saree Draping Services (Arch-Shaped Card)
             ═════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative bg-[#FCF9EA] border-[1.5px] border-[#B99A72] rounded-t-[190px] sm:rounded-t-[220px] rounded-b-3xl sm:rounded-b-[2rem] pt-10 sm:pt-12 pb-6 sm:pb-8 px-6 sm:px-8 flex flex-col items-center text-center shadow-[0_10px_30px_rgba(117,69,31,0.06)] group hover:border-[#8F164C]/60 hover:shadow-[0_16px_40px_rgba(143,22,76,0.08)] transition-all duration-300 w-full max-w-[450px] mx-auto h-full justify-between"
          >
            {/* Inner hairline arch outline for authentic traditional architectural framing */}
            <div
              className="absolute inset-2 sm:inset-2.5 rounded-t-[178px] sm:rounded-t-[208px] rounded-b-[20px] sm:rounded-b-[24px] border border-[#B99A72]/30 pointer-events-none"
              aria-hidden="true"
            />

            {/* Top Arch Apex Motif & Card Info */}
            <div className="flex flex-col items-center w-full z-10">
              <SectionMotif withLines={false} size="sm" color="#8F164C" className="mb-2.5 sm:mb-3" />

              {/* Card Heading */}
              <h3
                className="text-[28px] sm:text-[34px] font-semibold text-[#8F164C] mb-1.5 leading-tight"
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                }}
              >
                Saree Draping Services
              </h3>

              {/* Card Tagline */}
              <p
                className="text-[13px] sm:text-[14px] text-[#75451F] font-normal mb-3 sm:mb-4 tracking-wide"
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                }}
              >
                Elegant Drapes, Effortless Grace
              </p>

              {/* Subtle gold divider */}
              <div className="w-14 h-[1px] bg-[#B99A72]/40 mb-5 sm:mb-6" />

              {/* 3 Circular Feature Icons */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full mb-3 sm:mb-4">
                {/* Feature 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full border border-[#B99A72]/60 bg-[#FCF9EA] flex items-center justify-center text-[#75451F] mb-1.5 shadow-xs group-hover:border-[#8F164C]/50 transition-colors">
                    {/* Folded Box Icon */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#75451F" strokeWidth="1.5">
                      <rect x="4" y="6" width="16" height="5" rx="1" />
                      <rect x="4" y="13" width="16" height="5" rx="1" />
                      <line x1="8" y1="6" x2="8" y2="18" />
                    </svg>
                  </div>
                  <span
                    className="text-[11px] sm:text-[12px] font-medium text-[#75451F] text-center leading-tight"
                    style={{
                      fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                    }}
                  >
                    Box<br />Folding
                  </span>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full border border-[#B99A72]/60 bg-[#FCF9EA] flex items-center justify-center text-[#75451F] mb-1.5 shadow-xs group-hover:border-[#8F164C]/50 transition-colors">
                    {/* Hanger Icon */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#75451F" strokeWidth="1.5">
                      <path d="M12 4a3 3 0 0 1 3 3c0 1.5-1 2-2 2.5L2 16h20L13 9.5" />
                      <line x1="2" y1="16" x2="22" y2="16" />
                    </svg>
                  </div>
                  <span
                    className="text-[11px] sm:text-[12px] font-medium text-[#75451F] text-center leading-tight"
                    style={{
                      fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                    }}
                  >
                    Hanger<br />Folding
                  </span>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center">
                  <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full border border-[#B99A72]/60 bg-[#FCF9EA] flex items-center justify-center text-[#75451F] mb-1.5 shadow-xs group-hover:border-[#8F164C]/50 transition-colors">
                    {/* Saree Draping Silhouette Icon */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#75451F" strokeWidth="1.5">
                      <circle cx="12" cy="4" r="2" />
                      <path d="M9 8h6l1 6-3 8-2-3-2 3-1-8 1-6z" />
                      <path d="M9 10l5 4" />
                    </svg>
                  </div>
                  <span
                    className="text-[11px] sm:text-[12px] font-medium text-[#75451F] text-center leading-tight"
                    style={{
                      fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                    }}
                  >
                    Saree<br />Draping
                  </span>
                </div>
              </div>
            </div>

            {/* View Price List Button using OrnateButton */}
            <div className="mt-3 sm:mt-4 z-10 flex justify-center">
              <OrnateButton
                href="#saree-draping-services"
                ariaLabel="View Saree Draping Price List"
              >
                <span>View Price List</span>
                <span className="text-sm font-bold leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
              </OrnateButton>
            </div>
          </motion.div>
        </div>
      </div>
    </div>

      {/* ── Pricing Detail Modal / Drawer ── */}
      <AnimatePresence>
        {activeModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[500px] bg-[#FCF9EA] border-[1.5px] border-[#B99A72] rounded-3xl p-6 sm:p-8 shadow-2xl"
              style={{ backgroundColor: "#FCF9EA" }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full border border-[#B99A72]/40 text-[#75451F] hover:bg-[#8F164C] hover:text-white hover:border-[#8F164C] hover:-translate-y-0.5 hover:shadow-md active:scale-95 transition-all duration-300 flex items-center justify-center font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8F164C] focus-visible:ring-offset-2"
                aria-label="Close modal"
              >
                ✕
              </button>

              {activeModal === "mehendi" ? (
                <div>
                  <div className="text-center mb-6">
                    <h3
                      className="text-[28px] sm:text-[32px] font-semibold text-[#8F164C] mb-1"
                      style={{
                        fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                      }}
                    >
                      Mehendi Price List
                    </h3>
                    <p className="text-[13px] text-[#75451F]">Art on Your Hands, Joy in Your Heart</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between p-3.5 rounded-xl border border-[#B99A72]/30 bg-[#FCF9EA]">
                      <div>
                        <p className="text-[14.5px] font-semibold text-[#8F164C]">Hand Mehendi</p>
                        <p className="text-[12px] text-[#75451F]">Bridal, Arabic &amp; Traditional designs</p>
                      </div>
                      <span className="text-[18px] font-bold text-[#8F164C]">₹1,500</span>
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-xl border border-[#B99A72]/30 bg-[#FCF9EA]">
                      <div>
                        <p className="text-[14.5px] font-semibold text-[#8F164C]">Feet Mehendi</p>
                        <p className="text-[12px] text-[#75451F]">Graceful bridal feet &amp; ankle bands</p>
                      </div>
                      <span className="text-[18px] font-bold text-[#8F164C]">₹1,200</span>
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-xl border border-[#B99A72]/30 bg-[#FCF9EA]">
                      <div>
                        <p className="text-[14.5px] font-semibold text-[#8F164C]">Portrait &amp; Customised</p>
                        <p className="text-[12px] text-[#75451F]">Personalized love stories &amp; figures</p>
                      </div>
                      <span className="text-[14px] font-semibold text-[#75451F]">On Request</span>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <OrnateButton href="#booking" onClick={() => setActiveModal(null)}>
                      <span>Book Appointment</span>
                      <span className="text-sm font-bold leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </OrnateButton>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text-center mb-6">
                    <h3
                      className="text-[28px] sm:text-[32px] font-semibold text-[#8F164C] mb-1"
                      style={{
                        fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                      }}
                    >
                      Saree Draping Price List
                    </h3>
                    <p className="text-[13px] text-[#75451F]">Elegant Drapes, Effortless Grace</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between p-3.5 rounded-xl border border-[#B99A72]/30 bg-[#FCF9EA]">
                      <div>
                        <p className="text-[14.5px] font-semibold text-[#8F164C]">Box Folding</p>
                        <p className="text-[12px] text-[#75451F]">Compact trousseau preservation</p>
                      </div>
                      <span className="text-[18px] font-bold text-[#8F164C]">₹400</span>
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-xl border border-[#B99A72]/30 bg-[#FCF9EA]">
                      <div>
                        <p className="text-[14.5px] font-semibold text-[#8F164C]">Hanger Folding</p>
                        <p className="text-[12px] text-[#75451F]">Ready-to-wear vertical pleating</p>
                      </div>
                      <span className="text-[18px] font-bold text-[#8F164C]">₹500</span>
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-xl border border-[#B99A72]/30 bg-[#FCF9EA]">
                      <div>
                        <p className="text-[14.5px] font-semibold text-[#8F164C]">Saree Draping</p>
                        <p className="text-[12px] text-[#75451F]">On-site traditional &amp; modern styles</p>
                      </div>
                      <span className="text-[18px] font-bold text-[#8F164C]">₹300</span>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <OrnateButton href="#booking" onClick={() => setActiveModal(null)}>
                      <span>Book Appointment</span>
                      <span className="text-sm font-bold leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </OrnateButton>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
