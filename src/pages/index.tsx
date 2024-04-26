import Aos from 'aos';
import { useEffect } from 'react';
import Head from 'next/head';
import { Element, Link } from 'react-scroll';
import Experiencias from '../components/Experiencias';
import HomeHero from '../components/HomeHero';
import { HomeContainer } from '../styles/HomeStyles';
import Conhecimentos from '../components/Conhecimentos';
import 'aos/dist/aos.css';
import ArrowDownPage from '../components/ArrowDownPage';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const durationFn = function (deltaTop: any) {
    return deltaTop;
  };

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
        {/* <Link
          href="/"
          activeClass="active"
          className={'expe'}
          to={'expe'}
          spy={true}
          smooth={true}
          duration={durationFn}
        >
          <ArrowDownPage />
        </Link> */}
        <ArrowDownPage />
        <Element name="expe" className="expe" id="containerElement">
          <Experiencias />
        </Element>
        <Element name="tech" className="tech" id="containerElement">
          <Conhecimentos />
        </Element>
      </main>
    </HomeContainer>
  );
}
