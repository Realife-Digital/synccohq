export const siteConfig = {
  name: "Syncco Labs",
  shortName: "Syncco",
  url: "https://synccolabs.com",
  locale: "en_US",
  themeColor: "#18181b",
  email: "hello@synccolabs.com",
  defaultTitle: "Syncco Labs | Software Design & Development Studio",
  defaultDescription:
    "Syncco Labs partners with founders and product teams to design, build, and launch web platforms, mobile apps, and internal tools with clarity, speed, and craft.",
} as const;

export type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export const pagesSeo = {
  home: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    path: "/",
  },
  contact: {
    title: "Contact | Syncco Labs",
    description:
      "Get in touch with Syncco Labs for project inquiries, product support, partnerships, or general questions. We respond within 24 hours.",
    path: "/contact",
  },
  getQuote: {
    title: "Get a Quote | Syncco Labs",
    description:
      "Request a tailored project quote from Syncco Labs. Tell us about your web platform, mobile app, or internal tool and receive scope, timeline, and pricing.",
    path: "/get-quote",
  },
  blog: {
    title: "Blog | Syncco Labs",
    description:
      "Insights on product development, web engineering, mobile apps, design, and software delivery from the Syncco Labs team.",
    path: "/blog",
  },
  careers: {
    title: "Careers | Syncco Labs",
    description:
      "Join Syncco Labs and help build web platforms, mobile apps, and internal tools for teams that value clarity, craft, and dependable delivery.",
    path: "/careers",
  },
  privacy: {
    title: "Privacy Policy | Syncco Labs",
    description:
      "Read how Syncco Labs collects, uses, and protects your personal information when you use our website and services.",
    path: "/privacy",
  },
  terms: {
    title: "Terms and Conditions | Syncco Labs",
    description:
      "Review the terms and conditions governing your use of Syncco Labs services, products, and website.",
    path: "/terms-and-conditions",
  },
  refund: {
    title: "Refund Policy | Syncco Labs",
    description:
      "Understand Syncco Labs refund policy for software development services and digital product engagements.",
    path: "/refund-policy",
  },
} as const satisfies Record<string, PageSeo>;

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${path}`;
}
