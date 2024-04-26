import { ReactNode } from 'react';

import { Container } from './styles';

interface SectionTitleProps {
  title: string | ReactNode;
  description?: string | ReactNode;
  icon: string | ReactNode;
}

function SectionTitle({ title, description, icon }: SectionTitleProps) {
  return (
    <Container data-aos="fade-right">
      <h1>
        {icon} {title}
      </h1>
      {description && <h2>{description}</h2>}
    </Container>
  );
}

export default SectionTitle;
