import React from 'react';
import { CSSProperties } from 'styled-components';

interface IProps {
  children?: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  style?: CSSProperties;
}

const Title: React.FC<IProps> = ({ level = 1, children, style }) => {
  switch (level) {
    case 1:
      return <h1 style={style}>{children}</h1>;
    case 2:
      return <h2 style={style}>{children}</h2>;
    case 3:
      return <h3 style={style}>{children}</h3>;
    case 4:
      return <h4 style={style}>{children}</h4>;
    case 5:
      return <h5 style={style}>{children}</h5>;
    case 6:
      return <h6 style={style}>{children}</h6>;
    default:
      return <h1 style={style}>{children}</h1>;
  }
};

export default Title;
