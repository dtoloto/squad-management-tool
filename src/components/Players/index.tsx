import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import SearchBar from '../../ui-components/SearchBar';
import PlayerDataCard from './PlayerDataCard';

import { Container, Results } from './styles';
import { IPlayer } from '../../interfaces/player';
import { PlayerSkeleton } from './PlayerSkeleton';
import IF from '../IF';

interface IProps {
  currentPlayers: IPlayer[];
}

const Players: React.FC<IProps> = ({ currentPlayers }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [player, setPlayer] = useState<string>();
  const [players, setPlayers] = useState<IPlayer[]>([]);

  useEffect(() => {
    setPlayers(items =>
      items.filter(
        item =>
          !currentPlayers.find(currentPlayer => currentPlayer.id === item.id),
      ),
    );
  }, [currentPlayers]);

  const handleChange = async (value: string) => {
    setPlayer(value);
    if (value.length >= 4) {
      try {
        setLoading(true);
        const { data } = await api.get('/players', {
          params: {
            league: 1,
            search: value,
          },
        });

        const playersList = data.response.map((item: any) => {
          if (currentPlayers?.length > 0) {
            const find = currentPlayers.find(
              currentPlayer => currentPlayer.id === item.player.id,
            );
            if (!find) {
              return {
                id: item.player.id,
                age: item.player.age,
                name: item.player.name,
                nationality: item.player.nationality,
              };
            }
            return false;
          }
          return {
            id: item.player.id,
            age: item.player.age,
            name: item.player.name,
            nationality: item.player.nationality,
          };
        });

        setPlayers(playersList.filter(item => item));
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }
  };

  return (
    <Container>
      <SearchBar
        label="Search Player"
        placeholder="Player name..."
        onChange={handleChange}
        value={player}
      />
      <Results>
        <IF condition={loading}>
          <PlayerSkeleton />
        </IF>
        <IF condition={!loading}>
          {players.map(item => (
            <PlayerDataCard key={item.id} player={item} />
          ))}
        </IF>
      </Results>
    </Container>
  );
};

export default Players;
