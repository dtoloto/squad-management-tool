import React from 'react';

import { CSSProperties } from 'styled-components';
import { Container } from './styles';

interface IProps {
  style?: CSSProperties;
}

const Empty: React.FC<IProps> = ({ style }) => {
  return <Container style={style}>No data available</Container>;
};

export default Empty;
