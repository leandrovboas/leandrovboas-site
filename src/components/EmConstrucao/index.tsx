import { useTranslations } from 'next-intl';
import { Container } from './styles';

function EmConstrucao() {
  const t = useTranslations('contrucao');
  return (
    <Container>
      <h1 data-text={String(t('Construindo'))}>{String(t('Construindo'))}</h1>
    </Container>
  );
}

export default EmConstrucao;
