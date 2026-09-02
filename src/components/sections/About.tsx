import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { StatItem } from "@/types/content";

export function About() {
  const t = useTranslations("about");
  const stats = t.raw("stats") as StatItem[];

  return (
    <section id="about" className="mx-auto max-w-[1400px] px-6 py-[clamp(100px,14vw,160px)] sm:px-8 lg:px-16">
      <Reveal className="grid grid-cols-1 gap-14 md:grid-cols-2">
        <div>
          <SectionLabel>{t("label")}</SectionLabel>
          <h2 className="mt-6 font-display text-[clamp(26px,3.4vw,40px)] font-semibold leading-[1.28] text-text-primary">
            {t("heading")}
          </h2>
        </div>
        <div>
          <p className="mb-12 font-sans text-[17px] leading-[1.8] text-text-secondary">
            {t("paragraph")}
          </p>
          <div className="flex flex-wrap gap-12">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-[clamp(32px,4vw,46px)] font-bold text-text-primary">
                  {stat.value}
                </div>
                <div className="mt-1.5 font-sans text-sm text-text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
