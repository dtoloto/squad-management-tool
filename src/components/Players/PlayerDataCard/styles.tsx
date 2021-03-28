import styled from 'styled-components';

export const PlayerData = styled.div`
  padding: 16px;
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-gap: 8px;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.extraLight},
    ${({ theme }) => theme.colors.light}
  );
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px dashed ${({ theme }) => theme.colors.mediumLight};
  margin-bottom: 1rem;
  cursor: move;
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.mediumDark};
  font-weight: bold;
`;

export const Data = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.8rem;
`;
