import PolicySidebar from "@/components/privacy-components/Sidebar";
import RefundContent from "@/components/privacy-components/Refund";
import PageShell from "@/components/PageShell";
import { pagesSeo } from "@/lib/seo";

export default function RefundPage() {
  return (
    <PageShell title={pagesSeo.refund.title} description={pagesSeo.refund.description} path={pagesSeo.refund.path}>
      <div className="section-shell flex flex-col justify-center py-8 md:flex-row md:py-24">
        <div className="mb-8 w-full max-h-72 md:mb-0 md:w-1/4 lg:h-full">
          <PolicySidebar />
        </div>
        <main className="w-full px-0 md:w-3/4 lg:px-16">
          <RefundContent />
        </main>
      </div>
    </PageShell>
  );
}
