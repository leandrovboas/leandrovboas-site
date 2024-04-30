import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-bottom: 5rem;

  > main {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding-bottom: 3rem;

    > a {
      align-self: center;
    }
  }
`;