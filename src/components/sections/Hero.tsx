import { Link } from "@tanstack/react-router";
import { ArrowRight, Anchor, Package, TrendingUp, Globe2 } from "lucide-react";
import heroPort from "@/assets/hero-port.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-charcoal">
      {/* Background "video" stand-in: high-quality port photo with subtle Ken Burns */}
      <div className="absolute inset-0">
        <img
          src={heroPort}
          alt="Pelabuhan kontainer internasional dengan crane cargo dan kapal kontainer"
          className="h-full w-full object-cover animate-fade-in"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/30" />
        <div className="absolute inset-0 bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.04)_95%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.04)_95%)] bg-[length:48px_48px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-12 gap-10 items-center">
        {/* LEFT */}
        <div className="lg:col-span-7 text-white animate-fade-up">
          <div className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-medium tracking-[0.15em] text-white/80 uppercase">
            <span className="h-1.5 w-1.5 bg-primary" />
            Solusi Logistik Internasional Terpercaya
          </div>
          <h1 className="mt-6 text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.05] tracking-tight">
            Solusi Export Import <br />
            & <span className="text-primary">Logistik Global</span>
          </h1>
          <p className="mt-5 max-w-xl text-base lg:text-[17px] text-white/70 leading-relaxed">
            Mengelola kebutuhan pengiriman, distribusi, dan logistik internasional secara profesional
            dan terpercaya. Didukung jaringan di lebih dari 80 negara dan armada modern di seluruh
            Asia Pasifik.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/layanan"
              className="inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-charcoal hover:bg-primary/90 transition-colors"
            >
              Pelajari Layanan
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/kontak"
              className="inline-flex items-center gap-2 border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { v: "80+", l: "Negara Tujuan" },
              { v: "25 Thn", l: "Pengalaman" },
              { v: "12K+", l: "Pengiriman / Bulan" },
            ].map((s) => (
              <div key={s.l} className="border-l border-white/20 pl-4">
                <div className="text-2xl font-semibold text-white">{s.v}</div>
                <div className="text-[11px] uppercase tracking-wider text-white/55 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — analytics preview */}
        <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="bg-white shadow-2xl border border-white/10">
            <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-primary" />
                <span className="text-xs font-semibold tracking-wider uppercase text-charcoal">
                  Live Operations
                </span>
              </div>
              <span className="text-[10px] tracking-wider text-muted-foreground uppercase">
                Update · Real-time
              </span>
            </div>

            <div className="grid grid-cols-2 divide-x divide-border border-b border-border">
              {[
                { icon: Package, l: "Pengiriman Aktif", v: "1.284" },
                { icon: Anchor, l: "Kapal di Pelabuhan", v: "37" },
              ].map(({ icon: Icon, l, v }) => (
                <div key={l} className="p-5">
                  <Icon className="h-5 w-5 text-primary" />
                  <div className="mt-3 text-2xl font-semibold text-charcoal">{v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-charcoal">Volume Pengiriman Mingguan</span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-charcoal">
                  <TrendingUp className="h-3.5 w-3.5 text-primary" /> +18,4%
                </span>
              </div>
              <div className="flex items-end gap-1.5 h-24">
                {[42, 56, 38, 72, 60, 88, 76].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className={`w-full ${i === 5 ? "bg-primary" : "bg-charcoal/85"}`}
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-[9px] text-muted-foreground">
                      {["S", "S", "R", "K", "J", "S", "M"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border p-5">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 bg-surface flex items-center justify-center">
                  <Globe2 className="h-4 w-4 text-charcoal" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-charcoal">
                    Jakarta → Rotterdam
                  </div>
                  <div className="text-[11px] text-muted-foreground">
                    Container MSC-8821 · ETA 14 hari
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-primary px-2 py-1 text-charcoal">
                  ON TIME
                </span>
              </div>
              <div className="mt-3 h-1 bg-border relative">
                <div className="absolute inset-y-0 left-0 w-2/3 bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
