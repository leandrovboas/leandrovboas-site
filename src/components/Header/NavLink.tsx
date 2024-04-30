import { useRouter } from "next/router";
import { NavLinkContainer } from "./styles";
import { Link } from "react-scroll";

interface Props {
  title: string;
  path: string;
  includes?: boolean;
  section: string;
}

export default function NavLink({
  title,
  path,
  includes,
  section
}: Readonly<Props>) {
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

  const isactive = verifyIfIsActive().toString();
  return (
    <NavLinkContainer isactive={isactive}>
      <Link
        href={path}
        activeClass="active"
        className={section}
        to={section}
        spy={true}
        smooth={true}
        duration={durationFn}
      >
        &lt; {title} &gt;
      </Link>
    </NavLinkContainer>
  );
}
