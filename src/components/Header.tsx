import Logo from "@/components/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ArrowRightIcon, ListIcon, XIcon } from "@phosphor-icons/react/dist/ssr";

const navLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

function navLinkClass(isActive: boolean) {
  return [
    "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200",
    isActive
      ? "bg-brand-muted text-surface-on ring-1 ring-brand/20"
      : "text-surface-on-variant hover:text-surface-on",
  ].join(" ");
}

export default function Header() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-outline bg-surface/90 backdrop-blur-md">
      <div className="section-shell flex items-center justify-between gap-4 py-4">
        <Logo onClick={closeMobileMenu} />

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClass(router.pathname === link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/get-quote" className="btn-primary py-2.5">
            Get quote
            <ArrowRightIcon size={16} weight="bold" aria-hidden />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-surface-on transition-colors hover:bg-surface-variant md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <XIcon size={22} aria-hidden /> : <ListIcon size={22} aria-hidden />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-outline bg-surface md:hidden">
          <nav aria-label="Mobile" className="section-shell flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={navLinkClass(router.pathname === link.href)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/get-quote" onClick={closeMobileMenu} className="btn-primary mt-3">
              Get quote
              <ArrowRightIcon size={16} weight="bold" aria-hidden />
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
