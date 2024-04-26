import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  margin-left: 3rem;
  background: ${({ theme }) => theme.background};

  > h1 {
    position: relative;
    font-size: 10vw;
    color: ${({ theme }) => theme.background};
    -webkit-text-stroke: 0.3vh ${({ theme }) => theme.backgroundLight};
    text-transform: uppercase;
  }
  > h1::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    color: ${({ theme }) => theme.primary};
    -webkit-text-stroke: 0vw ${({ theme }) => theme.backgroundLight};
    border-right: 2px solid ${({ theme }) => theme.primary};
    overflow: hidden;
    animation: animate 6s linear infinite;
  }

  @keyframes animate {
    0%,
    10%,
    10% {
      width: 0%;
    }
    70%,
    90% {
      width: 100%;
    }
  }
`;
