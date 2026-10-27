"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import OrnateButton from "@/components/ui/OrnateButton";
import SectionMotif from "@/components/ui/SectionMotif";
import KolamSectionDecorations from "@/components/ui/KolamSectionDecorations";

interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "mehendi" | "saree";
  subtitle: string;
  imageSrc: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Intricate Bridal Mehendi",
    category: "mehendi",
    subtitle: "Elbow-length bridal pattern with traditional lotus and peacock motifs",
    imageSrc: "/images/mehendi-hands-bridal.jpg",
  },
  {
    id: "2",
    title: "Neat Box Pleating Care",
    category: "saree",
    subtitle: "Crisp trousseau box folding with pristine pleat alignment",
    imageSrc: "/images/saree-box-folding.jpg",
  },
  {
    id: "3",
    title: "Graceful Bridal Feet Henna",
    category: "mehendi",
    subtitle: "Anklet-style intricate patterns tailored for wedding celebrations",
    imageSrc: "/images/showcase-mehendi-leg.png",
  },
  {
    id: "4",
    title: "Ready-to-Hang Saree Pleats",
    category: "saree",
    subtitle: "Vertical ironed pleating preserved on wooden hanger for instant wear",
    imageSrc: "/images/saree-hanger-folding.jpg",
  },
  {
    id: "5",
    title: "Mandala & Floral Palm Art",
    category: "mehendi",
    subtitle: "Classic symmetrical mandala design with fine fingertips work",
    imageSrc: "/images/mehendi-hands-mandala.jpg",
  },
  {
    id: "6",
    title: "Traditional Bridal Saree Draping",
    category: "saree",
    subtitle: "Flawless on-site draping with authentic South Indian pallu setting",
    imageSrc: "/images/service-saree-photo.png",
  },
  {
    id: "7",
    title: "Wrist & Bracelet Henna Details",
    category: "mehendi",
    subtitle: "Delicate wrist cuffs with botanical swirls and neat shading",
    imageSrc: "/images/mehendi-hands-wrist.jpg",
  },
  {
    id: "9",
    title: "Celebration Hand Henna",
    category: "mehendi",
    subtitle: "Contemporary Arabic-Indian fusion design for special events",
    imageSrc: "/images/showcase-mehendi-hand.png",
  },
];

