import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { ExperienceItem } from "@/types/content";

export function Experience() {
  const t = useTranslations("experience");
  const items = t.raw("items") as ExperienceItem[];

  return (
    <section id="experience" className="mx-auto max-w-[1400px] px-6 py-[clamp(80px,12vw,140px)] sm:px-8 lg:px-16">
      <SectionLabel>{t("label")}</SectionLabel>
      <Reveal className="relative mt-14 pl-10">
        <div className="absolute inset-y-1.5 left-0 w-px bg-white/10" aria-hidden="true" />
        <ol className="flex flex-col gap-16">
          {items.map((item) => (
            <li key={`${item.company}-${item.period}`} className="relative pl-8">
              <span
                className="absolute -left-[45px] top-1.5 size-2.5 rounded-full border-2 border-accent bg-bg"
                aria-hidden="true"
              />
              <div className="mb-2.5 font-mono text-[13px] tracking-[0.06em] text-accent">
                {item.period}
              </div>
              <h3 className="font-display text-[22px] font-semibold text-text-primary">
                {item.role}
                <span className="ml-2.5 font-sans text-base font-normal text-text-secondary">
                  — {item.company}
                </span>
              </h3>
              <p className="mt-3 max-w-[640px] font-sans text-[15.5px] leading-[1.75] text-text-secondary">
                {item.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-[3px] border border-white/10 px-2.5 py-1 font-mono text-xs text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
