import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineMedium,
  AiOutlineInstagram
} from "react-icons/ai";
import { ContainerFooter, Container } from "./styles";
import { FaArrowAltCircleUp } from "react-icons/fa";

interface FooterProps {
  scrollPosition: number;
}

function Footer({ scrollPosition }: FooterProps) {
  function handleRedirect(url: string | undefined) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <Container ScrollPosition={scrollPosition}>
      <ContainerFooter>
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
      </ContainerFooter>
    </Container>
  );
}

export default Footer;
