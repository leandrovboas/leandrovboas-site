import { useTranslations } from 'next-intl';
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineMedium,
  AiOutlineInstagram
} from 'react-icons/ai';
import { Button, Container } from './styles';
import { IoLogoPython } from 'react-icons/io';
import { FaArrowAltCircleUp } from 'react-icons/fa';

interface FooterProps {
  scrollPosition: number;
}

function Footer({ scrollPosition }: FooterProps) {
  const t = useTranslations('Footer');

  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Button ScrollPosition={scrollPosition}>
      <Container>
        <div className="container">
          <button type="button" onClick={handleScrollTop}>
            <FaArrowAltCircleUp />
          </button>
          <section>
            <AiOutlineTwitter
              onClick={() => handleRedirect(process.env.NEXT_PUBLIC_TWITTER)}
            />
            <AiOutlineInstagram
              onClick={() => handleRedirect(process.env.NEXT_PUBLIC_INSTAGRM)}
            />
            <AiOutlineGithub
              onClick={() => handleRedirect(process.env.NEXT_PUBLIC_GITHUB)}
            />
            <AiFillLinkedin
              onClick={() => handleRedirect(process.env.NEXT_PUBLIC_LINKEDIN)}
            />
            <AiOutlineMedium
              onClick={() => handleRedirect(process.env.NEXT_PUBLIC_MEDIUM)}
            />
          </section>
        </div>
      </Container>
    </Button>
  );
}

export default Footer;
