import Link from "next/link";
import { ChatCircleIcon, PhoneIcon, QuestionIcon } from "@phosphor-icons/react/dist/ssr";

const items = [
  {
    icon: PhoneIcon,
    title: "Talk to us",
    description: (
      <>
        Reach our team by email,{" "}
        <a href="tel:+2347012824846" className="font-medium text-surface-on underline-offset-2 hover:underline">
          phone
        </a>
        , or chat.
      </>
    ),
    link: { label: "Contact us", href: "/contact" },
  },
  {
    icon: QuestionIcon,
    title: "Got a question?",
    description: "Get answers from the Syncco support community and product experts.",
    link: { label: "Visit our forum", href: "#" },
  },
  {
    icon: ChatCircleIcon,
    title: "Need help with something specific?",
    description: "Submit a request and we will get back to you shortly.",
    link: { label: "Submit a ticket", href: "/contact" },
  },
];

export default function SupportSection() {
  return (
    <section className="border-t border-outline bg-surface-variant py-20">
      <div className="section-shell grid gap-10 md:grid-cols-3">
        {items.map(({ icon: Icon, title, description, link }) => (
          <div key={title}>
            <Icon size={24} className="mb-4 text-brand" aria-hidden />
            <h3 className="mb-2 text-lg font-semibold text-surface-on">{title}</h3>
            <p className="mb-4 text-sm leading-relaxed text-surface-on-variant">{description}</p>
            <Link href={link.href} className="link-subtle underline-offset-2 hover:underline">
              {link.label}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
