import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Home from '../../pages/Home/index';
import theme from '../../styles/theme';

const teams = [
  {
    id: 1,
    name: 'Barcelona',
    description: 'Barcelona Squad',
    website: 'http://barcelona.com',
    type: 'real',
    tags: ['barça', 'messi'],
    players: [
      {
        id: 1,
        name: 'Ronaldo Fenomeno',
        age: 40,
        nationality: 'Brazil',
        position: 1,
        initials: 'RF',
      },
    ],
    formation: '4-4-2',
  },
  {
    id: 2,
    name: 'Real Madrid',
    description: 'Real Madrid Squad',
    website: 'http://real-madrid.com',
    type: 'real',
    tags: ['real', 'madrid'],
    players: [
      {
        id: 2,
        name: 'Cristiano Ronaldo',
        age: 39,
        nationality: 'Portugal',
        position: 1,
        initials: 'CR',
      },
    ],
    formation: '4-4-2',
  },
  {
    id: 3,
    name: 'Atletico Madrid',
    description: 'Atletico Madrid Squad',
    website: 'http://atletico-madrid.com',
    type: 'real',
    tags: ['atletico', 'madrid'],
    players: [
      {
        id: 3,
        name: 'Fernando Torres',
        age: 38,
        nationality: 'Spain',
        position: 1,
        initials: 'FT',
      },
    ],
    formation: '4-4-2',
  },
  {
    id: 4,
    name: 'Milan',
    description: 'Milan Squad',
    website: 'http://milan.com',
    type: 'fantasy',
    tags: ['milan'],
    players: [
      {
        id: 4,
        name: 'Alexandre Pato',
        age: 37,
        nationality: 'Brazil',
        position: 1,
        initials: 'AP',
      },
    ],
    formation: '4-4-2',
  },
  {
    id: 5,
    name: 'Inter',
    description: 'Inter Squad',
    website: 'http://inter.com',
    type: 'fantasy',
    tags: ['inter'],
    players: [
      {
        id: 6,
        name: 'Felipe Melo',
        age: 36,
        nationality: 'Brazil',
        position: 1,
        initials: 'FM',
      },
    ],
    formation: '4-4-2',
  },
  {
    id: 6,
    name: 'France',
    description: 'France Squad',
    website: 'http://france.com',
    type: 'real',
    tags: ['france'],
    players: [
      {
        id: 6,
        name: 'Zinedine Zidani',
        age: 35,
        nationality: 'France',
        position: 1,
        initials: 'ZZ',
      },
    ],
    formation: '4-4-2',
  },
];

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockedHistoryPush,
  }),
  Link: ({ children }: { children: React.ReactNode }) => children,
}));

jest.mock('../../context/TeamsContext', () => ({
  useTeams: () => ({
    teams,
    deleteTeam: (id: string | number) => {
      const findIndex = teams.findIndex(findTeam => findTeam.id === id);
      teams.splice(findIndex, 1);
    },
  }),
}));

jest.mock('../../hooks/usePrevious', () => () => []);

const getThemeProviderWrappingComponent = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe('Home Page', () => {
  it('should be able to access create team page', () => {
    const { getByTestId } = render(
      getThemeProviderWrappingComponent({ children: <Home /> }),
    );

    const buttonElement = getByTestId('custom-element');
    fireEvent.click(buttonElement);

    expect(mockedHistoryPush).toHaveBeenCalledWith('/new');
  });

  it('should be able to index teams on table', () => {
    const { getAllByTestId } = render(
      getThemeProviderWrappingComponent({ children: <Home /> }),
    );
    const tableContent = getAllByTestId('table-content');

    expect(tableContent).toHaveLength(teams.length);
  });

  it('should be able to access edit team page from table', () => {
    const { getByTestId } = render(
      getThemeProviderWrappingComponent({ children: <Home /> }),
    );

    const editTeamButton = getByTestId('/edit/1');

    fireEvent.click(editTeamButton);

    expect(mockedHistoryPush).toHaveBeenCalledWith('/edit/1');
  });

  it('should be able to delete team', () => {
    const { getByTestId } = render(
      getThemeProviderWrappingComponent({ children: <Home /> }),
    );
    const { length } = teams;

    const deleteTeamButton = getByTestId('1');
    fireEvent.click(deleteTeamButton);
    expect(teams).toHaveLength(length - 1);
  });

  it('should be able to index teams with highest avg age', () => {
    const { getByTestId } = render(
      getThemeProviderWrappingComponent({ children: <Home /> }),
    );

    const list = getByTestId('highest');
    const firstTeam = list.children[0];
    const lastTeam = list.children[4];
    expect(firstTeam.getAttribute('data-testid')).toBe('Real Madrid');
    expect(lastTeam.getAttribute('data-testid')).toBe('France');
  });

  it('should be able to index teams with lowest avg age', () => {
    const { getByTestId } = render(
      getThemeProviderWrappingComponent({ children: <Home /> }),
    );

    const list = getByTestId('lowest');
    const firstTeam = list.children[0];
    const lastTeam = list.children[4];
    expect(firstTeam.getAttribute('data-testid')).toBe('France');
    expect(lastTeam.getAttribute('data-testid')).toBe('Real Madrid');
  });

  it('should be able to access edit team page from age list', () => {
    const { getByTestId } = render(
      getThemeProviderWrappingComponent({ children: <Home /> }),
    );

    const list = getByTestId('highest');
    const firstTeam = list.children[0];

    fireEvent.click(firstTeam);

    expect(mockedHistoryPush).toHaveBeenCalledWith('/edit/2');
  });
});
