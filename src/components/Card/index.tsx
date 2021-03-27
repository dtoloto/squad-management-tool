import React from 'react';

import { Container, Header as CardHeader, Body as CardBody } from './styles';

interface IProps {
  children?: React.ReactNode;
}

export const Header: React.FC<IProps> = ({ children }) => {
  return <CardHeader>{children}</CardHeader>;
};

export const Body: React.FC<IProps> = ({ children }) => {
  return <CardBody>{children}</CardBody>;
};

const Card: React.FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Card;
