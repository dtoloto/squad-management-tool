import { TeamData } from '../context/interfaces';

export interface IFeaturedPlayer {
  initials: string;
  percentage: number;
}

export const mostPickedPlayer = (teams: TeamData[]): IFeaturedPlayer => {
  const total = teams.length;

  return {
    initials: 'RR',
    percentage: 75.5,
  };
};

export const lessPickedPlayer = (teams: TeamData[]): IFeaturedPlayer => {
  const total = teams.length;

  return {
    initials: 'RR',
    percentage: 24.5,
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
