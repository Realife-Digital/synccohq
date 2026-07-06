import Logo from "@/components/Logo";
import Link from "next/link";

const footerLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Get quote", href: "/get-quote" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms-and-conditions" },
  { label: "Refund", href: "/refund-policy" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-outline bg-primary text-primary-on">
      <div className="section-shell py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div>
            <Logo inverted className="mb-4" />
            <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
              Syncco Labs builds web platforms, mobile apps, and internal tools for teams that want
              dependable delivery without agency noise.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="mb-3 font-medium text-white">Company</p>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-zinc-400 transition-colors hover:text-brand">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 font-medium text-white">Legal</p>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-zinc-400 transition-colors hover:text-brand">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-zinc-800 pt-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>&copy; {currentYear} Syncco Labs. All rights reserved.</p>
          <a href="mailto:hello@synccolabs.com" className="transition-colors hover:text-brand">
            hello@synccolabs.com
          </a>
        </div>
      </div>
    </footer>
  );
}
