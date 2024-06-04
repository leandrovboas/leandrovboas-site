import styled from 'styled-components';

export const Container = styled.div`
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  padding-bottom: 5rem;
  padding-top:4rem;

  > div {
    flex: 4;
  }

  @media (max-width: 1458px) {
    > div {
      flex: 1;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;


export const ImageContainer = styled.div`
  > img {
    border-radius:20rem;
    border:0.3rem solid;
    border-color:${({ theme }) => theme.secondary};
  }
`;

export const TextAboutMeContainer = styled.div`
> p {
  color: ${({ theme }) => theme.textLight};
}
`;