const hubs = [
  { name: "Jakarta", x: 75, y: 62, primary: true },
  { name: "Singapura", x: 73, y: 58 },
  { name: "Shanghai", x: 80, y: 44 },
  { name: "Tokyo", x: 86, y: 42 },
  { name: "Rotterdam", x: 49, y: 32 },
  { name: "Hamburg", x: 50, y: 30 },
  { name: "Los Angeles", x: 14, y: 42 },
  { name: "New York", x: 26, y: 38 },
  { name: "Dubai", x: 60, y: 46 },
  { name: "Sydney", x: 88, y: 78 },
  { name: "Mumbai", x: 65, y: 50 },
  { name: "Hamburg", x: 50, y: 30 },
];

export function GlobalNetworkSection() {
  return (
    <section className="py-14 lg:py-20 bg-charcoal text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
              Jaringan Global
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-semibold text-white leading-tight">
              Terhubung ke 80+ Negara di 6 Benua
            </h2>
          </div>
          <p className="text-white/65 lg:max-w-sm">
            Jaringan agen, pelabuhan mitra, dan hub distribusi yang menghubungkan Indonesia dengan
            pasar global utama.
          </p>
        </div>

        <div className="relative border border-white/10 bg-white/[0.02] p-4 lg:p-10">
          <svg viewBox="0 0 100 90" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
            {/* Dotted continents grid */}
            <defs>
              <pattern id="dotgrid" x="0" y="0" width="1.2" height="1.2" patternUnits="userSpaceOnUse">
                <circle cx="0.6" cy="0.6" r="0.18" fill="rgba(255,255,255,0.18)" />
              </pattern>
            </defs>
            <rect width="100" height="90" fill="url(#dotgrid)" opacity="0.45" />

            {/* Connection lines from Jakarta hub */}
            {hubs.filter(h => !h.primary).map((h) => (
              <line
                key={h.name + h.x}
                x1={75} y1={62} x2={h.x} y2={h.y}
                stroke="#EAB308" strokeWidth="0.15" strokeDasharray="0.6 0.6" opacity="0.55"
              />
            ))}

            {hubs.map((h) => (
              <g key={h.name + h.x + h.y}>
                <circle cx={h.x} cy={h.y} r={h.primary ? 1.4 : 0.8} fill={h.primary ? "#EAB308" : "#fff"} />
                {h.primary && (
                  <circle cx={h.x} cy={h.y} r="2.8" fill="none" stroke="#EAB308" strokeWidth="0.2" opacity="0.6">
                    <animate attributeName="r" from="1.4" to="4" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
                  </circle>
                )}
                <text x={h.x + 1.5} y={h.y + 0.5} fill="rgba(255,255,255,0.7)" fontSize="1.4" fontWeight="500">
                  {h.name}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {[
            { l: "Hub Utama", v: "12" },
            { l: "Negara Aktif", v: "82" },
            { l: "Rute Reguler", v: "240+" },
            { l: "Agen Mitra", v: "350+" },
          ].map((s) => (
            <div key={s.l} className="bg-charcoal p-6">
              <div className="text-3xl font-bold text-white">{s.v}</div>
              <div className="text-[11px] uppercase tracking-wider text-white/55 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
