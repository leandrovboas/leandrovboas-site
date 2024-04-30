import { ReactNode } from "react";
import { TecnologiasContainer } from "./styles";

interface TecnologiasProps {
  title: string;
  icon: ReactNode;
}

export default function TecnologiasItem({ title, icon }: TecnologiasProps) {
  return (
    <TecnologiasContainer data-aos="fade-up">
      <p>{title}</p>
      {icon}
    </TecnologiasContainer>
  );
}
