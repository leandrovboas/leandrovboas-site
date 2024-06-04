import Link from "next/link";
import NavLink from "./NavLink";
import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <h1>
        <Link href="/">Leandrovboas</Link>
      </h1>
      <ul>
        <NavLink title="Home" path="/" section="home" />
        <NavLink title="About" path="/" section="about" />
        <NavLink title="experiencias" path="/" section="expe" />
        <NavLink title="tecnologias" path="/" section="tech" />
      </ul>
      <button type="button">
        <Link href="/contato">Contato</Link>
      </button>
    </Container>
  );
}

export default Header;
