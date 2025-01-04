import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PolicySidebar from "@/components/privacy-components/Sidebar";
import React from "react";
import { useState } from "react";
import PrivacyContent from "@/components/privacy-components/Privacy";
import TermsContent from "@/components/privacy-components/Terms";
import RefundContent from "@/components/privacy-components/Refund";


export default function PrivacyPage (){

     const [activePolicy, setActivePolicy] = useState("privacy");

     const renderPolicyContent = () => {
    switch (activePolicy) {
      case "privacy":
        return <PrivacyContent />;
      case "terms":
        return <TermsContent/>
      case "refund":
        return <RefundContent/>;
      default:
        return <p>Select a policy from the sidebar to view details.</p>;
    }
  };


    return (
      <>
        <Header />
        <div className="flex mx-44 py-8">
          {/* Sidebar */}
          <div className="w-1/4 bg-white ">
            <PolicySidebar setActivePolicy={setActivePolicy} />
          </div>
          {/* Main Content */}
          <main className="w-3/4 p-12 bg-white">{renderPolicyContent()}</main>
        </div>
        <Footer />
      </>
    );
}