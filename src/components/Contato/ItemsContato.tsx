import { ReactNode } from 'react';
import { ItemContainer } from './styles';

interface Props {
  title: string;
  path: string;
  icon: ReactNode;
}

export default function ItemsContato({ title, path, icon }: Props) {
  return (
    <ItemContainer>
      <a href={path}>
        <span>
          {icon} {title}
        </span>
        <i />
      </a>
    </ItemContainer>
  );
}
