import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

export default function Main() {
  return (
    <section className="border-b border-outline bg-surface">
      <div className="section-shell grid gap-12 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-end md:py-28 lg:gap-16">
        <div className="max-w-2xl">
          <p className="accent-label mb-4">Software studio</p>
          <h1 className="animate-zoom-out text-[clamp(2.25rem,4vw+1rem,3.75rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-surface-on">
            We design and ship software products for teams that need{" "}
            <span className="text-brand">clarity</span>, speed, and craft.
          </h1>
        </div>

        <div className="flex max-w-md flex-col gap-6 md:pb-2">
          <p className="text-base leading-relaxed text-surface-on-variant md:text-lg">
            Syncco Labs partners with founders and product teams to plan, build, and launch web platforms,
            mobile apps, and internal tools.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/get-quote" className="btn-primary">
              Start a project
              <ArrowRightIcon size={16} weight="bold" aria-hidden />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Talk to the team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
