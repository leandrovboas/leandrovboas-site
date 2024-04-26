import { useTranslations } from 'next-intl';
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMedium,
  AiOutlineTwitter
} from 'react-icons/ai';
import ItemsContato from './ItemsContato';
import { Container } from './styles';

function Contato() {
  const t = useTranslations('Contato2');

  return (
    <Container>
      <h1># {String(t('title'))}</h1>
      <h2>
        {' '}
        <>
          {String(t('sub-title1'))}
          <br />
          {String(t('sub-title2'))}
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
