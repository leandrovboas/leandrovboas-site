import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { links } from "@/data/links";
import portrait from "../../../public/leandro-portrait.webp";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="top"
      className="mx-auto grid max-w-[1500px] grid-cols-1 gap-14 px-6 pt-[120px] pb-16 lg:grid-cols-[0.9fr_1.15fr_0.95fr] lg:items-center lg:gap-8 lg:px-16 lg:pt-[150px] lg:pb-16 lg:min-h-[92vh]"
    >
      <Reveal className="flex min-w-0 flex-col justify-center gap-6">
        <h1 className="font-display text-[clamp(46px,7vw,92px)] font-bold leading-[0.97] tracking-[-0.02em] text-text-primary">
          <div>{t("nameLine1")}</div>
          <div>{t("nameLine2")}</div>
        </h1>
        <div className="mt-1 flex items-center gap-3.5">
          <div className="h-0.5 w-11 animate-line-grow bg-accent" />
          <div className="font-mono text-xs uppercase tracking-[0.14em] text-text-secondary">
            {t("eyebrow")}
          </div>
        </div>
      </Reveal>

      <Reveal
        delay={120}
        className="relative h-[clamp(320px,58vh,620px)] min-w-0"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky/15" />
        <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-white/5" />
        <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-white/5" />
        <div className="group relative z-10 mx-auto h-[94%] w-[76%] overflow-hidden rounded-2xl">
          <Image
            src={portrait}
            alt={t("portraitAlt")}
            fill
            priority
            sizes="(min-width: 1024px) 30vw, 70vw"
            className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-105"
          />
        </div>
      </Reveal>

      <Reveal delay={240} className="flex min-w-0 flex-col justify-center gap-4.5">
        <div className="font-mono text-[13px] tracking-[0.1em] text-accent">
          {t("introLabel")}
        </div>
        <div className="font-display text-[clamp(28px,3.8vw,42px)] font-bold leading-[1.12] text-text-primary">
          <div>{t("roleLine1")}</div>
          <div>{t("roleLine2")}</div>
        </div>
        <div className="font-sans text-base font-semibold text-accent">
          {t("focus")}
        </div>
        <p className="max-w-[380px] font-sans text-base leading-[1.75] text-text-secondary">
          {t("description")}
        </p>
        <div className="mt-2 flex flex-wrap gap-4">
          <LinkButton href="#work" variant="solid">
            {t("ctaWork")}
          </LinkButton>
          <LinkButton href={links.linkedin} target="_blank" rel="noopener noreferrer">
            {t("ctaLinkedin")}
          </LinkButton>
        </div>
      </Reveal>
    </section>
  );
}
