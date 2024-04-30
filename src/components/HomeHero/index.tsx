import HomeCard from "../HomeCard";
import { Container, InfosContainer, CodeItem } from "./styles";

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <HomeCard />
      <div>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {"\u007B"}
            <div>
              Nome : <span className="blue">Leandro,</span>
            </div>
            <div>
              Sobrenome :<span className="blue">Vilas Boas</span>
            </div>
            <div>
              Github :<span className="blue">Leandrovboas</span>
            </div>
            {"\u007D"}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//Infos profissionais</span>
            <span className="purple">Cargo</span> {"\u007B"}
            <div>
              Função : <span className="blue">Engenheiro de Software</span>
            </div>
            <div>
              Empresa : <span className="blue">Lambda3 / Tivit</span>
            </div>
            {"\u007D"}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
