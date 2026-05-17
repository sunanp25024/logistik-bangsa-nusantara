import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Loader2, Mail } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { AuthShell, Field } from "./login";

const schema = z.object({ email: z.string().trim().email("Email tidak valid").max(255) });

export const Route = createFileRoute("/lupa-password")({
  head: () => ({
    meta: [
      { title: "Lupa Password — Nusantara Cargo Lines" },
      { name: "description", content: "Atur ulang password akun Nusantara Cargo Lines Anda." },
    ],
  }),
  component: ForgotPage,
});

function ForgotPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ email });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(parsed.data.email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    setSent(true);
    toast.success("Link reset telah dikirim ke email Anda.");
  };

  return (
    <AuthShell
      title="Lupa Password"
      subtitle="Masukkan email Anda dan kami akan mengirimkan link untuk mengatur ulang password."
    >
      {sent ? (
        <div className="text-sm text-charcoal-soft">
          <p>Link reset password sudah dikirim ke <strong className="text-charcoal">{email}</strong>. Silakan periksa kotak masuk Anda.</p>
          <Link to="/login" className="mt-6 inline-block font-semibold text-charcoal hover:text-primary">
            ← Kembali ke halaman masuk
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Field icon={<Mail className="h-4 w-4" />} type="email" placeholder="nama@perusahaan.com" value={email} onChange={setEmail} label="Email" />
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-primary px-4 py-2.5 text-sm font-semibold text-charcoal hover:bg-primary/90 transition-colors disabled:opacity-60"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            Kirim Link Reset
          </button>
          <p className="text-center text-sm text-charcoal-soft">
            <Link to="/login" className="font-semibold text-charcoal hover:text-primary">
              ← Kembali ke halaman masuk
            </Link>
          </p>
        </form>
      )}
    </AuthShell>
  );
}
