import styled from 'styled-components';

export const Container = styled.div`
  p {
    text-align: center;
    color: ${({ theme }) => theme.white};
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 100%;
    font-size: 2rem;
    background-color: ${({ theme }) => theme.error};
    border-radius: 2rem;
  }
`;
