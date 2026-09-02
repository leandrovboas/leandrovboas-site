import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { LinkedInIcon, GithubIcon, MailIcon } from "@/components/ui/icons";
import { links } from "@/data/links";

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="border-t border-border bg-bg-alt px-6 py-[clamp(110px,16vw,190px)] text-center sm:px-8 lg:px-16">
      <Reveal className="mx-auto flex max-w-[880px] flex-col items-center">
        <h2 className="mb-6 font-display text-[clamp(32px,5vw,56px)] font-bold leading-[1.15] text-text-primary">
          {t("heading")}
        </h2>
        <p className="mx-auto mb-12 max-w-[540px] font-sans text-lg leading-[1.7] text-text-secondary">
          {t("paragraph")}
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          <LinkButton href={links.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="size-4" />
            {t("linkedin")}
          </LinkButton>
          <LinkButton href={links.github} target="_blank" rel="noopener noreferrer">
            <GithubIcon className="size-4" />
            {t("github")}
          </LinkButton>
          <LinkButton href={links.linkedin} target="_blank" rel="noopener noreferrer" variant="solid">
            {t("getInTouch")}
          </LinkButton>
        </div>
        <a
          href={`mailto:${links.email}`}
          className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-text-secondary transition-colors duration-200 hover:text-accent"
        >
          <MailIcon className="size-4" />
          {links.email}
        </a>
      </Reveal>
    </section>
  );
}
