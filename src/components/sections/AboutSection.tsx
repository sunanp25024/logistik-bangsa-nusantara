import { CheckCircle2 } from "lucide-react";
import warehouse from "@/assets/warehouse.jpg";

export function AboutSection() {
  const points = [
    "Lisensi resmi sebagai freight forwarder & customs broker nasional",
    "Armada truk, gudang bonded, dan agen di 80+ negara",
    "Sistem tracking digital end-to-end untuk setiap pengiriman",
    "Tim profesional berpengalaman lebih dari dua dekade",
  ];
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 relative">
          <img
            src={warehouse}
            alt="Gudang dan armada distribusi"
            loading="lazy"
            width={1280}
            height={896}
            className="w-full h-[460px] object-cover"
          />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-primary p-6 max-w-[220px]">
            <div className="text-3xl font-bold text-charcoal">25+</div>
            <div className="text-xs font-medium text-charcoal/80 mt-1">
              Tahun melayani industri export import nasional
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            Tentang Perusahaan
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-semibold text-charcoal leading-tight">
            Mitra Logistik Terpercaya untuk <br /> Perdagangan Internasional Anda
          </h2>
          <p className="mt-5 text-charcoal-soft leading-relaxed">
            PT Nusantara Cargo Lines adalah perusahaan export import dan logistik global yang
            berbasis di Jakarta. Kami menyediakan layanan freight forwarding, customs clearance,
            pergudangan, distribusi, dan trucking yang terintegrasi untuk kebutuhan korporasi,
            UKM, hingga importir besar di seluruh Indonesia.
          </p>

          <ul className="mt-7 space-y-3.5">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[15px] text-charcoal">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-3 border border-border">
            {[
              { v: "12K+", l: "Pengiriman / Bulan" },
              { v: "350+", l: "Mitra Korporasi" },
              { v: "98,7%", l: "On-Time Delivery" },
            ].map((s, i) => (
              <div key={s.l} className={`p-5 ${i < 2 ? "border-r border-border" : ""}`}>
                <div className="text-2xl font-bold text-charcoal">{s.v}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
