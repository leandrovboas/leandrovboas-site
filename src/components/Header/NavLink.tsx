import { useRouter } from 'next/router';
import { NavLinkContainer } from './styles';
import { Link } from 'react-scroll';

interface Props {
  title: string;
  path: string;
  includes?: boolean;
  section: string;
}

export default function NavLink({ title, path, includes, section }: Props) {
  const router = useRouter();

  const durationFn = function (deltaTop: any) {
    return deltaTop;
  };

  function verifyIfIsActive() {
    if (includes) {
      return router.pathname.includes(path);
    }
    return path === router.pathname;
  }

  const isActive = verifyIfIsActive();
  return (
    <NavLinkContainer isActive={isActive}>
      <Link
        href={path}
        activeClass="active"
        className={section}
        to={section}
        spy={true}
        smooth={true}
        duration={durationFn}
      >
        <a> &lt; {title} &gt;</a>
      </Link>
    </NavLinkContainer>
  );
}
