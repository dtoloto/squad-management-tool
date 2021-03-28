import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { IPlayer } from '../../interfaces/player';
import { Icon } from '../../ui-components/Icon';
import { PlayerBox, PlayerData } from '../../ui-components/PlayerTooltip';
import IF from '../IF';

import { Container } from './styles';

interface IProps {
  id: number;
  formation: string;
  onChange: (param: IPlayer) => void;
  initialData?: IPlayer[];
}

const DropPlayer: React.FC<IProps> = ({
  id,
  formation,
  onChange,
  initialData,
}) => {
  const [player, setPlayer] = useState<IPlayer>();

  useEffect(() => {
    if (!initialData) setPlayer(null);
  }, [formation]);

  useEffect(() => {
    if (initialData) {
      const initialPlayer = initialData.find(item => item.position === id);
      if (initialPlayer) {
        setPlayer(initialPlayer);
      }
    }
  }, [initialData]);

  const handleDrop = (e: any) => {
    e.preventDefault();
    const data: IPlayer = JSON.parse(e.dataTransfer.getData('player'));
    const name = data.name.split(' ');
    const initials = name.shift().charAt(0) + name.pop().charAt(0);
    const newPlayer = {
      ...data,
      position: id,
      initials,
    };
    setPlayer(newPlayer);
    onChange(newPlayer);
  };

  const allowDrop = (e: any) => {
    e.preventDefault();
  };

  return (
    <Container onDrop={handleDrop} onDragOver={allowDrop}>
      <IF condition={!player}>
        <Icon>
          <FaPlus />
        </Icon>
      </IF>
      <IF condition={!!player}>
        <PlayerBox>
          <PlayerData>
            <p>{`Name: ${player?.name}`}</p>
            <p>{`Age: ${player?.age}`}</p>
            <p>{`Nationality: ${player?.nationality}`}</p>
          </PlayerData>
          <span>{player?.initials}</span>
        </PlayerBox>
      </IF>
    </Container>
  );
};

export default DropPlayer;
