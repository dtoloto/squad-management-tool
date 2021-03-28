import React from 'react';
import theme from '../../styles/theme';
import SoccerField from '../SoccerField';
import PlayerCard from './PlayerCard';
import { IFeaturedPlayer } from '../../utils/teamsData';
import { Container, Content, FirstCard, SecondCard } from './styles';
import IF from '../IF';
import Empty from '../../ui-components/Empty';

const styles = {
  soccerField: { borderRadius: theme.borderRadius },
};

interface IProps {
  mostPickedPlayer: IFeaturedPlayer;
  lessPickedPlayer: IFeaturedPlayer;
}

const HighlightPlayers: React.FC<IProps> = ({
  mostPickedPlayer,
  lessPickedPlayer,
}) => {
  return (
    <Container>
      <SoccerField layout="horizontal" style={styles.soccerField} />
      <Content>
        <IF condition={!!mostPickedPlayer && !!lessPickedPlayer}>
          <FirstCard>
            <PlayerCard
              player={mostPickedPlayer?.player}
              initials={mostPickedPlayer?.initials}
              score={mostPickedPlayer?.percentage}
              label="Most picked player"
              featured
            />
          </FirstCard>
          <SecondCard>
            <PlayerCard
              player={lessPickedPlayer?.player}
              initials={lessPickedPlayer?.initials}
              score={lessPickedPlayer?.percentage}
              label="Less picked player"
            />
          </SecondCard>
        </IF>
        <IF condition={!mostPickedPlayer || !lessPickedPlayer}>
          <Empty style={{ color: '#fff' }} />
        </IF>
      </Content>
    </Container>
  );
};

export default HighlightPlayers;
