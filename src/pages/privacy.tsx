import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PolicySidebar from "@/components/privacy-components/Sidebar";
import PrivacyContent from "@/components/privacy-components/Privacy";
import TermsContent from "@/components/privacy-components/Terms";
import RefundContent from "@/components/privacy-components/Refund";

export default function PrivacyPage() {
  const [activePolicy, setActivePolicy] = useState("privacy");

  // Update state based on the current hash in the URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "privacy" || hash === "terms" || hash === "refund") {
        setActivePolicy(hash);
      }
    };

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Initialize state based on the current hash
    handleHashChange();

    // Cleanup event listener
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const renderPolicyContent = () => {
    switch (activePolicy) {
      case "privacy":
        return <PrivacyContent />;
      case "terms":
        return <TermsContent />;
      case "refund":
        return <RefundContent />;
      default:
        return <PrivacyContent />;
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row mx-4 my-4 bg-white md:mx-8 lg:mx-16  py-4 lg:py-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white max-h-72 lg:h-full md:mb-0">
          <PolicySidebar setActivePolicy={setActivePolicy} />
        </div>
        {/* Main Content */}
        <main id={activePolicy} className="w-full md:w-3/4 p-4 md:p-8 bg-white">
          {renderPolicyContent()}
        </main>
      </div>
      <Footer />
    </>
  );
}
