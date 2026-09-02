"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { MenuIcon, CloseIcon } from "@/components/ui/icons";
import { LocaleSwitcher } from "./LocaleSwitcher";

const SECTION_IDS = ["about", "expertise", "experience", "work", "knowledge", "contact"] as const;

export function Header() {
  const t = useTranslations("nav");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = SECTION_IDS.map((id) => ({
    id,
    label: t(`links.${id}`),
  }));

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-14">
        <Link
          href="/"
          className="font-display text-base font-semibold tracking-tight text-text-primary"
        >
          {t("brand")}
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label={t("brand")}>
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="font-sans text-[14.5px] text-text-secondary transition-colors duration-200 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <LocaleSwitcher />
        </nav>

        <button
          type="button"
          className="p-2 text-text-primary lg:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 top-20 flex flex-col items-center justify-center gap-8 bg-bg">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl font-semibold text-text-primary"
            >
              {link.label}
            </a>
          ))}
          <LocaleSwitcher />
        </div>
      )}
    </header>
  );
}
