import { Container, Title, SubTitle } from './styles';

interface BannerProjetoProps {
  title: string;
  type: string;
  imgUrl: string;
}

function BannerProjeto({ title, type, imgUrl }: BannerProjetoProps) {
  return (
    <Container imgUrl={imgUrl}>
      <section>
        <Title>{title}</Title>
        <SubTitle>{type}</SubTitle>
      </section>
    </Container>
  );
}

export default BannerProjeto;
