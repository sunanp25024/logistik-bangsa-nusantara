import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import cargoShip from "@/assets/cargo-ship.jpg";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={cargoShip} alt="Kapal cargo internasional" loading="lazy" width={1280} height={896} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/85" />
      </div>
      <div className="relative mx-auto max-w-5xl px-5 lg:px-8 py-20 lg:py-28 text-center text-white">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
          Mulai Sekarang
        </span>
        <h2 className="mt-4 text-3xl lg:text-5xl font-semibold leading-tight">
          Siap Mengembangkan Distribusi <br /> Global Anda?
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-white/70">
          Konsultasi gratis dengan tim logistik kami untuk merancang strategi pengiriman ekspor
          impor yang efisien, cepat, dan kompetitif.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link to="/kontak" className="inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-semibold text-charcoal hover:bg-primary/90">
            Hubungi Kami <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/kontak" className="inline-flex items-center gap-2 border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10">
            Konsultasi Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
}
