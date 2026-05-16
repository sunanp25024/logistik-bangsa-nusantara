import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Beranda" },
  { to: "/tentang", label: "Tentang Kami" },
  { to: "/layanan", label: "Layanan" },
  { to: "/jaringan", label: "Jaringan Global" },
  { to: "/kontak", label: "Kontak" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur border-b border-border shadow-sm" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-6 h-16">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-charcoal-soft hover:text-charcoal transition-colors relative"
              activeProps={{ className: "text-charcoal-soft hover:text-charcoal transition-colors relative !text-charcoal after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+622112345678" className="flex items-center gap-2 text-sm font-medium text-charcoal">
            <Phone className="h-4 w-4 text-primary" />
            +62 21 1234 5678
          </a>
          <Link
            to="/kontak"
            className="inline-flex items-center bg-primary px-5 py-2.5 text-sm font-semibold text-charcoal hover:bg-primary/90 transition-colors"
          >
            Tombol Konsultasi
          </Link>
        </div>
        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden p-2 text-charcoal"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-white animate-fade-in">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-charcoal"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/kontak"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center bg-primary px-5 py-2.5 text-sm font-semibold text-charcoal"
            >
              Konsultasi Sekarang
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
