import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import React from "react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
});

export default function Contact() {
  return (
    <div
      className={`${poppins.variable} font-[family-name:var(--font-poppins)]`}
    >
      <Header />
      <iframe
        aria-label="Contact Us"
        className="w-full h-screen border-0"
        src="https://forms.zohopublic.com/realifedigitalgm1/form/ContactUs/formperma/pNOT1G__7RPWbbXjuyytZPEax7SA3wSi9hl_bGjV3n4"
        frameBorder="0"
      ></iframe>

      <Footer />
    </div>
  );
}
