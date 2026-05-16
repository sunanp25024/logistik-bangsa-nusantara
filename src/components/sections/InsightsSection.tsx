import {
  AreaChart, Area, BarChart, Bar, ResponsiveContainer, XAxis, YAxis,
  CartesianGrid, Tooltip,
} from "recharts";

const shipmentData = [
  { m: "Jan", v: 820 }, { m: "Feb", v: 932 }, { m: "Mar", v: 901 },
  { m: "Apr", v: 1034 }, { m: "Mei", v: 1190 }, { m: "Jun", v: 1230 },
  { m: "Jul", v: 1310 }, { m: "Agu", v: 1420 }, { m: "Sep", v: 1380 },
  { m: "Okt", v: 1510 }, { m: "Nov", v: 1620 }, { m: "Des", v: 1742 },
];

const countryData = [
  { c: "Singapura", v: 320 }, { c: "Tiongkok", v: 280 }, { c: "Jepang", v: 210 },
  { c: "Belanda", v: 180 }, { c: "Amerika", v: 160 }, { c: "Jerman", v: 140 },
];

export function InsightsSection() {
  return (
    <section className="py-14 lg:py-14 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
            Business Insight
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-semibold text-charcoal leading-tight">
            Performa Operasional & Pertumbuhan Bisnis
          </h2>
          <p className="mt-4 text-charcoal-soft">
            Data agregat dari operasional pengiriman, kapasitas distribusi, dan jaringan mitra
            global selama 12 bulan terakhir.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border mb-10">
          {[
            { l: "Jumlah Pengiriman", v: "144.520", s: "+18,4%" },
            { l: "Negara Tujuan", v: "82", s: "+6 negara" },
            { l: "Kapasitas Distribusi", v: "260K TEU", s: "+12,1%" },
            { l: "Mitra Logistik", v: "350+", s: "Aktif" },
          ].map((k) => (
            <div key={k.l} className="bg-white p-6">
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{k.l}</div>
              <div className="mt-3 text-3xl font-bold text-charcoal">{k.v}</div>
              <div className="mt-1 text-xs font-medium text-primary">{k.s}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-px bg-border border border-border">
          <div className="lg:col-span-3 bg-white p-6 lg:p-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-semibold text-charcoal">Pertumbuhan Pengiriman</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Volume bulanan (kontainer)</p>
              </div>
              <span className="text-[10px] tracking-wider uppercase bg-primary px-2 py-1 text-charcoal font-bold">2024</span>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={shipmentData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#EAB308" stopOpacity={0.45} />
                      <stop offset="100%" stopColor="#EAB308" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#E5E7EB" vertical={false} />
                  <XAxis dataKey="m" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#6B7280" }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#6B7280" }} />
                  <Tooltip
                    contentStyle={{ border: "1px solid #E5E7EB", borderRadius: 2, fontSize: 12 }}
                    labelStyle={{ color: "#111827", fontWeight: 600 }}
                  />
                  <Area type="monotone" dataKey="v" stroke="#EAB308" strokeWidth={2} fill="url(#g1)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white p-6 lg:p-8">
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-charcoal">Top Negara Tujuan</h3>
              <p className="text-xs text-muted-foreground mt-0.5">Volume YTD per negara</p>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={countryData} layout="vertical" margin={{ top: 0, right: 10, left: 10, bottom: 0 }}>
                  <CartesianGrid stroke="#E5E7EB" horizontal={false} />
                  <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#6B7280" }} />
                  <YAxis dataKey="c" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#111827" }} width={70} />
                  <Tooltip contentStyle={{ border: "1px solid #E5E7EB", borderRadius: 2, fontSize: 12 }} />
                  <Bar dataKey="v" fill="#EAB308" barSize={16} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
