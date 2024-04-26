import { useTranslations } from 'next-intl';
import { Container } from './styles';

function ErroInterno() {
  const t = useTranslations('ErroInterno');
  return (
    <Container>
      <p>{String(t('erroInterno'))}</p>
    </Container>
  );
}

export default ErroInterno;
