import { HomeCardContainer, ImgBx, Details } from "./styles";

function HomeCard() {
  return (
    <HomeCardContainer>
      <ImgBx>
        <img src="/leandro.png" alt="Minha Foto" />
      </ImgBx>
      <Details>
        <h2>
          Leandro Vilas Boas <br />
          <span>Engenheiro de Software</span>
        </h2>
      </Details>
    </HomeCardContainer>
  );
}

export default HomeCard;
