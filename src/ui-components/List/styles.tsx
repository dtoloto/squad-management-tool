import styled from 'styled-components';

export const Container = styled.ul`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 5px 5px 1px 5px;
  background: ${({ theme }) => theme.colors.extraLight};
  list-style: none;
`;

export const ListItem = styled.li`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 10px 25px;
  background: #fff;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid transparent;

  &:last-child {
    /* margin-bottom: 0; */
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.colors.mediumDark};
`;

export const Score = styled.p`
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.mediumDark};
`;
