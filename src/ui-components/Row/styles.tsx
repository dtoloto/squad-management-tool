import styled from 'styled-components';

interface IProps {
  colgap?: number;
  rowgap?: number;
}

export const Container = styled.div<IProps>`
  width: 100%;
  max-width: 100%;
  display: grid;
  grid-row-gap: ${({ rowgap }) => (rowgap ? `${rowgap}px` : 0)};
  grid-column-gap: ${({ colgap }) => (colgap ? `${colgap}px` : 0)};
  grid-template-columns: repeat(12, 1fr);
`;
