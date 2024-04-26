import { useTranslations } from 'next-intl';
import Link from 'next/link';
import NavLink from './NavLink';
import { Container } from './styles';

function Header() {
  const t = useTranslations('Header');
  return (
    <Container>
      <h1>
        <Link href="/">Leandrovboas</Link>
      </h1>
      <ul>
        <NavLink title={String(t('home'))} path="/" section="home" />
        <NavLink title={String(t('experiencias'))} path="/" section="expe" />
        <NavLink title={String(t('tecnologias'))} path="/" section="tech" />
      </ul>
      <button type="button">
        <Link href="/contato">{String(t('contato'))}</Link>
      </button>
    </Container>
  );
}

export default Header;
