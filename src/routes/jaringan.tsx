import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/sections/PageHeader";
import { GlobalNetworkSection } from "@/components/sections/GlobalNetworkSection";
import { CtaSection } from "@/components/sections/CtaSection";

export const Route = createFileRoute("/jaringan")({
  head: () => ({
    meta: [
      { title: "Jaringan Global — Nusantara Cargo Lines" },
      { name: "description", content: "Jaringan logistik di 80+ negara, 12 hub utama, dan 240+ rute reguler menghubungkan Indonesia dengan pasar global." },
      { property: "og:title", content: "Jaringan Global — Nusantara Cargo Lines" },
      { property: "og:description", content: "Terhubung ke 80+ negara di 6 benua." },
    ],
  }),
  component: JaringanPage,
});

function JaringanPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Jaringan Global"
        title="Hub Logistik di 6 Benua"
        description="Jaringan agen, pelabuhan mitra, dan kantor regional yang melayani perdagangan lintas negara setiap hari."
      />
      <GlobalNetworkSection />
      <CtaSection />
    </SiteLayout>
  );
}
