import styled from 'styled-components';

interface ProgressProps {
  scroll: string;
}
export const Progress = styled.div<ProgressProps>`
  position: fixed;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.primary} ${props => props.scroll},
    transparent 0
  );
  width: 100%;
  height: 0.3rem;
  z-index: 3;
`;
