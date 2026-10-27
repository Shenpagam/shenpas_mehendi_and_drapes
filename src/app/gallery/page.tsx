import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Artistry Gallery | Bridal Henna & Saree Pleating Portfolio",
  description:
    "Explore handcrafted bridal mehendi artistry, intricate palm and feet henna patterns, and professional saree box and hanger pleating work by Shenpa's in Srivilliputtur, Tamil Nadu.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: `${siteConfig.url}/gallery`,
    siteName: siteConfig.name,
    title: "Artistry Gallery | Shenpa's Mehendi & Drapes",
    description:
      "Explore handcrafted bridal mehendi designs, organic henna patterns, and professional saree draping by Shenpa's in Srivilliputtur, Tamil Nadu.",
    images: [
      {
        url: "/images/showcase-mehendi-hand.png",
        width: 1024,
        height: 1536,
        alt: "Artistry Gallery — Shenpa's Mehendi & Drapes Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artistry Gallery | Shenpa's Mehendi & Drapes",
    description:
      "Handcrafted bridal mehendi designs and professional saree pleating portfolio in Tamil Nadu.",
    images: ["/images/showcase-mehendi-hand.png"],
  },
};

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Artistry Gallery", url: `${siteConfig.url}/gallery` },
        ]}
      />
      <GalleryClient />
    </>
  );
}
