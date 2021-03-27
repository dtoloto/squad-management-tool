import React from 'react';
import theme from '../../styles/theme';
import SoccerField from '../SoccerField';
import PlayerCard from './PlayerCard';

import { Container, Content, FirstCard, SecondCard } from './styles';

const styles = {
  soccerField: { borderRadius: theme.borderRadius },
};

const HighlightPlayers: React.FC = () => {
  return (
    <Container>
      <SoccerField layout="horizontal" style={styles.soccerField} />
      <Content>
        <FirstCard>
          <PlayerCard
            player="RR"
            score={75}
            label="Most picked player"
            featured
          />
        </FirstCard>
        <SecondCard>
          <PlayerCard player="RR" score={25} label="Less picked player" />
        </SecondCard>
      </Content>
    </Container>
  );
};

export default HighlightPlayers;
