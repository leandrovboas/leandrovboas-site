import { ItemContainer } from './styles';

interface ExperienciaProps {
  year: string;
  title: string;
  description: string;
  empresa: string;
}

function ExperienciaItem({
  year,
  title,
  description,
  empresa
}: Readonly<ExperienciaProps>) {
  return (
    <ItemContainer data-aos="fade-up">
      <div>
        <h1>{year}</h1>
        <h2>{empresa}</h2>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}

export default ExperienciaItem;
