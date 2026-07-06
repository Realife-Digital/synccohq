import ContactPage from "@/components/ContactPage";
import PageShell from "@/components/PageShell";
import { pagesSeo } from "@/lib/seo";

export default function Contact() {
  return (
    <PageShell
      title={pagesSeo.contact.title}
      description={pagesSeo.contact.description}
      path={pagesSeo.contact.path}
    >
      <ContactPage />
    </PageShell>
  );
}
