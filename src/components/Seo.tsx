import Head from "next/head";
import { absoluteUrl, siteConfig } from "@/lib/seo";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  noindex?: boolean;
};

export default function Seo({
  title = siteConfig.defaultTitle,
  description = siteConfig.defaultDescription,
  path = "/",
  noindex = false,
}: SeoProps) {
  const canonicalUrl = absoluteUrl(path);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="application-name" content={siteConfig.shortName} />
      <meta name="theme-color" content={siteConfig.themeColor} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={siteConfig.locale} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {noindex ? <meta name="robots" content="noindex, nofollow" /> : <meta name="robots" content="index, follow" />}
    </Head>
  );
}
