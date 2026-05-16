import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { CtaSection } from "@/components/sections/CtaSection";

export const Route = createFileRoute("/layanan")({
  head: () => ({
    meta: [
      { title: "Layanan — Nusantara Cargo Lines" },
      { name: "description", content: "Pengiriman laut, udara, customs clearance, pergudangan, distribusi, dan trucking untuk kebutuhan logistik global Anda." },
      { property: "og:title", content: "Layanan Logistik — Nusantara Cargo Lines" },
      { property: "og:description", content: "Enam pilar layanan logistik end-to-end." },
    ],
  }),
  component: LayananPage,
});

function LayananPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Layanan"
        title="Layanan Logistik & Export Import Terintegrasi"
        description="Dari proses pickup di pabrik, customs clearance, hingga last-mile delivery — kami menangani seluruh rantai logistik Anda."
      />
      <ServicesSection />
      <InsightsSection />
      <CtaSection />
    </SiteLayout>
  );
}
