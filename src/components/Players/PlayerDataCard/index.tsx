import React from 'react';
import { IPlayer } from '../../../interfaces/player';

import { PlayerData, Data, Label } from './styles';

interface IProps {
  player: IPlayer;
}

const PlayerDataCard: React.FC<IProps> = ({ player }) => {
  const handleDrag = (e: any) => {
    e.dataTransfer.setData('player', JSON.stringify(player));
  };

  return (
    <PlayerData draggable onDragStart={handleDrag}>
      <Data>
        <Label>Name: </Label>
        {player.name}
      </Data>
      <Data>
        <Label>Age: </Label>
        {player.age}
      </Data>
      <Data>
        <Label>Nationality: </Label>
        {player.nationality}
      </Data>
    </PlayerData>
  );
};

export default PlayerDataCard;
