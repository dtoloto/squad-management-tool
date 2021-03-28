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
