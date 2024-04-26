import styled from 'styled-components';

export const Container = styled.section`
  h1 {
    margin-top: 1rem;
    color: ${({ theme }) => theme.primary};
    font-size: 3.5rem;
  }

  h2 {
    margin-left: 4rem;
    color: ${({ theme }) => theme.secondary};
    font-weight: 300;
    font-size: 2rem;
    padding-bottom: 3rem;
  }
`;

export const ItemContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 6rem;
  background: ${({ theme }) => theme.background};
  flex-direction: column;
  gap: 50px;

  > a {
    position: relative;
    background: ${({ theme }) => theme.textLight};
    color: ${({ theme }) => theme.textLight};
    text-decoration: none;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    font-weight: 400;
    padding: 1rem 2rem;
    transition: 0.5s;
    width: 25rem;
    height: 4rem;
  }
  > a:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    letter-spacing: 0.2rem;
    box-shadow: 0 0 2rem ${({ theme }) => theme.primary};
  }
  > a:before {
    content: '';
    position: absolute;
    inset: 2px;
    background: ${({ theme }) => theme.background};
  }
  > a > span {
    position: relative;
    z-index: 1;
  }
  > a > i {
    position: absolute;
    inset: 0;
    display: block;
  }
  > a > i:before {
    content: '';
    position: absolute;
    top: 0;
    left: 80%;
    width: 10px;
    height: 4px;
    background: ${({ theme }) => theme.background};
    transform: translateX(-50px) skewX(325deg);
    transition: 0.5s;
  }
  > a:hover > i:before {
    width: 20px;
    left: 30%;
  }

  > a > i:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 30%;
    width: 10px;
    height: 5px;
    background: ${({ theme }) => theme.background};
    transform: translateX(-50px) skewX(325deg);
    transition: 0.5s;
  }
  > a:hover > i:after {
    width: 20px;
    left: 80%;
  }
`;
