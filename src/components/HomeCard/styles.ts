import styled from 'styled-components';

export const HomeCardContainer = styled.div`
  position: relative;
  width: 12rem;
  height: 22rem;
  border-radius: 20px;
  box-shadow: 0 35px 85px rgba(0, 0, 0, 0.5);
  transition: 0.5s;

  :hover {
    height: 26rem;
  }

  @media (max-width: 700px) {
    padding-bottom: 315px;
  }
`;

export const ImgBx = styled.div`
  position: absolute;
  left: 50%;
  top: -50px;
  transform: translateX(-50%);
  width: 18rem;
  height: 18rem;
  border-radius: 20px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  transition: 0.5s;

  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${HomeCardContainer}:hover & {
    width: 23rem;
    height: 23rem;
  }
`;
export const Details = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 15px;
  text-align: center;
  width: 100%;
  transition: 0.5s;
  color: ${({ theme }) => theme.text};
  > h2 {
    font-size: 1.5em;
    font-weight: 600;
    line-height: 1.2em;
    > span {
      font-size: 0.75em;
      font-weight: 500;
      opacity: 0.8;
    }
  }
`;
