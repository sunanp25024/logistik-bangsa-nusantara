import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="mx-auto max-w-7xl px-4 lg:px-6 py-10 grid gap-10 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-5 text-sm leading-relaxed text-white/60 max-w-sm">
            Perusahaan export import dan logistik global yang melayani pengiriman, pergudangan,
            customs clearance, dan distribusi ke lebih dari 80 negara di dunia.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Facebook, Linkedin, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 inline-flex items-center justify-center border border-white/15 hover:border-primary hover:text-primary transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2">
          <h4 className="text-sm font-semibold text-white mb-4">Navigasi</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-primary">Beranda</Link></li>
            <li><Link to="/tentang" className="hover:text-primary">Tentang Kami</Link></li>
            <li><Link to="/layanan" className="hover:text-primary">Layanan</Link></li>
            <li><Link to="/jaringan" className="hover:text-primary">Jaringan Global</Link></li>
            <li><Link to="/kontak" className="hover:text-primary">Kontak</Link></li>
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold text-white mb-4">Layanan</h4>
          <ul className="space-y-2.5 text-sm">
            <li>Pengiriman Laut</li>
            <li>Pengiriman Udara</li>
            <li>Customs Clearance</li>
            <li>Pergudangan</li>
            <li>Distribusi Barang</li>
            <li>Trucking</li>
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold text-white mb-4">Kantor Pusat</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" /><span>Jl. Sudirman Kav. 52, Jakarta Selatan 12190, Indonesia</span></li>
            <li className="flex gap-3"><Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" /><span>+62 21 1234 5678</span></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 text-primary mt-0.5 shrink-0" /><span>info@nusantaracargo.co.id</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} PT Nusantara Cargo Lines. Seluruh hak cipta dilindungi.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary">Kebijakan Privasi</a>
            <a href="#" className="hover:text-primary">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
