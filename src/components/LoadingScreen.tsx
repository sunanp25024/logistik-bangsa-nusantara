import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("ncl-loaded") === "1") {
      setDone(true);
      return;
    }
    const t1 = setTimeout(() => setFadeOut(true), 1600);
    const t2 = setTimeout(() => {
      setDone(true);
      sessionStorage.setItem("ncl-loaded", "1");
    }, 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-3 animate-fade-up">
          <span className="relative inline-flex h-12 w-12 items-center justify-center bg-primary">
            <span className="block h-4 w-4 bg-charcoal" />
          </span>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tight text-charcoal">NUSANTARA</span>
            <span className="text-[11px] font-medium tracking-[0.18em] text-muted-foreground">CARGO LINES</span>
          </div>
        </div>

        <div className="mt-10 h-px w-56 overflow-hidden bg-border relative">
          <span className="absolute inset-y-0 w-1/2 bg-primary animate-line-sweep" />
        </div>

        <div className="mt-6 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 bg-primary animate-dot-bounce" />
          <span className="h-1.5 w-1.5 bg-primary animate-dot-bounce" style={{ animationDelay: "0.15s" }} />
          <span className="h-1.5 w-1.5 bg-primary animate-dot-bounce" style={{ animationDelay: "0.3s" }} />
        </div>
        <p className="mt-4 text-xs tracking-[0.2em] text-muted-foreground uppercase">Memuat Solusi Logistik</p>
      </div>
    </div>
  );
}
