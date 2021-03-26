import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #fff;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const Header = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
`;

export const Body = styled.div`
  padding: 1rem;
`;
