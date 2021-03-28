import React, { createContext, useContext, useState, useCallback } from 'react';

import { TeamData, TeamsContextData } from './interfaces';

const TeamsContext = createContext<TeamsContextData>({} as TeamsContextData);

const TeamsProvider: React.FC = ({ children }) => {
  const [teams, setTeams] = useState<TeamData[]>([]);

  const createTeam = useCallback((team: TeamData) => {
    setTeams(items => [...items, team]);
  }, []);

  const getTeam = useCallback(
    (id: string | number) => {
      return teams.find(team => Number(team.id) === Number(id));
    },
    [teams],
  );

  const deleteTeam = useCallback((id: string | number) => {
    setTeams(item => item.filter(team => team.id !== id));
  }, []);

  const updateTeam = useCallback(
    (team: TeamData) => {
      const currentTeams = teams;
      const findIndex = teams.findIndex(findTeam => findTeam.id === team.id);
      currentTeams[findIndex] = team;
      setTeams(currentTeams);
    },
    [teams],
  );

  return (
    <TeamsContext.Provider
      value={{
        teams,
        createTeam,
        getTeam,
        deleteTeam,
        updateTeam,
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
