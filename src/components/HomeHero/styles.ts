import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
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


export const InfosContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-left: 3rem;
`;

export const CodeItem = styled.pre`
  background: ${({ theme }) => theme.gradient};
  padding: 2.2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 300;
  color: ${({ theme }) => theme.white};
  width: 25rem;
  height: 13rem;
  align-self: flex-start;
  transition: 1s !important;
  @media (max-width: 1450px) {
    width: 22rem;
    padding: 1.5rem;
    font-size: 1.2rem;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
  &:hover {
    filter: brightness(1.2);
  }
  &:last-child {
    align-self: flex-end;
  }
  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }
  span.purple {
    color: #c38cdd;
  }
  span.blue {
    color: #7ac7e3;
  }
  span.comment {
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
    display: block;
  }
`;
