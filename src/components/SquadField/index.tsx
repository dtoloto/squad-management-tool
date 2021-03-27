import React from 'react';
import DropPlayer from '../DropPlayer';
import SoccerField from '../SoccerField';

import { Container, Content, GoalKeeper, PlayersRow, Column } from './styles';

interface IProps {
  formation: string;
}

const SquadField: React.FC<IProps> = ({ formation }) => {
  const rows = formation.split('-');
  let count = 0;

  const handleCount = () => {
    for (let i = 0; i < rows.length; i += 1) {
      for (let j = 0; j < Number(rows[i]); j += 1) {
        count += 1;
      }
    }
    return count / 10;
  };

  return (
    <Container>
      <SoccerField layout="vertical" />
      <Content>
        {rows.reverse().map((row, i) => (
          <PlayersRow>
            {[...Array(Number(row))].map((col, j) => (
              <Column>
                <DropPlayer id={handleCount()} />
              </Column>
            ))}
          </PlayersRow>
        ))}
        <GoalKeeper>
          <Column>
            <DropPlayer id={11} />
          </Column>
        </GoalKeeper>
      </Content>
    </Container>
  );
};

export default SquadField;
