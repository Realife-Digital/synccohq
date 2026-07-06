import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
});

export default function Contact() {
  return (
    <div className={`${poppins.variable} font-[family-name:var(--font-poppins)]`}>
      <Header />
      <ContactPage />
      <Footer />
    </div>
  );
}
