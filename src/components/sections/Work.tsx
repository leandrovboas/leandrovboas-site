import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { WorkItem } from "@/types/content";

export function Work() {
  const t = useTranslations("work");
  const items = t.raw("items") as WorkItem[];

  return (
    <section id="work" className="mx-auto max-w-[1400px] px-6 py-[clamp(80px,12vw,140px)] sm:px-8 lg:px-16">
      <SectionLabel>{t("label")}</SectionLabel>
      <h2 className="mb-14 mt-6 max-w-[640px] font-display text-[clamp(24px,3vw,34px)] font-semibold text-text-primary">
        {t("heading")}
      </h2>

      <Reveal>
        <div className="flex flex-col">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={[
                "flex flex-wrap items-stretch gap-12 border-b border-white/[0.06] pb-14 mb-14 last:mb-0 last:border-0 last:pb-0",
                index % 2 === 1 ? "lg:flex-row-reverse" : "",
              ].join(" ")}
            >
              <div className="flex min-h-[280px] flex-1 basis-[380px] items-center justify-center rounded border border-border bg-surface p-6">
                <div className="text-center font-mono text-[13px] tracking-[0.06em] text-text-secondary">
                  {t("diagramCaption", { tag: item.tag })}
                </div>
              </div>

              <div className="flex flex-1 basis-[380px] flex-col justify-center gap-4">
                <div className="font-mono text-[13px] uppercase tracking-[0.08em] text-accent">
                  {item.tag}
                </div>
                <h3 className="font-display text-[26px] font-semibold text-text-primary">
                  {item.title}
                </h3>
                <dl className="flex flex-col gap-4">
                  <div>
                    <dt className="mb-1 font-mono text-xs uppercase tracking-[0.08em] text-text-secondary">
                      {t("problemLabel")}
                    </dt>
                    <dd className="font-sans text-[15px] leading-[1.7] text-text-secondary">
                      {item.problem}
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-mono text-xs uppercase tracking-[0.08em] text-text-secondary">
                      {t("architectureLabel")}
                    </dt>
                    <dd className="font-sans text-[15px] leading-[1.7] text-text-secondary">
                      {item.architecture}
                    </dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-mono text-xs uppercase tracking-[0.08em] text-text-secondary">
                      {t("outcomeLabel")}
                    </dt>
                    <dd className="font-sans text-[15px] leading-[1.7] text-text-secondary">
                      {item.outcome}
                    </dd>
                  </div>
                </dl>
                <div className="mt-1 flex flex-wrap gap-2.5">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-[3px] border border-white/10 px-2.5 py-1 font-mono text-xs text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
