import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  box-shadow: 0 2px 3px 0 ${({ theme }) => theme.backgroundDark};
  padding-top: 0.3rem;
  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  > h1 > a {
    display: flex;
    position: absolute;
    left: 0.8rem;
    color: ${({ theme }) => theme.textLight};
    font-size: 1.5rem;
    font-weight: 400;
    top: 1rem;
  }

  > button {
    display: flex;
    position: absolute;
    right: 0.8rem;
    padding: 0.6rem 2rem;
    border: 4px solid transparent;
    background: ${({ theme }) => theme.background};
    border-radius: 2rem;
    background-clip: padding-box;
    padding: 10px;

    ::after {
      position: absolute;
      top: -4px;
      bottom: -4px;
      left: -4px;
      right: -4px;
      background: linear-gradient(
        45deg,
        ${({ theme }) => theme.primary} 40%,
        ${({ theme }) => theme.secondary} 70%
      );
      content: '';
      z-index: -1;
      border-radius: 2rem;
    }

    &:hover {
      box-shadow: 0 3px 9px black,
        inset 0 0 9px ${({ theme }) => theme.secondary},
        inset 0 0 9px ${({ theme }) => theme.primary};
    }

    a {
      text-transform: uppercase;
      color: ${({ theme }) => theme.white};
      font-size: 1rem;
      font-weight: 300;
    }

    @media (max-width: 500px) {
      a {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 750px) {
    height: 6rem;
    width: 100%;
    padding-top: 0rem;
    a {
      font-size: 1rem;
    }
    ul {
      margin-top: 4rem;
    }
    h1 {
      margin-top: -1rem;
    }
    button {
      margin-top: -1rem;
    }
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-transform: uppercase;
    color: ${props =>
      props.isActive ? props.theme.primary : props.theme.textHighlight};
    transition: 0.5s;

    &:hover {
      color: ${props =>
        props.isActive
          ? lighten(0.2, props.theme.primary)
          : lighten(0.2, props.theme.textHighlight)};
    }

    &::after {
      content: '';
      display: block;
      height: 0.2rem;
      width: 0%;
      background-color: ${props =>
        props.isActive
          ? lighten(0.2, props.theme.primary)
          : lighten(0.2, props.theme.textHighlight)};
      transition: all ease-in-out 250ms;
    }

    &:hover ::after {
      width: 100%;
    }
  }
`;

export const Animation = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  z-index: 0;
  width: 100%;
  background: ${({ theme }) => theme.primary};
  border-radius: 8px;
`;
