import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Sora, Source_Sans_3 } from "next/font/google";
import type { ReactNode } from "react";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export default function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <div className={`${sora.variable} ${sourceSans.variable} min-h-screen bg-background text-foreground ${className}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
