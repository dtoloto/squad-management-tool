import React from 'react';

import { Container, Balloon } from './styles';

interface IProps {
  label: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<IProps> = ({ label, children }) => {
  return (
    <Container>
      <Balloon>{label}</Balloon>
      {children}
    </Container>
  );
};

export default Tooltip;
