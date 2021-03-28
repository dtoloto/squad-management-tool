import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 2rem;
  position: relative;
  border: 3px solid #fff;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.colors.secondary} -50%,
    ${({ theme }) => theme.colors.primary} 110%
  );

  &.error {
    border: 3px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const PlayersRow = styled.div`
  width: 100%;
  flex: auto;
  display: flex;
  justify-content: space-around;
`;

export const Column = styled.div`
  width: 100%;
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    padding-bottom: 100%;
  }
`;

export const GoalKeeper = styled.div`
  width: 100%;
  /* padding: 5px; */
  align-self: flex-end;
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
`;
