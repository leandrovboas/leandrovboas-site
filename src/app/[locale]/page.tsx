import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { TechStrip } from "@/components/sections/TechStrip";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { Experience } from "@/components/sections/Experience";
import { Work } from "@/components/sections/Work";
import { Technology } from "@/components/sections/Technology";
import { Knowledge } from "@/components/sections/Knowledge";
import { Contact } from "@/components/sections/Contact";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <TechStrip />
      <About />
      <Expertise />
      <Experience />
      <Work />
      <Technology />
      <Knowledge />
      <Contact />
    </>
  );
}
