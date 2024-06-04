import { Link } from "react-scroll";
import { ArrowContainer } from "./styles";

function ArrowDownPage() {
  const durationFn = function (deltaTop: any) {
    return deltaTop;
  };
  return (
    <ArrowContainer>
      <div className="linkClasses">
        <Link
          href="/"
          activeClass="Active"
          className="about"
          to="about"
          spy={true}
          smooth={true}
          duration={durationFn}
        >
          <span>
            ________________ _________________ _________________
            _________________ __________________ ________________
          </span>
        </Link>
      </div>
      <span></span>
      <span></span>
    </ArrowContainer>
  );
}

export default ArrowDownPage;
