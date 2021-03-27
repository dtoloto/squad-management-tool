import React from 'react';

import { Container } from './styles';

interface IProps {
  colgap?: number;
  rowgap?: number;
  children: React.ReactNode;
}

const Row: React.FC<IProps> = ({ colgap, rowgap, children }) => {
  return (
    <Container colgap={colgap} rowgap={rowgap}>
      {children}
    </Container>
  );
};

export default Row;
