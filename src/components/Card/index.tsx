import React from 'react';
import { CSSProperties } from 'styled-components';

import { Container, Header as CardHeader, Body as CardBody } from './styles';

interface IProps {
  children?: React.ReactNode;
  style?: CSSProperties;
}

export const Header: React.FC<IProps> = ({ children, style }) => {
  return <CardHeader style={style}>{children}</CardHeader>;
};

export const Body: React.FC<IProps> = ({ children, style }) => {
  return <CardBody style={style}>{children}</CardBody>;
};

const Card: React.FC<IProps> = ({ children, style }) => {
  return <Container style={style}>{children}</Container>;
};

export default Card;
