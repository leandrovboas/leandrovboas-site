import { FcMindMap } from "react-icons/fc";
import { IoLogoJavascript, IoLogoNodejs, IoLogoPython } from "react-icons/io";
import { FaAws } from "react-icons/fa";
import {
  SiAzuredevops,
  SiCsharp,
  SiDocker,
  SiKubernetes,
  SiNestjs,
  SiNextdotjs
} from "react-icons/si";
import SectionTitle from "../SectionTitle";
import { Container } from "./styles";
import TecnologiasItem from "./TecnologiasItem";

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle
        icon={<FcMindMap />}
        title="Tecnologias"
        description="Alguns Tecnologias que conheço"
      />
      <section>
        <TecnologiasItem title="AWS" icon={<FaAws />} />
        <TecnologiasItem title="Azure" icon={<SiAzuredevops />} />
        <TecnologiasItem title="Docker" icon={<SiDocker />} />
        <TecnologiasItem title="Kubernetes" icon={<SiKubernetes />} />
        <TecnologiasItem title="CSharp" icon={<SiCsharp />} />
        <TecnologiasItem title="Nodejs" icon={<IoLogoNodejs />} />
        <TecnologiasItem title="Nextjs" icon={<SiNextdotjs />} />
        <TecnologiasItem title="NestJs" icon={<SiNestjs />} />
        <TecnologiasItem title="JavaScript" icon={<IoLogoJavascript />} />
        <TecnologiasItem title="Python" icon={<IoLogoPython />} />
      </section>
    </Container>
  );
}

export default Conhecimentos;
