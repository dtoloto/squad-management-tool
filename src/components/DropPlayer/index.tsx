import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { IPlayer } from '../../interfaces/player';
import { Icon } from '../../ui-components/Icon';
import IF from '../IF';

import { Container } from './styles';

interface IProps {
  id: number;
  formation: string;
  onChange: (param: IPlayer) => void;
}

const DropPlayer: React.FC<IProps> = ({ id, formation, onChange }) => {
  const [player, setPlayer] = useState<IPlayer>();

  useEffect(() => {
    setPlayer(null);
  }, [formation]);

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
      <IF condition={!!player}>{player?.initials}</IF>
    </Container>
  );
};

export default DropPlayer;
