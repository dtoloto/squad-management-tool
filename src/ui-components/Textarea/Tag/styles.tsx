import styled from 'styled-components';

export const Container = styled.span`
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 25px;
  color: #fff;
  padding: 3px 10px;
  font-size: 0.8rem;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 5px;
  margin-bottom: 5px;
`;

export const RemoveButton = styled.span`
  cursor: pointer;
  color: #fff;
  margin-left: 7px;
`;
