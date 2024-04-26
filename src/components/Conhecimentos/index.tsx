import { FcMindMap } from 'react-icons/fc';
import { IoLogoJavascript, IoLogoNodejs, IoLogoPython } from 'react-icons/io';
import { FaAws, FaReact } from 'react-icons/fa';
import {
  SiAzuredevops,
  SiCsharp,
  SiDocker,
  SiKubernetes,
  SiNestjs,
  SiNextdotjs
} from 'react-icons/si';
import { useTranslations } from 'next-intl';
import SectionTitle from '../SectionTitle';
import { Container } from './styles';
import ConhecimentoItem from './ConhecimentoItem';

function Conhecimentos() {
  const t = useTranslations('Home.conhecimentos');
  return (
    <Container>
      <SectionTitle
        icon={<FcMindMap />}
        title={String(t('title'))}
        description={String(t('subtitle'))}
      />
      <section>
        <ConhecimentoItem title="CSharp" icon={<SiCsharp />} />
        <ConhecimentoItem title="Nodejs" icon={<IoLogoNodejs />} />
        <ConhecimentoItem title="Nextjs" icon={<SiNextdotjs />} />
        <ConhecimentoItem title="NestJs" icon={<SiNestjs />} />
        <ConhecimentoItem title="AWS" icon={<FaAws />} />
        <ConhecimentoItem title="Azure" icon={<SiAzuredevops />} />
        <ConhecimentoItem title="Docker" icon={<SiDocker />} />
        <ConhecimentoItem title="Kubernetes" icon={<SiKubernetes />} />
        <ConhecimentoItem title="JavaScript" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="Python" icon={<IoLogoPython />} />
      </section>
    </Container>
  );
}

export default Conhecimentos;
