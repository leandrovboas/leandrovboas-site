import styled from 'styled-components';

interface ButtonProps {
  ScrollPosition: number;
}

export const Container = styled.div<ButtonProps>`
  display: relative;
  border-top: 0.5rem solid ${({ theme }) => theme.primary};
  border-left: 0;
  border-right: 0;
  border-bottom: 0;

  overflow: hidden;
  position: fixed;
  bottom: 0;
  padding: 0;
  width: 100%;

  height: ${props =>
    props.ScrollPosition === 0 || props.ScrollPosition >= 99 ? '4rem' : '3px'};

  transition: height 0.5s ease-in-out;

  &:hover {
    height: 4rem;
  }
`;

export const ContainerFooter = styled.footer`
  width: 100%;
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: center;

  padding: 3px;
  margin: 0;
  background: ${({ theme }) => theme.background};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.secondary};
      text-transform: 300;
      font-size: 3rem;

      &:hover {
        color: ${({ theme }) => theme.primary};
        font-size: 3.2rem;
      }
    }
    > section {
      display: flex;
      align-items: center;
      gap: 1rem;

      svg {
        width: 2rem;
        height: 2rem;
        color: ${({ theme }) => theme.text};
        transition: 0.5s;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.primary};
          width: 2.3rem;
          height: 2.3rem;
        }

        @media (max-width: 450px) {
          button {
            font-size: 0.9rem;
          }

          > section {
            gap: 0.5rem;
            svg {
              width: 1.5rem;
              height: 1.5rem;
            }
          }
        }
      }
    }
  }
`;
