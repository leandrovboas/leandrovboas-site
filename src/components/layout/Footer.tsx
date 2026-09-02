import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-border px-5 py-7 sm:px-8 lg:px-16">
      <div className="font-mono text-[13px] text-text-secondary">
        {t("copyright", { year })}
      </div>
      <a
        href="#top"
        className="font-mono text-[13px] text-text-secondary transition-colors duration-200 hover:text-accent"
      >
        {t("backToTop")}
      </a>
    </footer>
  );
}
