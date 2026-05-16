import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { GlobalNetworkSection } from "@/components/sections/GlobalNetworkSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CtaSection } from "@/components/sections/CtaSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nusantara Cargo Lines — Solusi Export Import & Logistik Global" },
      { name: "description", content: "Perusahaan freight forwarder, customs clearance, pergudangan, dan distribusi global. Jaringan di 80+ negara, 12.000+ pengiriman per bulan." },
      { property: "og:title", content: "Nusantara Cargo Lines — Logistik Global" },
      { property: "og:description", content: "Solusi export import & logistik global terpercaya untuk bisnis Anda." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <InsightsSection />
      <GlobalNetworkSection />
      <WhyChooseUs />
      <CtaSection />
    </SiteLayout>
  );
}
