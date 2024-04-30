import SectionTitle from "../SectionTitle";
import ExperienciaItem from "./ExperienciaItem";
import { Container } from "./styles";
import { getAnosDeExperiencia } from "../../utils/anosDeExperiencia";
import { FcKindle } from "react-icons/fc";
import { useEffect, useState } from "react";

function Experiencias() {
  const [anosExperiencia, setAnosExperiencia] = useState("Mais de 10");

  useEffect(() => {
    setAnosExperiencia(
      getAnosDeExperiencia(2010, new Date().getFullYear()).toString()
    );
  }, []);
  const result = `${anosExperiencia} anos`;

  return (
    <Container>
      <SectionTitle
        icon={<FcKindle />}
        title={result}
        description="de experiência"
      />

      <section>
        <ExperienciaItem
          year="Atual"
          empresa="Lambda3 / Tivit"
          title="Software Enginner"
          description="C#, Nodejs, Nestjs, Nextjs, Typescript, Azure, AWS, docker, Kubernetes, TDD, SOLID, Clean Code, Clean Architecture."
        />
        <ExperienciaItem
          year="2023"
          empresa="Lambda3"
          title="Software Development"
          description="C#, Nodejs, Nextjs, Nestjs, Javascript, Typescript, docker, Azure, SOLID, TDD, Hexagonal Architecture, Code Review."
        />
        <ExperienciaItem
          year="2018"
          empresa="EICON"
          title="Analista Programador"
          description="Criação de templates .NET, C#, .Net Core com EF Core, Dapper, fluente validate, Quartz."
        />
        <ExperienciaItem
          year="2015"
          empresa="Capgemioni"
          title="Analist Programado"
          description=".Net Core, Entity Framework, SQL Server, AutoMapper, SimpleInjector,Desenvolvimento Web com HTML, Javascript, Angularjs."
        />
        <ExperienciaItem
          year="2011"
          empresa="Grupo Evoluti"
          title="Desenvolvedor DotNet"
          description="ASP.NET, MVC, WCF, WebServices, WebForms e Windows Form."
        />
      </section>
    </Container>
  );
}

export default Experiencias;
