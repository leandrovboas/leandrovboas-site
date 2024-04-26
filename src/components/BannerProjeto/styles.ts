import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  background: url(${props => props.imgUrl}) no-repeat center;
  background-size: cover;
  height: 26rem;
  position: relative;
  padding: 3rem 5rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  section {
    z-index: 2;
    margin-bottom: -3rem;

    @media (max-width: 700px) {
      margin-left: -5rem;
      margin-right: -5rem;
    }
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 3rem;
  background: ${({ theme }) => theme.background};
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 2rem 2rem 0 0;

  @media (max-width: 700px) {
    font-weight: 200;
    font-size: 1.8rem;
  }
`;

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.secondary};
  font-weight: 300;
  font-size: 2rem;
  background: ${({ theme }) => theme.background};
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0 0 2rem 2rem;
  margin-top: -0.1rem;
  margin-bottom: -0.1rem;

  @media (max-width: 700px) {
    font-weight: 200;
    font-size: 1.5rem;
  }
`;
