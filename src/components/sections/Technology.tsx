import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { TechColumn } from "@/types/content";

export function Technology() {
  const t = useTranslations("technology");
  const columns = t.raw("columns") as TechColumn[];

  return (
    <section className="bg-bg-alt">
      <div className="mx-auto max-w-[1400px] px-6 py-[clamp(80px,12vw,140px)] sm:px-8 lg:px-16">
        <SectionLabel>{t("label")}</SectionLabel>
        <Reveal className="mt-12 grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4.5 border-b border-white/[0.08] pb-3 font-display text-sm font-semibold uppercase tracking-[0.08em] text-accent">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {column.items.map((item) => (
                  <li key={item} className="font-sans text-[15px] text-text-primary">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
