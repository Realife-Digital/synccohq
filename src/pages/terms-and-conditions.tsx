import PolicySidebar from "@/components/privacy-components/Sidebar";
import TermsContent from "@/components/privacy-components/Terms";
import PageShell from "@/components/PageShell";
import { pagesSeo } from "@/lib/seo";

export default function TermsPage() {
  return (
    <PageShell title={pagesSeo.terms.title} description={pagesSeo.terms.description} path={pagesSeo.terms.path}>
      <div className="section-shell flex flex-col justify-center py-8 md:flex-row md:py-24">
        <div className="mb-8 w-full max-h-72 md:mb-0 md:w-1/4 lg:h-full">
          <PolicySidebar />
        </div>
        <main className="w-full px-0 md:w-3/4 lg:px-16">
          <TermsContent />
        </main>
      </div>
    </PageShell>
  );
}
