import React from 'react';
import { CSSProperties } from 'styled-components';

import { Container } from './styles';

interface IProps {
  layout?: 'vertical' | 'horizontal';
  style?: CSSProperties;
}

const SoccerField: React.FC<IProps> = ({ layout = 'horizontal', style }) => {
  return <Container layout={layout} style={style} />;
};

export default SoccerField;
