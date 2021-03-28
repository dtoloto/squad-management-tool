/* eslint-disable operator-assignment */
/* eslint-disable no-param-reassign */
import { TeamData } from '../context/interfaces';
import { IPlayer } from '../interfaces/player';

export interface IFeaturedPlayer {
  initials: string;
  percentage: number;
  player: IPlayer;
}

interface IPickedPlayer {
  name: string;
  occurence: number;
  player: IPlayer;
}

const sortByOcurrence = (a: IPickedPlayer, b: IPickedPlayer) => {
  if (a.occurence < b.occurence) {
    return -1;
  }
  if (a.occurence > b.occurence) {
    return 1;
  }
  return 0;
};

export const pickedPlayer = (
  teams: TeamData[],
  type: 'highest' | 'lowest',
): IFeaturedPlayer => {
  const players: IPickedPlayer[] = [];

  teams.map(team =>
    team.players.map(player => {
      let exists = false;
      players.map(item => {
        if (item.name === player.name) {
          exists = true;
          item.occurence = item.occurence + 1;
        }
        return true;
      });
      if (!exists) {
        players.push({ name: player.name, occurence: 1, player });
      }
      return true;
    }),
  );

  const sortedList = players.sort(sortByOcurrence);

  if (type === 'highest') {
    const name = sortedList[sortedList.length - 1].name.split(' ');
    const initials = name.shift().charAt(0) + name.pop().charAt(0);

    return {
      player: sortedList[sortedList.length - 1].player,
      initials,
      percentage: Number(
        (
          (sortedList[sortedList.length - 1].occurence * 100) /
          teams.length
        ).toFixed(1),
      ),
    };
  }
  const name = sortedList[0].name.split(' ');
  const initials = name.shift().charAt(0) + name.pop().charAt(0);

  return {
    player: sortedList[0].player,
    initials,
    percentage: Number(
      ((sortedList[0].occurence * 100) / teams.length).toFixed(1),
    ),
  };
};

export interface ITeamAverage {
  label: string;
  score: number;
  link: string;
}

const sortByAge = (a: ITeamAverage, b: ITeamAverage) => {
  if (a.score < b.score) {
    return -1;
  }
  if (a.score > b.score) {
    return 1;
  }
  return 0;
};

export const ageAverage = (
  teams: TeamData[],
  type: 'highest' | 'lowest',
): ITeamAverage[] => {
  const list: ITeamAverage[] = teams.map(team => {
    const sum = team.players.reduce(
      (accumulator, currentValue) => accumulator + currentValue.age,
      0,
    );
    return {
      label: team.name,
      score: sum / team.players.length,
      link: `/edit/${team.id}`,
    };
  });

  if (type === 'highest') {
    return list.sort(sortByAge).reverse().slice(0, 5);
  }
  return list.sort(sortByAge).slice(0, 5);
};
