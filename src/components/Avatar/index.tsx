import React from 'react';

import { Container } from './styles';

interface IProps {
  player: string;
  featured?: boolean;
}

const Avatar: React.FC<IProps> = ({ player, featured }) => {
  return <Container featured={featured}>{player}</Container>;
};

export default Avatar;
