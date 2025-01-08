import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PolicySidebar from "@/components/privacy-components/Sidebar";
import TermsContent from "@/components/privacy-components/Terms";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
});

export default function TermsPage() {
  return (
    <div
      className={`${poppins.variable} font-[family-name:var(--font-poppins)]`}
    >
      <Header />
      <div className="flex flex-col justify-center max-w-6xl md:flex-row mx-4 my-4 md:mx-8 lg:mx-auto py-4 lg:py-32">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 max-h-72 lg:h-full md:mb-0">
          <PolicySidebar />
        </div>
        {/* Main Content */}
        <main className="w-full md:w-3/4 lg:px-16 px-4">
          <TermsContent />
        </main>
      </div>
      <Footer />
    </div>
  );
}
