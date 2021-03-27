import React from 'react';
import Avatar from '../../Avatar';

import { Container, Label, Score, Content, AvatarBox } from './styles';

interface IProps {
  label: string;
  score: number;
  player: string;
  featured?: boolean;
}

const PlayerCard: React.FC<IProps> = ({ label, score, player, featured }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Content>
        <AvatarBox>
          <Avatar player={player} featured={featured} />
        </AvatarBox>
        <Score>{`${score}%`}</Score>
      </Content>
    </Container>
  );
};

export default PlayerCard;
