import Main from "@/components/Main";
import PageShell from "@/components/PageShell";
import SupportSection from "@/components/Support";
import { pagesSeo } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  DeviceMobileIcon,
  GearSixIcon,
  GlobeIcon,
  LightbulbFilamentIcon,
} from "@phosphor-icons/react/dist/ssr";

const services = [
  {
    title: "Product strategy",
    description:
      "Turn ideas into scoped roadmaps, user journeys, and launch plans before a single line of code is written.",
  },
  {
    title: "Web platforms",
    description:
      "Ship fast, accessible websites, dashboards, and business platforms with modern web tooling.",
  },
  {
    title: "Mobile apps",
    description:
      "Design and build native-quality mobile experiences that feel polished and dependable.",
  },
  {
    title: "Automation & integrations",
    description:
      "Connect workflows, data, and APIs so teams spend less time on manual work.",
  },
];

const capabilities = [
  { icon: LightbulbFilamentIcon, label: "Discovery workshops" },
  { icon: GlobeIcon, label: "Full-stack web development" },
  { icon: DeviceMobileIcon, label: "iOS & Android apps" },
  { icon: GearSixIcon, label: "API design & automation" },
];

const processSteps = [
  {
    title: "Discover",
    description:
      "We align on goals, users, constraints, and what success looks like before committing to a build.",
  },
  {
    title: "Design",
    description:
      "Flows, interfaces, and architecture are shaped early so your team can review and react quickly.",
  },
  {
    title: "Deliver",
    description:
      "We develop, test, and ship with frequent checkpoints and a focus on maintainable code.",
  },
];

const trustLogos = [
  { src: "/monierate.png", alt: "Monierate" },
  { src: "/palremit-o.svg", alt: "Palremit" },
  { src: "/images/Shopify-Logo.svg", alt: "Shopify" },
];

export default function Home() {
  return (
    <PageShell
      title={pagesSeo.home.title}
      description={pagesSeo.home.description}
      path={pagesSeo.home.path}
    >
      <Main />

      <section className="border-b border-outline bg-surface py-20">
        <div className="section-shell">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-semibold text-surface-on md:text-4xl">
              Software for teams that need to move with confidence
            </h2>
            <p className="mt-4 text-base leading-relaxed text-surface-on-variant">
              We partner with founders and product teams to plan, build, and launch digital products — from
              early-stage MVPs to production platforms.
            </p>
          </div>

          <ul className="divide-y divide-outline border-y border-outline">
            {services.map((service) => (
              <li
                key={service.title}
                className="hover-slide-right grid cursor-default gap-3 border-l-2 border-transparent py-8 pl-4 first:border-brand hover:border-brand/40 md:grid-cols-[240px_1fr] md:gap-12"
              >
                <h3 className="text-lg font-semibold text-surface-on">{service.title}</h3>
                <p className="text-base leading-relaxed text-surface-on-variant">{service.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface-variant py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold text-surface-on md:text-4xl">How we work</h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-surface-on-variant">
              A straightforward delivery model with clear milestones, honest communication, and decisions
              grounded in what your users actually need.
            </p>
            <ul className="mt-8 space-y-3">
              {capabilities.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm font-medium text-surface-on">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-brand/15 bg-brand-muted">
                    <Icon size={18} weight="regular" className="text-brand" aria-hidden />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <ol className="process-box-stack m-0 list-none p-0">
            {processSteps.map((step, index) => (
              <li key={step.title}>
                <div className="hover-slide-right cursor-default px-6 py-8">
                  <h3 className="text-lg font-semibold text-surface-on">
                    <span className="mr-2 text-brand">{String(index + 1).padStart(2, "0")}</span>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-surface-on-variant">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-outline bg-surface py-16">
        <div className="section-shell">
          <p className="mb-8 text-sm font-medium text-surface-on-variant">Trusted by teams building real products</p>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-8">
            {trustLogos.map((logo) => (
              <div key={logo.alt} className="flex h-10 items-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={40}
                  className="h-8 w-auto max-w-[140px] object-contain greyC"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-on">
        <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold md:text-4xl">Ready to start your next project?</h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-400">
              Tell us what you are building. We will respond with a clear scope, timeline, and next steps.
            </p>
          </div>
          <Link href="/get-quote" className="btn-secondary shrink-0 border-brand/30 bg-white text-surface-on hover:border-brand/50 hover:bg-brand-muted">
            Get a quote
            <ArrowRightIcon size={16} weight="bold" aria-hidden />
          </Link>
        </div>
      </section>

      <SupportSection />
    </PageShell>
  );
}
