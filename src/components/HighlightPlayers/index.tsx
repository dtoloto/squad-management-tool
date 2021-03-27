import React from 'react';
import theme from '../../styles/theme';
import SoccerField from '../SoccerField';

// import { Container } from './styles';

const styles = {
  soccerField: { borderRadius: theme.borderRadius },
};

const HighlightPlayers: React.FC = () => {
  return <SoccerField layout="horizontal" style={styles.soccerField} />;
};

export default HighlightPlayers;
