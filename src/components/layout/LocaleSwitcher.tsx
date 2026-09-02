"use client";

import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LOCALE_LABELS: Record<string, string> = {
  "pt-BR": "PT",
  en: "EN",
};

export function LocaleSwitcher() {
  const activeLocale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 font-mono text-xs tracking-wide text-text-secondary">
      {routing.locales.map((locale, index) => (
        <span key={locale} className="flex items-center gap-1">
          {index > 0 && <span aria-hidden="true">/</span>}
          <a
            href={`/${locale}${pathname === "/" ? "" : pathname}`}
            aria-current={locale === activeLocale ? "true" : undefined}
            className={
              locale === activeLocale
                ? "text-accent"
                : "transition-colors duration-200 hover:text-accent"
            }
          >
            {LOCALE_LABELS[locale]}
          </a>
        </span>
      ))}
    </div>
  );
}