export default function GalleryClient() {
  const [filter, setFilter] = useState<"all" | "mehendi" | "saree">("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => filter === "all" || item.category === filter
  );

  return (
    <main className="min-h-screen bg-[#FCF9EA] text-[#75451F]">
      <Navbar />

      {/* ── Gallery Hero Header ── */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-[#FCF9EA] border-b border-[#B99A72]/30 overflow-hidden">
        <KolamSectionDecorations size="lg" opacity="opacity-25 sm:opacity-35" maxWidth="max-w-[1480px]" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-10 text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-3.5">
            <span className="w-8 sm:w-12 h-[1px] bg-[#B99A72]" />
            <span
              className="text-[11px] sm:text-[12px] font-semibold tracking-[0.28em] uppercase text-[#75451F]"
              style={{
                fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
              }}
            >
              OUR PORTFOLIO &amp; SHOWCASE
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-[#B99A72]" />
          </div>

          {/* Heading */}
          <h1
            className="text-[38px] sm:text-[50px] lg:text-[58px] leading-[1.1] text-[#8F164C] mb-4 font-bold tracking-tight"
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            }}
          >
            The Artistry Gallery
          </h1>

          {/* Subtitle */}
          <p
            className="text-[15px] sm:text-[17px] text-[#75451F]/90 font-light max-w-[640px] mx-auto mb-6 leading-relaxed"
            style={{
              fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
            }}
          >
            Explore our curated collection of handcrafted mehendi artistry and precision saree draping, crafted with love and devotion for your most memorable milestones.
          </p>

          <SectionMotif withLines={true} size="md" color="#8F164C" className="justify-center mb-8" />

          {/* Category Filter Tabs with Symmetrical Kolams */}
          <div className="relative">
            <KolamSectionDecorations size="md" opacity="opacity-20 sm:opacity-30" maxWidth="max-w-[900px]" />

            <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-2">
            {[
              { id: "all", label: "All Artistry" },
              { id: "mehendi", label: "Mehendi Art" },
              { id: "saree", label: "Saree Draping" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as "all" | "mehendi" | "saree")}
                className={`px-5 sm:px-6 py-2.5 rounded-full text-[11.5px] sm:text-[12.5px] font-semibold tracking-[0.18em] uppercase transition-all duration-300 select-none hover:-translate-y-0.5 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8F164C] focus-visible:ring-offset-2 ${
                  filter === tab.id
                    ? "bg-[#8F164C] text-[#FCF9EA] shadow-md hover:shadow-lg border border-[#8F164C]"
                    : "bg-[#FAF6E6] text-[#75451F] border border-[#B99A72]/40 hover:border-[#8F164C]/60 hover:shadow-md"
                }`}
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                }}
              >
                {tab.label}
              </button>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery Grid Section ── */}
      <section className="relative py-14 sm:py-20 max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-12">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-[#FAF6E6] border border-[#B99A72]/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#8F164C]/50 transition-all duration-300 flex flex-col"
              >
                {/* Image Container with Arch Profile */}
                <div
                  className="relative w-full aspect-[4/5] overflow-hidden bg-[#FAF6E6] cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <Image
                    src={item.imageSrc}
                    alt={`${item.title} — ${item.subtitle}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <span className="text-[12px] font-semibold text-[#FCF9EA] tracking-[0.2em] uppercase">
                      Click to View Details ✦
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col justify-between grow">
                  <div>
                    <span className="inline-block text-[10px] font-bold tracking-[0.24em] uppercase text-[#8F164C] mb-1">
                      {item.category === "mehendi" ? "Mehendi Artistry" : "Saree Draping"}
                    </span>
                    <h2
                      className="text-[20px] sm:text-[22px] font-bold text-[#75451F] group-hover:text-[#8F164C] transition-colors leading-snug"
                      style={{
                        fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                      }}
                    >
                      {item.title}
                    </h2>
                    <p
                      className="text-[12.5px] text-[#75451F]/80 font-normal mt-1 leading-relaxed"
                      style={{
                        fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                      }}
                    >
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#B99A72]/20 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedImage(item)}
                      className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#8F164C] hover:text-[#75451F] transition-colors flex items-center gap-1 focus:outline-none"
                    >
                      <span>Explore</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ── Bottom Booking Prompt ── */}
      <section className="py-14 sm:py-18 bg-[#FCF9EA] border-t border-[#B99A72]/30 text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <SectionMotif withLines={false} size="sm" color="#8F164C" className="justify-center mb-3" />
          <h2
            className="text-[28px] sm:text-[36px] font-bold text-[#8F164C] mb-3"
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            }}
          >
            Love What You See?
          </h2>
          <p
            className="text-[13.5px] sm:text-[15px] text-[#75451F]/85 font-medium mb-6 leading-relaxed"
            style={{
              fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
            }}
          >
            Reserve your mehendi artistry session or saree pleating service in advance for weddings, Nichayathartham, Seemantham, and festive occasions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <OrnateButton href="/#booking" ariaLabel="Book Your Appointment">
              <span>Book Appointment</span>
              <span className="text-sm font-bold leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
            </OrnateButton>
            <Link
              href="/"
              className="group px-6 py-3 rounded-xl border border-[#B99A72] text-[#75451F] text-[11.5px] font-semibold tracking-[0.2em] uppercase hover:bg-[#FCF9EA] hover:border-[#8F164C] hover:text-[#8F164C] hover:-translate-y-0.5 hover:shadow-md active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8F164C] focus-visible:ring-offset-2 flex items-center gap-1.5"
              style={{
                fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
              }}
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Lightbox Modal ── */}
      <AnimatePresence>
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#FCF9EA] border-[1.5px] border-[#B99A72] rounded-3xl p-6 sm:p-8 shadow-2xl text-center"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full border border-[#B99A72] text-[#75451F] hover:bg-[#8F164C] hover:text-[#FCF9EA] hover:border-[#8F164C] hover:-translate-y-0.5 hover:shadow-md active:scale-95 transition-all duration-300 flex items-center justify-center font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8F164C] focus-visible:ring-offset-2"
                aria-label="Close lightbox"
              >
                ✕
              </button>

              <div className="relative w-full max-w-[340px] aspect-[4/5] mx-auto rounded-t-[140px] rounded-b-xl overflow-hidden border border-[#B99A72] mb-5 shadow-sm">
                <Image
                  src={selectedImage.imageSrc}
                  alt={`${selectedImage.title} — ${selectedImage.subtitle}`}
                  fill
                  className="object-cover"
                />
              </div>

              <h3
                className="text-[26px] sm:text-[30px] font-bold text-[#8F164C] mb-1"
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                }}
              >
                {selectedImage.title}
              </h3>
              <p
                className="text-[13px] sm:text-[14px] text-[#75451F] mb-6 leading-relaxed"
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                }}
              >
                {selectedImage.subtitle}
              </p>

              <div className="flex justify-center">
                <OrnateButton href="/#booking" onClick={() => setSelectedImage(null)}>
                  <span>Inquire for This Design</span>
                  <span className="text-sm font-bold leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
                </OrnateButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
