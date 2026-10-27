import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import KeyPointsStrip from "@/components/sections/KeyPointsStrip";
import AboutSection from "@/components/sections/AboutSection";
import OurServicesSection from "@/components/sections/OurServicesSection";
import SareeDrapingServicesSection from "@/components/sections/SareeDrapingServicesSection";
import MehendiServicesSection from "@/components/sections/MehendiServicesSection";
import PromotionalSection from "@/components/sections/PromotionalSection";
import FAQSection from "@/components/sections/FAQSection";
import BookingContact from "@/components/sections/BookingContact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FCF9EA] text-[#75451F]">
      <Navbar />
      <HeroSection />
      <KeyPointsStrip />
      <AboutSection />
      <OurServicesSection />
      <SareeDrapingServicesSection />
      <MehendiServicesSection />
      <FAQSection />
      <PromotionalSection />
      <BookingContact />
      <Footer />
    </main>
  );
}
