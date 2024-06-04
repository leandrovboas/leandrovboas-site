import { FcAbout } from "react-icons/fc";
import SectionTitle from "../SectionTitle";
import TextAboutMe from "./TextAboutMe";
import { AboutContainer, Container, ImageContainer } from "./styles";
import { TbUserQuestion } from "react-icons/tb";

export function AboutMe() {
  return (
    <Container>
      <SectionTitle icon={<TbUserQuestion />} title="About Me" />
      <AboutContainer>
        <ImageContainer>
          <img
            src="/967546dc-09dd-4ce1-a8ba-7a63f4938543.jpeg"
            alt="Minha Foto"
          />
        </ImageContainer>
        <TextAboutMe />
      </AboutContainer>
    </Container>
  );
}
