import { useTranslations } from "next-intl";

export function TechStrip() {
  const t = useTranslations();
  const items = t.raw("techStrip") as string[];

  return (
    <div className="flex flex-wrap justify-center gap-11 border-y border-border bg-bg-alt px-5 py-8 sm:px-8 lg:px-16">
      {items.map((item) => (
        <span
          key={item}
          className="font-mono text-[13px] tracking-[0.08em] text-text-secondary/75"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
