import React from 'react';

import { Container, Header, Body } from './styles';

interface IProps {
  header?: string | React.ReactNode;
  body?: string | React.ReactNode;
}

const Card: React.FC<IProps> = ({ header, body }) => {
  return (
    <Container>
      <Header>{header}</Header>
      <Body>{body}</Body>
    </Container>
  );
};

export default Card;
