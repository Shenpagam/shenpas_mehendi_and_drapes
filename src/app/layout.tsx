import type { Metadata, Viewport } from "next";
import { Italiana, Cormorant_Garamond, Josefin_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { LocalBusinessSchema, WebSiteSchema } from "@/components/seo/JsonLd";
import HashScrollHandler from "@/components/navigation/HashScrollHandler";

const italiana = Italiana({
  weight: "400",
  variable: "--font-italiana",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

const josefinSans = Josefin_Sans({
  weight: ["200", "300", "400", "600"],
  variable: "--font-josefin",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#8F164C",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Shenpa's Mehendi & Drapes | Bridal Mehendi & Saree Draping in Srivilliputtur, Tamil Nadu",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Exquisite bridal mehendi artistry and graceful saree draping by Shenpa's in Srivilliputtur, Tamil Nadu. Organic henna designs, precision box folding & on-site bridal dressing. Book your consultation today.",
  keywords: [
    "bridal mehendi Srivilliputtur",
    "saree draping Tamil Nadu",
    "mehendi artist Virudhunagar",
    "saree box folding",
    "saree hanger folding",
    "bridal henna artist Tamil Nadu",
    "traditional mehendi designs",
    "bridal saree pleating service",
    "Muhurtham saree draping",
    "Shenpa's Mehendi and Drapes",
  ],
  authors: [{ name: siteConfig.founder, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/brand-logo.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/brand-logo.png",
    apple: "/brand-logo.png",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Shenpa's Mehendi & Drapes | Tradition, Styled Beautifully",
    description:
      "Handcrafted bridal mehendi designs and professional saree draping in Srivilliputtur & across Tamil Nadu. Reserve your special occasion styling.",
    images: [
      {
        url: "/images/showcase-mehendi-hand.png",
        width: 1024,
        height: 1536,
        alt: "Intricate Bridal Mehendi Artistry by Shenpa's",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shenpa's Mehendi & Drapes | Bridal Henna & Saree Draping",
    description:
      "Handcrafted bridal mehendi designs and professional saree draping in Srivilliputtur & Tamil Nadu.",
    images: ["/images/showcase-mehendi-hand.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "lGel3fu22usTgKfstckvskUao9T2RKjuiDXbobhhzzk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      className={`${italiana.variable} ${cormorant.variable} ${josefinSans.variable} h-full antialiased`}
      style={{ backgroundColor: "#FCF9EA" }}
    >
      <head>
        <link rel="icon" href="/brand-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/brand-logo.png" />
        {/* LocalBusiness & WebSite JSON-LD Schemas */}
        <LocalBusinessSchema />
        <WebSiteSchema />
      </head>
      <body className="min-h-full bg-[#FCF9EA]" style={{ backgroundColor: "#FCF9EA" }}>
        <HashScrollHandler />
        {children}
      </body>
    </html>
  );
}
