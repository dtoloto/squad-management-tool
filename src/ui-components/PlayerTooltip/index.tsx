import styled from 'styled-components';

export const PlayerBox = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  cursor: help;

  &:hover {
    > div {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const PlayerData = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  background: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: -100%;
  left: 100%;
  opacity: 0;
  transform: scale(0);
  transition: 0.2s 0.2s;
  padding: 7px;
  min-width: 150px;
  text-align: left;
  font-size: 0.8rem;
  z-index: 3;
  p {
    margin-bottom: 0.1rem;
  }
`;
