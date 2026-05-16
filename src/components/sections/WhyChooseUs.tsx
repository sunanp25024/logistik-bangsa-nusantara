import { ShieldCheck, Clock, Globe2, HeartHandshake, Award, Headphones } from "lucide-react";

const features = [
  { icon: Award, title: "Profesional", desc: "Tim bersertifikat freight forwarder & customs broker dengan track record terverifikasi." },
  { icon: ShieldCheck, title: "Aman", desc: "Asuransi cargo all-risk dan prosedur handling sesuai standar internasional ISO." },
  { icon: Clock, title: "Tepat Waktu", desc: "Komitmen on-time delivery 98,7% didukung sistem monitoring 24 jam." },
  { icon: Globe2, title: "Jaringan Global", desc: "Akses ke 80+ negara melalui jaringan agen dan pelabuhan mitra strategis." },
  { icon: HeartHandshake, title: "Pelayanan Terpercaya", desc: "Account manager khusus untuk setiap klien korporasi dan UKM." },
  { icon: Headphones, title: "Dukungan 24/7", desc: "Customer service operasional sepanjang waktu untuk kebutuhan urgent." },
];

export function WhyChooseUs() {
  return (
    <section className="py-14 lg:py-20 bg-surface">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            Mengapa Memilih Kami
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-semibold text-charcoal leading-tight">
            Keunggulan yang Membedakan Kami
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white border border-border p-7 hover:border-primary transition-colors">
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 bg-primary flex items-center justify-center">
                  <Icon className="h-5 w-5 text-charcoal" />
                </div>
                <h3 className="text-base font-semibold text-charcoal">{title}</h3>
              </div>
              <p className="mt-4 text-sm text-charcoal-soft leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
