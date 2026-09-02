import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { links } from "@/data/links";

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: `${links.siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${links.siteUrl}/${l}`])
      ),
    },
  }));
}
