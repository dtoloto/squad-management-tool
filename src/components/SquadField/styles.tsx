import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 2rem;
  position: relative;
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: blue; */
  display: flex;
  flex-direction: column;
`;

export const PlayersRow = styled.div`
  width: 100%;
  flex: auto;
  display: flex;
  justify-content: space-around;
  padding: 5px;
`;

export const Column = styled.div`
  width: 100%;
  color: #fff;
  margin: 1px;
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
  padding: 5px;
  align-self: flex-end;
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
`;
