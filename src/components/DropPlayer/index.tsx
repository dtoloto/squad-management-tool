import React from 'react';

import { Container } from './styles';

interface IProps {
  id: number;
}

const DropPlayer: React.FC<IProps> = ({ id }) => {
  const handleDrop = (e: any) => {
    e.preventDefault();
    console.log(JSON.parse(e.dataTransfer.getData('player')));
    console.log(id);
  };

  const allowDrop = (e: any) => {
    e.preventDefault();
  };

  return (
    <Container onDrop={handleDrop} onDragOver={allowDrop}>
      <h1>{id}</h1>
    </Container>
  );
};

export default DropPlayer;
