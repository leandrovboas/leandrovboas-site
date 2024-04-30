import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMedium,
  AiOutlineTwitter
} from "react-icons/ai";
import ItemsContato from "./ItemsContato";
import { Container } from "./styles";

function Contato() {
  return (
    <Container>
      <h1># Entre em contato comigo</h1>
      <h2>
        {" "}
        <>
          Preencha o formulário abaixo
          <br />
          que eu vou te responder em breve
        </>
      </h2>
      <ItemsContato
        title="@Leandrovboas"
        path={process.env.NEXT_PUBLIC_TWITTER}
        icon={<AiOutlineTwitter />}
      />
      <ItemsContato
        title="@Leandrovboas"
        path={process.env.NEXT_PUBLIC_INSTAGRM}
        icon={<AiOutlineInstagram />}
      />
      <ItemsContato
        title="@Leandrovboas"
        path={process.env.NEXT_PUBLIC_GITHUB}
        icon={<AiOutlineGithub />}
      />
      <ItemsContato
        title="Leandro Vilas Boas"
        path={process.env.NEXT_PUBLIC_LINKEDIN}
        icon={<AiFillLinkedin />}
      />
      <ItemsContato
        title="@Leandrovboas"
        path={process.env.NEXT_PUBLIC_MEDIUM}
        icon={<AiOutlineMedium />}
      />
    </Container>
  );
}

export default Contato;
