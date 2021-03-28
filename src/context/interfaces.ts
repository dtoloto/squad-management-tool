import { IPlayer } from '../interfaces/player';

export interface TeamData {
  id: string | number;
  name: string;
  description?: string;
  website: string;
  type: 'real' | 'fantasy';
  tags?: string[];
  players: IPlayer[];
  formation: string;
}

export interface TeamsContextData {
  teams: TeamData[];
  createTeam: (team: TeamData) => void;
  getTeam: (id: string | number) => TeamData | undefined;
  deleteTeam: (id: string | number) => void;
  updateTeam: (team: TeamData) => void;
}
