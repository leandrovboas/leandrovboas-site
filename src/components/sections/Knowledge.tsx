import { getLocale, getTranslations } from "next-intl/server";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getMediumArticles } from "@/lib/medium";
import { formatArticleDate } from "@/lib/date";

export async function Knowledge() {
  const [t, locale, articles] = await Promise.all([
    getTranslations("knowledge"),
    getLocale(),
    getMediumArticles(),
  ]);

  if (articles.length === 0) return null;

  return (
    <section id="knowledge" className="mx-auto max-w-[1400px] px-6 py-[clamp(80px,12vw,140px)] sm:px-8 lg:px-16">
      <SectionLabel>{t("label")}</SectionLabel>
      <h2 className="mb-12 mt-6 max-w-[640px] font-display text-[clamp(24px,3vw,34px)] font-semibold text-text-primary">
        {t("heading")}
      </h2>
      <Reveal className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <a
            key={article.url}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded border border-border bg-surface p-7 transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-accent/35"
          >
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-accent">
              {t("sourceLabel")}
            </div>
            <h3 className="mb-3 font-display text-[19px] font-semibold leading-[1.3] text-text-primary">
              {article.title}
            </h3>
            {article.excerpt && (
              <p className="mb-5 font-sans text-[14.5px] leading-[1.7] text-text-secondary">
                {article.excerpt}
              </p>
            )}
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-text-secondary">
                {formatArticleDate(article.publishedAt, locale)}
              </span>
              <span className="text-accent" aria-hidden="true">→</span>
            </div>
          </a>
        ))}
      </Reveal>
    </section>
  );
}
