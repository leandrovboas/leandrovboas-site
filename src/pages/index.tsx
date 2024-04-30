import { Inter } from "next/font/google";
import Head from "next/head";
import { Element } from "react-scroll";
import { HomeContainer } from "@/styles/HomeStyles";
import HomeHero from "@/components/HomeHero";
import ArrowDownPage from "@/components/ArrowDownPage";
import Experiencias from "@/components/Experiencias";
import Tecnologias from "@/components/Tecnologias";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <HomeContainer>
      <Head>
        <title>Home | Leandrovboas</title>
        <meta name="description" content="Sou um Engenheiro de software" />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um Engenheiro de software"
        />
      </Head>
      <main className="container">
        <Element name="home" className="home" id="containerElement">
          <HomeHero />
        </Element>
        <ArrowDownPage />
        <Element name="expe" className="expe" id="containerElement">
          <Experiencias />
        </Element>
        <Element name="tech" className="tech" id="containerElement">
          <Tecnologias />
        </Element>
      </main>
    </HomeContainer>
  );
}
