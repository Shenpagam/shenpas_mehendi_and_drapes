/**
 * Site Configuration — Shenpa's Mehendi & Drapes
 * 
 * Single source of truth for site URLs, metadata, contact info, and local business data.
 * When a custom domain is purchased, simply update NEXT_PUBLIC_SITE_URL in Render environment
 * variables or update the fallback URL below.
 */

export const siteConfig = {
  name: "Shenpa's Mehendi & Drapes",
  shortName: "Shenpa's",
  tagline: "Tradition, Styled Beautifully",
  description:
    "Artisanal bridal mehendi designs, organic henna artistry, and elegant saree draping in Srivilliputtur, Virudhunagar district, and across Tamil Nadu. Crafted with tradition, devotion, and attention to every detail.",
  // Production URL (defaults to Render Free Static Site subdomain, easily overridden by custom domain)
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://shenpas-mehendi-and-drapes.onrender.com",
  locale: "en_IN",
  founder: "Shenpagam",
  
  // Contact & Social Details (Verified from existing project files)
  contact: {
    phone: "+91 63827 12815",
    phoneHref: "tel:+916382712815",
    telephone: "+916382712815",
    whatsapp: "https://wa.me/916382712815?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services",
    instagram: "https://www.instagram.com/shenpa_mehendi_drapes?psln=YmdjdTc3bWd4ODNw",
    instagramHandle: "@shenpas_mehendi_drapes",
  },

  // Local SEO & Geographical Targeting
  location: {
    addressLocality: "Srivilliputtur",
    addressRegion: "Tamil Nadu",
    postalCode: "626125",
    addressCountry: "IN",
    serviceArea: [
      "Srivilliputtur",
      "Virudhunagar",
      "Rajapalayam",
      "Sivakasi",
      "Madurai",
      "Tamil Nadu",
    ],
    serviceMode: "Studio & On-Site Venue Services (By Advance Appointment)",
    // Note: If you register a public physical storefront or Google Business Profile with a specific street address,
    // add streetAddress: "..." here.
    latitude: 9.5133,
    longitude: 77.6327,
  },

  // Service Offerings & Pricing Catalog (Exact figures from verified website price list)
  services: [
    {
      name: "Hand Mehendi",
      startingPrice: "1500",
      currency: "INR",
      description: "Intricate Arabic, Indo-Western, Mandala, and traditional bridal hand henna artistry.",
    },
    {
      name: "Feet Mehendi",
      startingPrice: "1200",
      currency: "INR",
      description: "Graceful anklet-style, floral, and traditional bridal feet henna patterns.",
    },
    {
      name: "Saree Draping",
      startingPrice: "300",
      currency: "INR",
      description: "Professional on-site traditional and contemporary saree draping for brides and family.",
    },
    {
      name: "Saree Box Folding",
      startingPrice: "400",
      currency: "INR",
      description: "Compact trousseau preservation and crisp pleating ready for travel and ceremonies.",
    },
    {
      name: "Saree Hanger Folding",
      startingPrice: "500",
      currency: "INR",
      description: "Ready-to-wear vertical pleating preserved on wooden hangers for instant bridal wearing.",
    },
    {
      name: "Complete Bridal Combo Package",
      startingPrice: "3500",
      currency: "INR",
      description: "Comprehensive bridal styling package combining full bridal mehendi and saree draping.",
    },
  ],

  // 5 Essential FAQs for Mehendi Services
  faqs: [
    {
      question: "How can I book a mehendi appointment with Shenpa’s?",
      answer:
        "You can contact us through our website’s booking form or social media. Share your event date, location, preferred design, and service requirements so we can check availability.",
    },
    {
      question: "Do you travel to Chennai, Coimbatore, Madurai, Trichy, and other Tamil Nadu cities?",
      answer:
        "Travel availability depends on the event location, date, and booking requirements. Contact us with your city or venue details to confirm whether we can accommodate your booking.",
    },
    {
      question: "How much does mehendi application cost?",
      answer:
        "Our displayed prices start at ₹150 for selected hand and feet designs. Hand mehendi prices vary by coverage and whether you choose one side or both sides. Please check our price list for details.",
    },
    {
      question: "What types of mehendi designs do you offer?",
      answer:
        "Our listed services include hand mehendi, feet mehendi, and customised designs. You can discuss your preferred pattern and coverage before confirming your appointment.",
    },
    {
      question: "Are travel charges included in the service price?",
      answer:
        "Travel charges may apply depending on your location. We will clarify any applicable travel costs when confirming your booking.",
    },
  ],
};
