"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import SectionMotif from "@/components/ui/SectionMotif";
import KolamSectionDecorations from "@/components/ui/KolamSectionDecorations";
import { FAQSchema } from "@/components/seo/JsonLd";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#FCF9EA] border-t border-[#B99A72]/30 overflow-hidden"
      style={{ backgroundColor: "#FCF9EA" }}
    >
      {/* Schema.org FAQPage Structured Data */}
      <FAQSchema />

      {/* Symmetrical Flanking Kolam Ornaments */}
      <KolamSectionDecorations size="lg" opacity="opacity-20 sm:opacity-30" maxWidth="max-w-[1480px]" />

      <div className="relative z-10 max-w-[980px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#B99A72]" />
            <span
              className="text-[11.5px] font-semibold tracking-[0.28em] uppercase text-[#75451F]"
              style={{
                fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
              }}
            >
              Helpful Insights &amp; Guidance
            </span>
            <span className="w-8 h-[1px] bg-[#B99A72]" />
          </div>

          <h2
            className="text-[32px] sm:text-[42px] lg:text-[48px] leading-tight text-[#8F164C] mb-3 font-semibold"
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            }}
          >
            Frequently Asked Questions About Mehendi Services
          </h2>

          <p
            className="text-[14px] sm:text-[16px] text-[#75451F]/90 font-medium max-w-2xl mx-auto"
            style={{
              fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
            }}
          >
            Find essential answers regarding booking appointments, service locations across Tamil Nadu, transparent pricing, custom design options, and travel charges.
          </p>

          <div className="flex justify-center mt-4">
            <SectionMotif withLines={true} size="sm" color="#8F164C" />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-trigger-${index}`;
            const panelId = `faq-content-${index}`;

            return (
              <div
                key={faq.question}
                className={`border-[1.5px] transition-colors rounded-xl overflow-hidden ${
                  isOpen
                    ? "border-[#8F164C]/70 bg-[#FAF6E6] shadow-md"
                    : "border-[#B99A72]/40 bg-[#FAF6E6]/60 hover:border-[#8F164C]/50"
                }`}
              >
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 sm:gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8F164C] select-none"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="shrink-0 text-[11px] sm:text-[12px] font-bold text-[#8F164C] bg-[#8F164C]/10 rounded-full w-7 h-7 flex items-center justify-center">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="text-[16.5px] sm:text-[18.5px] font-semibold text-[#8F164C] leading-snug"
                      style={{
                        fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                      }}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`w-7 h-7 rounded-full border border-[#B99A72]/50 flex items-center justify-center shrink-0 text-[#8F164C] text-sm font-bold transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-[#8F164C] text-[#FCF9EA]" : "bg-transparent"
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 border-t border-[#B99A72]/20 pl-14 sm:pl-16">
                        <p
                          className="text-[13px] sm:text-[14px] text-[#75451F]/90 font-medium leading-[1.8] pt-3"
                          style={{
                            fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                          }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-10 p-5 rounded-xl border border-[#B99A72]/30 bg-[#FAF6E6] text-center">
          <p
            className="text-[13px] sm:text-[14px] text-[#75451F] font-medium leading-relaxed"
            style={{
              fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
            }}
          >
            Have a specialized enquiry or custom trousseau requirement? Reach out to us directly at{" "}
            <a
              href="tel:+916382712815"
              className="text-[#8F164C] font-semibold hover:underline"
            >
              +91 63827 12815
            </a>{" "}
            or message us on{" "}
            <a
              href="https://wa.me/916382712815?text=Hello%2C%20I%20have%20a%20question%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8F164C] font-semibold hover:underline"
            >
              WhatsApp
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
