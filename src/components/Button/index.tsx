import React from 'react';
import { useHistory } from 'react-router';
import { CSSProperties } from 'styled-components';
import IF from '../IF';

import { Container, Loading } from './styles';

interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
  link?: string;
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  block?: boolean;
  style?: CSSProperties;
  [string: string]: any;
}

const Button: React.FC<IProps> = ({
  children,
  loading = false,
  onClick,
  link,
  type = 'button',
  block = false,
  disabled = false,
  style,
}) => {
  const history = useHistory();
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (link) {
      history.push(link);
    }
  };
  return (
    <Container
      disabled={disabled || loading}
      block={block}
      type={type}
      onClick={handleClick}
      loading={loading}
      style={style}
    >
      <IF condition={loading}>
        <Loading />
      </IF>
      {children}
    </Container>
  );
};

export default Button;
