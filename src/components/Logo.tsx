import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <span className="relative inline-flex h-8 w-8 items-center justify-center bg-primary">
        <span className="block h-3 w-3 bg-charcoal" />
        <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 bg-charcoal" />
      </span>
      <span className={`flex flex-col leading-none ${light ? "text-white" : "text-charcoal"}`}>
        <span className="text-[15px] font-bold tracking-tight">NUSANTARA</span>
        <span className={`text-[10px] font-medium tracking-[0.18em] ${light ? "text-white/70" : "text-muted-foreground"}`}>
          CARGO LINES
        </span>
      </span>
    </Link>
  );
}
