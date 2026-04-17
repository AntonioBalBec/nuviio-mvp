import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ClientsMarquee } from "@/components/clients-marquee";
import { ServicesSection } from "@/components/services-section";
import { MethodologyCarousel } from "@/components/methodology-carousel";
import { AboutSection } from "@/components/about-section";
import { FAQSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ClientsMarquee />
      <ServicesSection />
      <MethodologyCarousel />
      <AboutSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
