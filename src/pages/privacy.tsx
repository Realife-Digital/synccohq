import PolicySidebar from "@/components/privacy-components/Sidebar";
import PrivacyContent from "@/components/privacy-components/Privacy";
import PageShell from "@/components/PageShell";

export default function PrivacyPage() {
  return (
    <PageShell>
      <div className="section-shell flex flex-col justify-center py-8 md:flex-row md:py-24">
        <div className="mb-8 w-full max-h-72 md:mb-0 md:w-1/4 lg:h-full">
          <PolicySidebar />
        </div>
        <main className="w-full px-0 md:w-3/4 lg:px-16">
          <PrivacyContent />
        </main>
      </div>
    </PageShell>
  );
}
