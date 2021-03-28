import React, { createContext, useContext, useState, useCallback } from 'react';

import { TeamData, TeamsContextData } from './interfaces';

const TeamsContext = createContext<TeamsContextData>({} as TeamsContextData);

const data: TeamData[] = [
  {
    name: 'Barcelona',
    id: 1,
    description: 'Barcelona Squad',
    website: 'https://barcelona.com',
    type: 'real',
    tags: ['barça', 'messi'],
    formation: '4-4-2',
    players: [
      {
        id: 1,
        age: 30,
        name: 'Ronaldo Fenomeno',
        nationality: 'Brazil',
        initials: 'RF',
        position: 1,
      },
      {
        id: 2,
        age: 30,
        name: 'Ronaldo Gaúcho',
        nationality: 'Brazil',
        initials: 'RF',
        position: 2,
      },
      {
        id: 3,
        age: 30,
        name: 'Rogerio Ceni',
        nationality: 'Brazil',
        initials: 'RC',
        position: 11,
      },
    ],
  },
  {
    name: 'Corinthians',
    id: 2,
    description: 'Corinthians Squad',
    website: 'https://corinthians.com',
    type: 'fantasy',
    tags: ['timao'],
    formation: '4-2-4-2',
    players: [
      {
        id: 1,
        age: 30,
        name: 'Ronaldo Fenomeno',
        nationality: 'Brazil',
        initials: 'RF',
        position: 1,
      },
      {
        id: 2,
        age: 30,
        name: 'Ronaldo Gaúcho',
        nationality: 'Brazil',
        initials: 'RF',
        position: 2,
      },
      {
        id: 3,
        age: 20,
        name: 'Cassio Ramos',
        nationality: 'Brazil',
        initials: 'CR',
        position: 11,
      },
    ],
  },
  {
    name: 'Brazil',
    id: 3,
    description: 'Brazil Squad',
    website: 'https://brazil.com',
    type: 'fantasy',
    tags: ['br'],
    formation: '4-3-4-1',
    players: [
      {
        id: 1,
        age: 30,
        name: 'Ronaldo Fenomeno',
        nationality: 'Brazil',
        initials: 'RF',
        position: 1,
      },
      {
        id: 4,
        age: 35,
        name: 'Cristiano Ronaldo',
        nationality: 'Portugal',
        initials: 'CR',
        position: 2,
      },
      {
        id: 3,
        age: 20,
        name: 'Cassio Ramos',
        nationality: 'Brazil',
        initials: 'CR',
        position: 11,
      },
    ],
  },
  {
    name: 'Portugal',
    id: 4,
    description: 'Portugal Squad',
    website: 'https://portugal.com',
    type: 'fantasy',
    tags: ['pt'],
    formation: '4-3-4-1',
    players: [
      {
        id: 1,
        age: 30,
        name: 'Ronaldo Fenomeno',
        nationality: 'Brazil',
        initials: 'RF',
        position: 1,
      },
      {
        id: 4,
        age: 35,
        name: 'Cristiano Ronaldo',
        nationality: 'Portugal',
        initials: 'CR',
        position: 2,
      },
      {
        id: 3,
        age: 20,
        name: 'Cassio Ramos',
        nationality: 'Brazil',
        initials: 'CR',
        position: 11,
      },
    ],
  },
];

const TeamsProvider: React.FC = ({ children }) => {
  const [teams, setTeams] = useState<TeamData[]>(data);

  const createTeam = useCallback((team: TeamData) => {
    setTeams(items => [...items, team]);
  }, []);

  const getTeam = useCallback(
    (id: string | number) => {
      return teams.find(team => team.id === id);
    },
    [teams],
  );

  const deleteTeam = useCallback((id: string | number) => {
    setTeams(item => item.filter(team => team.id !== id));
  }, []);

  return (
    <TeamsContext.Provider
      value={{
        teams,
        createTeam,
        getTeam,
        deleteTeam,
      }}
    >
      {children}
    </TeamsContext.Provider>
  );
};

function useTeams(): TeamsContextData {
  const context = useContext(TeamsContext);

  if (!context) {
    throw new Error('useTeams must be within an TeamsProvider');
  }
  return context;
}

export { TeamsProvider, useTeams };
