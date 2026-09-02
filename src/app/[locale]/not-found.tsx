import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("nav");

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-mono text-sm tracking-[0.1em] text-accent">404</p>
      <h1 className="font-display text-3xl font-semibold text-text-primary">
        Page not found
      </h1>
      <Link href="/" className="font-sans text-accent hover:text-sky">
        {t("brand")} →
      </Link>
    </div>
  );
}
