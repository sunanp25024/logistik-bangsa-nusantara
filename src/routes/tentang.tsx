import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/sections/PageHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CtaSection } from "@/components/sections/CtaSection";

export const Route = createFileRoute("/tentang")({
  head: () => ({
    meta: [
      { title: "Tentang Kami — Nusantara Cargo Lines" },
      { name: "description", content: "Mengenal lebih dekat PT Nusantara Cargo Lines, perusahaan logistik dan export import dengan pengalaman 25+ tahun." },
      { property: "og:title", content: "Tentang Kami — Nusantara Cargo Lines" },
      { property: "og:description", content: "25+ tahun pengalaman melayani perdagangan internasional." },
    ],
  }),
  component: TentangPage,
});

function TentangPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Tentang Kami"
        title="Membangun Jembatan Logistik Antar Negara Sejak 1999"
        description="Berbasis di Jakarta, kami melayani ratusan korporasi nasional dan multinasional di sektor manufaktur, otomotif, FMCG, hingga e-commerce."
      />
      <AboutSection />
      <WhyChooseUs />
      <CtaSection />
    </SiteLayout>
  );
}
