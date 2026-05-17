import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Loader2, Mail, Lock } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { AuthShell, Field } from "./login";

const schema = z.object({
  email: z.string().trim().email("Email tidak valid").max(255),
  password: z.string().min(6, "Password minimal 6 karakter").max(100),
});

export const Route = createFileRoute("/daftar")({
  head: () => ({
    meta: [
      { title: "Daftar Akun — Nusantara Cargo Lines" },
      { name: "description", content: "Buat akun baru untuk mengakses layanan logistik Nusantara Cargo Lines." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ email, password });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      ...parsed.data,
      options: { emailRedirectTo: `${window.location.origin}/` },
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Pendaftaran berhasil. Cek email Anda untuk verifikasi.");
    navigate({ to: "/login" });
  };

  return (
    <AuthShell title="Buat Akun Baru" subtitle="Daftar untuk mulai menggunakan layanan kami.">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field icon={<Mail className="h-4 w-4" />} type="email" placeholder="nama@perusahaan.com" value={email} onChange={setEmail} label="Email" />
        <Field icon={<Lock className="h-4 w-4" />} type="password" placeholder="Minimal 6 karakter" value={password} onChange={setPassword} label="Password" />

        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 bg-primary px-4 py-2.5 text-sm font-semibold text-charcoal hover:bg-primary/90 transition-colors disabled:opacity-60"
        >
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          Daftar Sekarang
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-charcoal-soft">
        Sudah punya akun?{" "}
        <Link to="/login" className="font-semibold text-charcoal hover:text-primary">
          Masuk di sini
        </Link>
      </p>
    </AuthShell>
  );
}
