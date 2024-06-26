import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  > section {
    margin-top: 8rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;

    @media (max-width: 1000px) {
      gap: 3rem;
      flex-wrap: wrap;
      margin-top: 5rem;
    }

    @media (max-width: 750px) {
      gap: 2rem;
      flex-wrap: wrap;
      margin-top: 5rem;
    }
  }
`;

export const TecnologiasContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;

  p {
    color: ${({ theme }) => theme.primary};
    font-weight: 300;
    font-size: 1.1rem;
    text-transform: uppercase;
  }

  svg {
    width: 4.5rem;
    height: 4.5rem;
    color: ${({ theme }) => theme.secondary};
    transition: 0.3s;
  }

  @media (max-width: 1400px) {
    p {
      font-size: 1rem;
    }
    svg {
      width: 3rem;
      height: 3rem;
    }
    }

    @media (max-width: 750px) {
      p {
      font-size: 0.8rem;
    }
    svg {
      width: 3rem;
      height: 3rem;
    }
    }

  &:hover {
    svg {
      width: 5rem;
    height: 5rem;
      color: ${({ theme }) => theme.primary};
      transform: scale(0.95);
    }
    p {
      font-size: 1.2rem;
      font-weight: 500;
    }
  }

  @media (max-width: 1000px) {
    p {
      font-size: 0.8rem;
    }
    svg {
      width: 3rem;
      height: 3rem;
    }
  }

`;
