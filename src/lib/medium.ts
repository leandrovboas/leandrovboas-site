import { links } from "@/data/links";
import type { MediumArticle } from "@/types/content";

const MAX_ARTICLES = 3;
const EXCERPT_LENGTH = 160;

function extractTag(xml: string, tag: string): string | null {
  const match = xml.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  if (!match) return null;
  return (match[1] ?? "").replace(/^<!\[CDATA\[/, "").replace(/\]\]>$/, "").trim();
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return `${text.slice(0, length).trimEnd()}…`;
}

export async function getMediumArticles(): Promise<MediumArticle[]> {
  try {
    const response = await fetch(links.mediumFeed, {
      next: { revalidate: 86400 },
      headers: { "User-Agent": "leandrovboas-site" },
    });

    if (!response.ok) return [];

    const xml = await response.text();
    const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];

    const articles = items.slice(0, MAX_ARTICLES).map((item): MediumArticle | null => {
      const title = extractTag(item, "title");
      const url = extractTag(item, "link");
      const publishedAt = extractTag(item, "pubDate");
      const description = extractTag(item, "description");

      if (!title || !url || !publishedAt) return null;

      return {
        title,
        url: url.split("?")[0] ?? url,
        publishedAt,
        excerpt: description ? truncate(stripHtml(description), EXCERPT_LENGTH) : "",
      };
    });

    return articles.filter((article): article is MediumArticle => article !== null);
  } catch {
    return [];
  }
}
