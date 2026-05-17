import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Loader2, Lock } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { AuthShell, Field } from "./login";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Atur Password Baru — Nusantara Cargo Lines" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ResetPage,
});

function ResetPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) return toast.error("Password minimal 6 karakter");
    if (password !== confirm) return toast.error("Konfirmasi password tidak cocok");

    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Password berhasil diperbarui.");
    navigate({ to: "/" });
  };

  return (
    <AuthShell title="Atur Password Baru" subtitle="Masukkan password baru untuk akun Anda.">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field icon={<Lock className="h-4 w-4" />} type="password" placeholder="Password baru" value={password} onChange={setPassword} label="Password Baru" />
        <Field icon={<Lock className="h-4 w-4" />} type="password" placeholder="Ulangi password" value={confirm} onChange={setConfirm} label="Konfirmasi Password" />
        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 bg-primary px-4 py-2.5 text-sm font-semibold text-charcoal hover:bg-primary/90 transition-colors disabled:opacity-60"
        >
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          Simpan Password Baru
        </button>
      </form>
    </AuthShell>
  );
}
