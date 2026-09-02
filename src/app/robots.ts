import type { MetadataRoute } from "next";
import { links } from "@/data/links";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${links.siteUrl}/sitemap.xml`,
  };
}
