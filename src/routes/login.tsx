import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Loader2, Mail, Lock } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { Logo } from "@/components/Logo";

const schema = z.object({
  email: z.string().trim().email("Email tidak valid").max(255),
  password: z.string().min(6, "Password minimal 6 karakter").max(100),
});

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Masuk — Nusantara Cargo Lines" },
      { name: "description", content: "Masuk ke akun Nusantara Cargo Lines untuk mengelola pengiriman Anda." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/" });
    });
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ email, password });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword(parsed.data);
    setLoading(false);
    if (error) {
      toast.error(error.message === "Invalid login credentials" ? "Email atau password salah" : error.message);
      return;
    }
    toast.success("Berhasil masuk");
    navigate({ to: "/" });
  };

  const handleGoogle = async () => {
    setGoogleLoading(true);
    const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
    if (result.error) {
      setGoogleLoading(false);
      toast.error("Gagal masuk dengan Google");
      return;
    }
    if (result.redirected) return;
    navigate({ to: "/" });
  };

  return (
    <AuthShell title="Masuk ke Akun" subtitle="Akses dashboard pengiriman & layanan Anda.">
      <button
        onClick={handleGoogle}
        disabled={googleLoading}
        className="w-full inline-flex items-center justify-center gap-3 border border-border bg-white px-4 py-2.5 text-sm font-medium text-charcoal hover:bg-muted/50 transition-colors disabled:opacity-60"
      >
        {googleLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <GoogleIcon />}
        Masuk dengan Google
      </button>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs uppercase tracking-wider text-charcoal-soft">atau</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Field icon={<Mail className="h-4 w-4" />} type="email" placeholder="nama@perusahaan.com" value={email} onChange={setEmail} label="Email" />
        <Field icon={<Lock className="h-4 w-4" />} type="password" placeholder="••••••••" value={password} onChange={setPassword} label="Password" />

        <div className="flex justify-end">
          <Link to="/lupa-password" className="text-xs font-medium text-charcoal-soft hover:text-primary">
            Lupa password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 bg-primary px-4 py-2.5 text-sm font-semibold text-charcoal hover:bg-primary/90 transition-colors disabled:opacity-60"
        >
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          Masuk
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-charcoal-soft">
        Belum punya akun?{" "}
        <Link to="/daftar" className="font-semibold text-charcoal hover:text-primary">
          Daftar sekarang
        </Link>
      </p>
    </AuthShell>
  );
}

export function AuthShell({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      <div className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-6 h-16 flex items-center justify-between">
          <Logo />
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-charcoal-soft hover:text-charcoal transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white border border-border p-8 shadow-sm">
            <h1 className="text-2xl font-bold text-charcoal tracking-tight">{title}</h1>
            {subtitle && <p className="mt-2 text-sm text-charcoal-soft">{subtitle}</p>}
            <div className="mt-7">{children}</div>
          </div>
          <p className="mt-6 text-center text-xs text-charcoal-soft">
            © {new Date().getFullYear()} PT Nusantara Cargo Lines
          </p>
        </div>
      </div>
    </div>
  );
}

export function Field({
  icon, label, type, value, onChange, placeholder,
}: {
  icon?: React.ReactNode;
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-soft">{label}</span>
      <div className="mt-1.5 relative">
        {icon && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-soft">{icon}</span>}
        <input
          type={type}
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full border border-border bg-white py-2.5 ${icon ? "pl-10" : "pl-3"} pr-3 text-sm text-charcoal placeholder:text-charcoal-soft/60 focus:outline-none focus:border-charcoal transition-colors`}
        />
      </div>
    </label>
  );
}

function GoogleIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A10.99 10.99 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.1A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.43.34-2.1V7.06H2.18A10.99 10.99 0 0 0 1 12c0 1.77.42 3.44 1.18 4.94l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
    </svg>
  );
}
