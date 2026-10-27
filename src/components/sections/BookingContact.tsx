"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import OrnateButton from "@/components/ui/OrnateButton";
import SectionMotif from "@/components/ui/SectionMotif";
import KolamSectionDecorations from "@/components/ui/KolamSectionDecorations";
import CustomDatePicker from "@/components/ui/CustomDatePicker";
import { useForm, ValidationError } from "@formspree/react";

export default function BookingContact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [state, handleSubmit, reset] = useForm("moeeeowr");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Hand Mehendi (From ₹1,500)",
    other: "",
    eventDate: "",
    notes: "",
  });

  const handleReset = () => {
    reset();
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "Hand Mehendi (From ₹1,500)",
      other: "",
      eventDate: "",
      notes: "",
    });
  };

  return (
    <section
      id="contact"
      ref={ref}
      aria-label="Booking and Contact"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#FCF9EA] border-t border-[#B99A72]/25 overflow-hidden scroll-mt-20"
      style={{ backgroundColor: "#FCF9EA" }}
    >
      {/* Symmetrical Flanking Kolams */}
      <KolamSectionDecorations size="lg" opacity="opacity-20 sm:opacity-30" maxWidth="max-w-[1480px]" />

      <div id="booking" className="absolute -top-24" />
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
              className="text-[12px] font-semibold tracking-[0.28em] uppercase text-[#75451F]"
              style={{
                fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
              }}
            >
              Reserve Your Occasion
            </span>
            <span className="w-8 h-[1px] bg-[#B99A72]" />
          </div>

          <h2
            className="text-[36px] sm:text-[46px] lg:text-[52px] leading-tight text-[#8F164C] mb-3 font-semibold"
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            }}
          >
            Booking &amp; Consultation
          </h2>

          <p
            className="text-[17px] sm:text-[19px] text-[#75451F]/90 font-[600]"
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            }}
          >
            Let us make your special moments feel even more beautiful.
          </p>

          {/* Subtle Decorative Separator Motif */}
          <div className="flex justify-center mt-4">
            <SectionMotif withLines={true} size="md" color="#8F164C" />
          </div>
        </motion.div>

        {/* ── Main Two-Column Layout: Form + Contact Area ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-[1120px] mx-auto items-start">
          
          {/* ═════════════════════════════════════════════════
              LEFT: Premium Enquiry Panel (~7 cols)
             ═════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-[#FCF9EA] border-[1.5px] border-[#B99A72]/50 p-6 sm:p-10 shadow-lg relative"
          >
            {/* Top gold corner accent */}
            <div className="absolute top-0 left-0 w-8 h-[2px] bg-[#B99A72]" />
            <div className="absolute top-0 left-0 w-[2px] h-8 bg-[#B99A72]" />
            <div className="absolute top-0 right-0 w-8 h-[2px] bg-[#B99A72]" />
            <div className="absolute top-0 right-0 w-[2px] h-8 bg-[#B99A72]" />

            <h3
              className="text-[26px] sm:text-[30px] font-bold text-[#8F164C] mb-2 leading-tight"
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
              }}
            >
              Send an Enquiry
            </h3>
            <p
              className="text-[13px] text-[#75451F]/80 font-medium mb-6"
              style={{
                fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
              }}
            >
              Fill out your details below and our team will get back to confirm your appointment.
            </p>

            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#8F164C]/5 border border-[#8F164C]/30 p-8 text-center my-6 rounded-2xl"
              >
                <div className="text-[#8F164C] text-3xl mb-3">✦</div>
                <h4
                  className="text-[22px] font-semibold text-[#8F164C] mb-2"
                  style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  }}
                >
                  Thank You for Your Enquiry!
                </h4>
                <p
                  className="text-[12.5px] text-[#75451F] font-medium leading-relaxed mb-5 max-w-md mx-auto"
                  style={{
                    fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  }}
                >
                  We have received your appointment request. We will contact you via WhatsApp / Phone or Email within 24 hours to finalize date and custom package details.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.2em] uppercase text-[#8F164C] hover:text-[#75451F] underline underline-offset-4 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8F164C] focus-visible:ring-offset-2 select-none"
                  style={{
                    fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                  }}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="client-name"
                    className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#75451F] mb-1.5"
                    style={{
                      fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                    }}
                  >
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    id="client-name"
                    name="name"
                    required
                    disabled={state.submitting}
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FAF6ED] border border-[#B99A72]/50 px-4 py-3 text-[14px] text-[#75451F] placeholder-[#75451F]/40 focus:outline-none focus:border-[#8F164C] transition-colors disabled:opacity-60"
                    style={{
                      fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                    }}
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-600 text-[11px] mt-1" />
                </div>

                {/* Email Address & Phone Number (2 cols) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="client-email"
                      className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#75451F] mb-1.5"
                      style={{
                        fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="client-email"
                      name="email"
                      required
                      disabled={state.submitting}
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF6ED] border border-[#B99A72]/50 px-4 py-3 text-[14px] text-[#75451F] placeholder-[#75451F]/40 focus:outline-none focus:border-[#8F164C] transition-colors disabled:opacity-60"
                      style={{
                        fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                      }}
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 text-[11px] mt-1" />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="client-phone"
                      className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#75451F] mb-1.5"
                      style={{
                        fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                      }}
                    >
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      id="client-phone"
                      name="phone"
                      required
                      disabled={state.submitting}
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FAF6ED] border border-[#B99A72]/50 px-4 py-3 text-[14px] text-[#75451F] placeholder-[#75451F]/40 focus:outline-none focus:border-[#8F164C] transition-colors disabled:opacity-60"
                      style={{
                        fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                      }}
                    />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-600 text-[11px] mt-1" />
                  </div>
                </div>

                {/* Service Selection & Event Date (2 cols) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service */}
                  <div>
                    <label
                      htmlFor="service-select"
                      className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#75451F] mb-1.5"
                      style={{
                        fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                      }}
                    >
                      Service Required *
                    </label>
                    <select
                      id="service-select"
                      name="service"
                      disabled={state.submitting}
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#FAF6ED] border border-[#B99A72]/50 px-4 py-3 text-[13.5px] text-[#75451F] focus:outline-none focus:border-[#8F164C] transition-colors disabled:opacity-60"
                      style={{
                        fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                      }}
                    >
                      <option value="Hand Mehendi (From ₹1,500)">Hand Mehendi (From ₹1,500)</option>
                      <option value="Feet Mehendi (From ₹1,200)">Feet Mehendi (From ₹1,200)</option>
                      <option value="Saree Draping (₹300)">Saree Draping (₹300)</option>
                      <option value="Saree Box Folding (₹400)">Saree Box Folding (₹400)</option>
                      <option value="Saree Hanger Folding (₹500)">Saree Hanger Folding (₹500)</option>
                      <option value="Complete Bridal Combo Package">Complete Bridal Combo Package</option>
                      <option value="other">Other (Custom Request)</option>
                    </select>
                    <ValidationError prefix="Service" field="service" errors={state.errors} className="text-red-600 text-[11px] mt-1" />
                  </div>

                  {/* Event Date */}
                  <div>
                    <label
                      htmlFor="event-date"
                      className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#75451F] mb-1.5"
                      style={{
                        fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                      }}
                    >
                      Event Date *
                    </label>
                    <CustomDatePicker
                      id="event-date"
                      name="eventDate"
                      required
                      disabled={state.submitting}
                      value={formData.eventDate}
                      onChange={(dateStr) => setFormData({ ...formData, eventDate: dateStr })}
                    />
                    <ValidationError prefix="Event Date" field="eventDate" errors={state.errors} className="text-red-600 text-[11px] mt-1" />
                  </div>
                </div>

                {/* Specify Other Service (Conditional) */}
                {formData.service === "other" && (
                  <div>
                    <label
                      htmlFor="other-service"
                      className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#75451F] mb-1.5"
                      style={{
                        fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                      }}
                    >
                      Specify Custom Request *
                    </label>
                    <input
                      type="text"
                      id="other-service"
                      name="otherService"
                      required
                      disabled={state.submitting}
                      placeholder="e.g. Saree pleating for 4 bridesmaids & custom portrait henna"
                      value={formData.other}
                      onChange={(e) => setFormData({ ...formData, other: e.target.value })}
                      className="w-full bg-[#FAF6ED] border border-[#B99A72]/50 px-4 py-3 text-[14px] text-[#75451F] placeholder-[#75451F]/40 focus:outline-none focus:border-[#8F164C] transition-colors disabled:opacity-60"
                      style={{
                        fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                      }}
                    />
                    <ValidationError prefix="Other Service" field="otherService" errors={state.errors} className="text-red-600 text-[11px] mt-1" />
                  </div>
                )}

                {/* Additional Notes / Details */}
                <div>
                  <label
                    htmlFor="notes"
                    className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#75451F] mb-1.5"
                    style={{
                      fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                    }}
                  >
                    Special Notes / Event Details
                  </label>
                  <textarea
                    id="notes"
                    name="message"
                    rows={3}
                    disabled={state.submitting}
                    placeholder="Mention event timing, location, or custom requirements..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#FAF6ED] border border-[#B99A72]/50 px-4 py-3 text-[14px] text-[#75451F] placeholder-[#75451F]/40 focus:outline-none focus:border-[#8F164C] transition-colors resize-none disabled:opacity-60"
                    style={{
                      fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                    }}
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-600 text-[11px] mt-1" />
                </div>

                {/* Top-level submission error banner */}
                {state.errors && !state.succeeded && (
                  <div className="p-3.5 rounded-xl border border-[#8F164C]/30 bg-[#8F164C]/5 text-[#8F164C] text-[12.5px] font-medium">
                    <p className="font-bold mb-0.5">Unable to send enquiry</p>
                    <p className="text-[12px] text-[#75451F]">
                      There was a problem submitting your request. Please check all fields or reach out directly via WhatsApp / phone.
                    </p>
                  </div>
                )}

                {/* Submit Button: "Send Enquiry" */}
                <div className="pt-2 flex justify-center">
                  <OrnateButton
                    type="submit"
                    className="w-[60%] sm:w-[50%]"
                    ariaLabel="Send Enquiry"
                    disabled={state.submitting}
                  >
                    {state.submitting ? (
                      <>
                        <span>Sending Enquiry...</span>
                        <span className="text-xs animate-spin inline-block">↻</span>
                      </>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <span className="text-sm font-bold leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </>
                    )}
                  </OrnateButton>
                </div>
              </form>
            )}
          </motion.div>

          {/* ═════════════════════════════════════════════════
              RIGHT: Contact Area (~5 cols)
             ═════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Contact Card */}
            <div className="bg-[#FCF9EA] border-[1.5px] border-[#B99A72]/40 p-6 sm:p-8 shadow-sm">
              <h4
                className="text-[26px] sm:text-[28px] font-bold text-[#8F164C] mb-2 leading-tight"
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                }}
              >
                Direct Contact 
              </h4>

              <p
                className="text-[14px] text-[#75451F]/80 font-medium mb-6 leading-relaxed"
                style={{
                  fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                }}
              >
                Prefer instant communication? Reach out directly via phone or social messaging.
              </p>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-center gap-3.5 p-3 bg-[#FCF9EA] border border-[#B99A72]/20">
                  <div className="w-8 h-8 rounded-full bg-[#8F164C]/10 text-[#8F164C] flex items-center justify-center shrink-0 text-sm">
                    📞
                  </div>
                  <div>
                    
                    <span
                      className="text-[9.5px] font-semibold tracking-[0.2em] uppercase text-[#75451F] block"
                      style={{
                        fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                      }}
                    >
                      Phone Inquiries
                    </span>
                    <a
                      href="tel:+916382712815"
                      className="text-[14px] font-semibold text-[#8F164C] hover:underline"
                      style={{
                        fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                      }}
                    >
                      +91 63827 12815
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-3.5 p-3 bg-[#FCF9EA] border border-[#B99A72]/20">
                  <div className="w-8 h-8 rounded-full bg-[#8F164C]/10 text-[#8F164C] flex items-center justify-center shrink-0 text-sm">
                    💬
                  </div>
                  <div>
                    <span
                      className="text-[9.5px] font-semibold tracking-[0.2em] uppercase text-[#75451F] block"
                      style={{
                        fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                      }}
                    >
                      WhatsApp Chat
                    </span>
                    <a
                      href="https://wa.me/916382712815?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] font-semibold text-[#8F164C] hover:underline"
                      style={{
                        fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                      }}
                    >
                      Chat on WhatsApp →
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-center gap-3.5 p-3 bg-[#FCF9EA] border border-[#B99A72]/20">
                  <div className="w-8 h-8 rounded-full bg-[#8F164C]/10 text-[#8F164C] flex items-center justify-center shrink-0 text-sm">
                    📷
                  </div>
                  <div>
                    <span
                      className="text-[9.5px] font-semibold tracking-[0.2em] uppercase text-[#75451F] block"
                      style={{
                        fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                      }}
                    >
                      Instagram Portfolio
                    </span>
                    <a
                      href="https://www.instagram.com/shenpa_mehendi_drapes?psln=YmdjdTc3bWd4ODNw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] font-semibold text-[#8F164C] hover:underline"
                      style={{
                        fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                      }}
                    >
                      @shenpas_mehendi_drapes
                    </a>
                  </div>
                </div>

                {/* Studio Location */}
                <div className="flex items-center gap-3.5 p-3 bg-[#FCF9EA] border border-[#B99A72]/20">
                  <div className="w-8 h-8 rounded-full bg-[#8F164C]/10 text-[#8F164C] flex items-center justify-center shrink-0 text-sm">
                    📍
                  </div>
                  <div>
                    <span
                      className="text-[9.5px] font-semibold tracking-[0.2em] uppercase text-[#75451F] block"
                      style={{
                        fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                      }}
                    >
                      Studio &amp; On-Site Services
                    </span>
                    <p
                      className="text-[13px] text-[#75451F] font-medium"
                      style={{
                        fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif",
                      }}
                    >
                      Srivilliputtur &amp; Tamil Nadu (By Appointment)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Note Box */}
            <div className="border border-[#B99A72]/30 p-5 bg-[#FCF9EA]">
              <p
                className="text-[16px] font-bold text-[#75451F]/80 leading-relaxed"
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                }}
              >
                &ldquo;We recommend booking 2 to 4 weeks in advance for bridal peak wedding dates. On-site venue visits and home sessions available upon consultation.&rdquo;
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}