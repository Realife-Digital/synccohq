import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-bold text-primary">
              Syncco Labs
            </Link>
            <p className="text-sm text-surface-on-variant mt-2">Building the future of digital experiences</p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
            <Link href="/blog" className="text-surface-on-variant hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/careers" className="text-surface-on-variant hover:text-primary transition-colors">
              Careers
            </Link>
            <Link href="/get-quote" className="text-surface-on-variant hover:text-primary transition-colors">
              Get Quote
            </Link>
            <Link href="/contact" className="text-surface-on-variant hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="border-t border-outline mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-surface-on-variant">&copy; {currentYear} Syncco Labs. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-surface-on-variant hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="/terms-and-conditions" className="text-surface-on-variant hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="/refund-policy" className="text-surface-on-variant hover:text-primary transition-colors">
                Refund
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
