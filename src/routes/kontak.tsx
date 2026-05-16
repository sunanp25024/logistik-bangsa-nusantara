import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/sections/PageHeader";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";

export const Route = createFileRoute("/kontak")({
  head: () => ({
    meta: [
      { title: "Kontak — Nusantara Cargo Lines" },
      { name: "description", content: "Hubungi tim Nusantara Cargo Lines untuk konsultasi gratis seputar kebutuhan export import dan logistik global Anda." },
      { property: "og:title", content: "Kontak — Nusantara Cargo Lines" },
      { property: "og:description", content: "Konsultasi gratis untuk kebutuhan logistik Anda." },
    ],
  }),
  component: KontakPage,
});

function KontakPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Kontak"
        title="Mari Diskusikan Kebutuhan Logistik Anda"
        description="Tim kami akan merespon permintaan konsultasi Anda dalam 1×24 jam kerja."
      />
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-6 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: MapPin, title: "Kantor Pusat", v: "Jl. Sudirman Kav. 52, Jakarta Selatan 12190, Indonesia" },
              { icon: Phone, title: "Telepon", v: "+62 21 1234 5678" },
              { icon: Mail, title: "Email", v: "info@nusantaracargo.co.id" },
              { icon: Clock, title: "Jam Operasional", v: "Senin – Sabtu · 08.00 – 18.00 WIB" },
            ].map(({ icon: Icon, title, v }) => (
              <div key={title} className="border border-border p-6 flex gap-4">
                <div className="h-11 w-11 bg-primary flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-charcoal" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-charcoal">{title}</div>
                  <div className="text-sm text-charcoal-soft mt-1 leading-relaxed">{v}</div>
                </div>
              </div>
            ))}
          </div>

          <form
            className="lg:col-span-3 border border-border p-7 bg-white"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            <h2 className="text-xl font-semibold text-charcoal">Formulir Konsultasi</h2>
            <p className="text-sm text-charcoal-soft mt-1">Lengkapi data berikut, tim kami akan menghubungi Anda.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { l: "Nama Lengkap", t: "text", p: "Nama Anda" },
                { l: "Perusahaan", t: "text", p: "Nama perusahaan" },
                { l: "Email", t: "email", p: "email@perusahaan.com" },
                { l: "Nomor Telepon", t: "tel", p: "+62 …" },
              ].map((f) => (
                <label key={f.l} className="block">
                  <span className="text-xs font-medium text-charcoal">{f.l}</span>
                  <input
                    required type={f.t} placeholder={f.p}
                    className="mt-1.5 w-full border border-border bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary"
                  />
                </label>
              ))}
            </div>

            <label className="block mt-4">
              <span className="text-xs font-medium text-charcoal">Jenis Layanan</span>
              <select className="mt-1.5 w-full border border-border bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary">
                {["Pengiriman Laut", "Pengiriman Udara", "Customs Clearance", "Pergudangan", "Distribusi Barang", "Trucking"].map(s => <option key={s}>{s}</option>)}
              </select>
            </label>

            <label className="block mt-4">
              <span className="text-xs font-medium text-charcoal">Pesan</span>
              <textarea
                required rows={5} placeholder="Ceritakan kebutuhan pengiriman Anda…"
                className="mt-1.5 w-full border border-border bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary resize-none"
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-charcoal hover:bg-primary/90"
            >
              <Send className="h-4 w-4" />
              {sent ? "Pesan Terkirim" : "Kirim Permintaan"}
            </button>
            {sent && <p className="mt-3 text-xs text-primary font-medium">Terima kasih. Tim kami akan segera menghubungi Anda.</p>}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
