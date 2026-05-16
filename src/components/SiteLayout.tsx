import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { LoadingScreen } from "./LoadingScreen";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
}
