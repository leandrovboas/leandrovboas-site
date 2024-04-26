import { useTranslations } from 'next-intl';
import { HomeCardContainer, ImgBx, Details } from './styles';

function HomeCard() {
  const t = useTranslations('Home.HomeHero');
  return (
    <HomeCardContainer>
      <ImgBx>
        <img src="/leandro.png" alt="Minha Foto" />
      </ImgBx>
      <Details>
        <h2>
          Leandro Vilas Boas <br />
          <span>{String(t('funcao'))}</span>
        </h2>
      </Details>
    </HomeCardContainer>
  );
}

export default HomeCard;
