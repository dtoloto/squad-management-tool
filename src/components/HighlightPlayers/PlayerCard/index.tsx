import React from 'react';
import { IPlayer } from '../../../interfaces/player';
import Avatar from '../../../ui-components/Avatar';
import { PlayerBox, PlayerData } from '../../../ui-components/PlayerTooltip';

import { Container, Label, Score, Content, AvatarBox } from './styles';

interface IProps {
  label: string;
  score: number;
  initials: string;
  player: IPlayer;
  featured?: boolean;
}

const styles = {
  playerTooltip: { left: '50%', top: '-50%', color: '#fff' },
};

const PlayerCard: React.FC<IProps> = ({
  label,
  score,
  player,
  initials,
  featured,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Content>
        <PlayerBox>
          <PlayerData style={styles.playerTooltip}>
            <p>{`Name: ${player?.name}`}</p>
            <p>{`Age: ${player?.age}`}</p>
            <p>{`Nationality: ${player?.nationality}`}</p>
          </PlayerData>
          <AvatarBox>
            <Avatar player={initials} featured={featured} />
          </AvatarBox>
        </PlayerBox>
        <Score>{`${score}%`}</Score>
      </Content>
    </Container>
  );
};

export default PlayerCard;
