import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #fff;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const Header = styled.div`
  padding: 1.5rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Body = styled.div`
  padding: 1.5rem 1rem;
`;
