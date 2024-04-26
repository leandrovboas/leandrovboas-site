import { useTranslations } from 'next-intl';
import { FormContainer, Input, TextArea } from './styles';

export default function Form() {
  const t = useTranslations('Contato.Formulario');
  return (
    <FormContainer data-aos="fade-up">
      <Input placeholder={String(t('nome'))} required />
      <Input placeholder={String(t('email'))} type="email" required />
      <TextArea placeholder={String(t('mensagem'))} required />
      <button type="submit">{String(t('enviar'))}</button>
    </FormContainer>
  );
}
