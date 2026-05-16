import { Ship, Plane, FileCheck2, Warehouse, Truck, PackageSearch, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Ship, title: "Pengiriman Laut", desc: "Layanan FCL & LCL ke pelabuhan utama dunia dengan jadwal pengiriman mingguan." },
  { icon: Plane, title: "Pengiriman Udara", desc: "Air freight cepat untuk barang prioritas, time-sensitive, dan komoditas bernilai tinggi." },
  { icon: FileCheck2, title: "Customs Clearance", desc: "Pengurusan dokumen ekspor impor, PIB, PEB, dan klasifikasi tarif kepabeanan." },
  { icon: Warehouse, title: "Pergudangan", desc: "Gudang bonded dan non-bonded dengan sistem inventory management terintegrasi." },
  { icon: PackageSearch, title: "Distribusi Barang", desc: "Last-mile distribution ke seluruh kota di Indonesia dengan tracking real-time." },
  { icon: Truck, title: "Trucking", desc: "Armada truk container, wing box, dan flatbed untuk pengangkutan domestik." },
];

export function ServicesSection() {
  return (
    <section id="layanan" className="py-20 lg:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              Layanan Kami
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-semibold text-charcoal leading-tight">
              Solusi Logistik End-to-End untuk Bisnis Global Anda
            </h2>
          </div>
          <p className="text-charcoal-soft lg:max-w-sm">
            Enam pilar layanan terintegrasi yang menghubungkan pemasok, gudang, pelabuhan, hingga
            konsumen akhir di seluruh dunia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-white p-7 hover:bg-charcoal transition-colors duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 bg-surface group-hover:bg-primary flex items-center justify-center transition-colors">
                  <Icon className="h-6 w-6 text-charcoal" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-charcoal group-hover:text-white transition-colors">
                {title}
              </h3>
              <p className="mt-2 text-sm text-charcoal-soft group-hover:text-white/70 transition-colors leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
