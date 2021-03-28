/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
import { useField } from '@unform/core';
import React, { useEffect, useRef, useState } from 'react';
import { IPlayer } from '../../interfaces/player';
import DropPlayer from '../DropPlayer';
import SoccerField from '../SoccerField';

import { Container, Content, GoalKeeper, PlayersRow, Column } from './styles';

interface IProps {
  formation: string;
  defaultFormation?: string;
  name: string;
  players: IPlayer[];
  setPlayers: (playersList: IPlayer[]) => void;
}

const SquadField: React.FC<IProps> = ({
  formation,
  defaultFormation,
  name,
  players,
  setPlayers,
}) => {
  const squadRef = useRef(null);
  const { fieldName, registerField, error, defaultValue } = useField(name);
  const [rows, setRows] = useState<string[]>([]);
  let count = 0;

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: squadRef,
      getValue: ref => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: ref => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  const handleCount = () => {
    for (let i = 0; i < rows.length; i += 1) {
      for (let j = 0; j < Number(rows[i]); j += 1) {
        count += 1;
      }
    }
    return count / 10;
  };

  useEffect(() => {
    if (squadRef.current) squadRef.current.value = null;
    setRows(formation.split('-').reverse());
  }, [formation]);

  useEffect(() => {
    if (defaultFormation) {
      setRows(defaultFormation.split('-').reverse());
    }
  }, [defaultFormation]);

  useEffect(() => {
    if (defaultValue) {
      setPlayers([...defaultValue]);
      if (squadRef.current) squadRef.current.value = [...defaultValue];
    }
  }, [defaultValue]);

  const handlePlayer = (player: IPlayer) => {
    if (!players || players?.length === 0) {
      setPlayers([player]);
      if (squadRef.current) squadRef.current.value = [player];
    } else {
      const findPlayer = players.find(
        item => item.position === player.position,
      );
      if (findPlayer) {
        const filteredPlayers = players.filter(
          item => item.position !== findPlayer.position,
        );
        setPlayers([...filteredPlayers, player]);
        if (squadRef.current)
          squadRef.current.value = [...filteredPlayers, player];
      } else {
        setPlayers([...players, player]);
        if (squadRef.current) squadRef.current.value = [...players, player];
      }
    }
  };

  return (
    <Container className={error ? 'error' : ''}>
      <SoccerField layout="vertical" />
      <Content ref={squadRef}>
        {rows.map((row, i) => (
          <PlayersRow key={i}>
            {[...Array(Number(row))].map((col, j) => (
              <Column key={j}>
                <DropPlayer
                  onChange={handlePlayer}
                  id={handleCount()}
                  formation={formation}
                  initialData={defaultValue}
                />
              </Column>
            ))}
          </PlayersRow>
        ))}
        <GoalKeeper>
          <Column>
            <DropPlayer
              initialData={defaultValue}
              onChange={handlePlayer}
              id={11}
              formation={formation}
            />
          </Column>
        </GoalKeeper>
      </Content>
    </Container>
  );
};

export default SquadField;
