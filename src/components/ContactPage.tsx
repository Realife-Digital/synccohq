import Link from "next/link";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  BriefcaseIcon,
  HeadsetIcon,
} from "@phosphor-icons/react/dist/ssr";

type ContactOption = {
  title: string;
  description: string;
  actionLabel: string;
  href: string;
  external?: boolean;
};

type ContactResource = {
  title: string;
  description: string;
  linkLabel: string;
  href: string;
  external?: boolean;
};

const contactOptions: ContactOption[] = [
  {
    title: "Sales",
    description:
      "Speak with our team about project scope, pricing, timelines, or request a consultation for your next app or platform.",
    actionLabel: "Get a quote",
    href: "/get-quote",
  },
  {
    title: "Support",
    description:
      "Ask product questions, report issues, or get help with Syncco apps and services you already use.",
    actionLabel: "Contact support",
    href: "mailto:hello@synccolabs.com",
    external: true,
  },
];

const contactResources: ContactResource[] = [
  {
    title: "Get a quote",
    description: "Tell us about your project and receive a tailored proposal from our team.",
    linkLabel: "Start your quote",
    href: "/get-quote",
  },
  {
    title: "General communication",
    description: "For other questions, reach out by email.",
    linkLabel: "hello@synccolabs.com",
    href: "mailto:hello@synccolabs.com",
    external: true,
  },
  {
    title: "Blog",
    description: "Read insights on web development, mobile apps, design, and technology.",
    linkLabel: "Visit our blog",
    href: "/blog",
  },
  {
    title: "Partnerships",
    description: "For collaborations, integrations, and long-term product partnerships.",
    linkLabel: "Partner with us",
    href: "mailto:hello@synccolabs.com",
    external: true,
  },
];

const optionIcons = [BriefcaseIcon, HeadsetIcon] as const;

function ContactOptionCard({
  title,
  description,
  actionLabel,
  href,
  external,
  index,
}: ContactOption & { index: number }) {
  const Icon = optionIcons[index] ?? BriefcaseIcon;

  return (
    <Link
      href={href}
      {...(external ? { rel: "noopener noreferrer" } : {})}
      className="group flex min-h-[280px] flex-col rounded-2xl border border-outline bg-surface p-6 transition-all duration-200 hover:border-primary/40 hover:shadow-lg md:min-h-[304px] md:p-8"
    >
      <Icon
        size={48}
        weight="light"
        className="text-surface-on-variant transition-colors duration-200 group-hover:text-primary md:size-14"
        aria-hidden
      />
      <div aria-hidden className="flex-1" />
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold tracking-tight text-surface-on">{title}</h3>
        <p className="text-sm leading-relaxed text-surface-on-variant">{description}</p>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-200 group-hover:text-primary/80">
          {actionLabel}
          <ArrowRightIcon size={16} aria-hidden />
        </span>
      </div>
    </Link>
  );
}

function ContactResourceRow({
  title,
  description,
  linkLabel,
  href,
  external,
}: ContactResource) {
  const isExternal = external ?? href.startsWith("mailto:");

  return (
    <div className="flex flex-col gap-4 border-b border-outline py-8 last:border-b-0 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-8 md:py-10">
      <div className="min-w-0 flex-1">
        <h3 className="text-base font-semibold text-surface-on">{title}</h3>
        <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-surface-on-variant">{description}</p>
      </div>
      <Link
        href={href}
        {...(isExternal ? { rel: "noopener noreferrer" } : {})}
        className="inline-flex min-h-11 shrink-0 items-center gap-1.5 text-sm font-medium text-primary transition-colors duration-200 hover:text-primary/80"
      >
        {linkLabel}
        {isExternal ? <ArrowUpRightIcon size={16} aria-hidden /> : <ArrowRightIcon size={16} aria-hidden />}
      </Link>
    </div>
  );
}

export default function ContactPage() {
  return (
    <section className="bg-surface py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16 xl:grid-cols-[minmax(0,24rem)_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-surface-on md:text-5xl">
                How can we help?
              </h1>
              <p className="max-w-md text-base leading-relaxed text-surface-on-variant">
                Get in touch with our team for project inquiries, product support, partnership opportunities, or
                general feedback.
              </p>
            </div>
          </aside>

          <div className="flex flex-col gap-10 md:gap-12">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {contactOptions.map((option, index) => (
                <li key={option.title}>
                  <ContactOptionCard {...option} index={index} />
                </li>
              ))}
            </ul>

            <div>
              {contactResources.map((resource) => (
                <ContactResourceRow key={resource.title} {...resource} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
