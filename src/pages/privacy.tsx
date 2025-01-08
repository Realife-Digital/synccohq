import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PolicySidebar from "@/components/privacy-components/Sidebar";
import React, { useState } from "react";
import PrivacyContent from "@/components/privacy-components/Privacy";
import TermsContent from "@/components/privacy-components/Terms";
import RefundContent from "@/components/privacy-components/Refund";

export default function PrivacyPage() {
  const [activePolicy, setActivePolicy] = useState("privacy");

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
      <div className="flex flex-col md:flex-row mx-4 md:mx-8 lg:mx-16 py-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-white h-64 md:mb-0">
          <PolicySidebar setActivePolicy={setActivePolicy} />
        </div>
        {/* Main Content */}
        <main className="w-full md:w-3/4 p-4 md:p-8 bg-white">
          {renderPolicyContent()}
        </main>
      </div>
      <Footer />
    </>
  );
}
