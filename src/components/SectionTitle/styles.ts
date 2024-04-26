import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  h1 {
    padding-top: 5rem;
    color: ${({ theme }) => theme.primary};
    font-size: 4.5rem;
  }

  h2 {
    margin-left: 4rem;
    color: ${({ theme }) => theme.secondary};
    font-weight: 300;
    font-size: 3.5rem;
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.8rem;
    }

    h2 {
      font-size: 1.2rem;
      margin-left: 2rem;
    }
  }
`;
