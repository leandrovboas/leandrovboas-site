import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { ExpertiseCard } from "@/types/content";

export function Expertise() {
  const t = useTranslations("expertise");
  const cards = t.raw("cards") as ExpertiseCard[];

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-[clamp(80px,12vw,140px)] sm:px-8 lg:px-16">
      <SectionLabel>{t("label")}</SectionLabel>
      <Reveal className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className={[
              "rounded border p-8 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]",
              card.highlight
                ? "border-accent/40 bg-surface-accent"
                : "border-border bg-surface",
            ].join(" ")}
          >
            <h3 className="mb-5 font-display text-xl font-semibold text-text-primary">
              {card.title}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {card.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 font-sans text-[14.5px] text-text-secondary">
                  <span className="size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
