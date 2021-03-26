import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 10px 25px;
  height: 70px;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.secondary},
    ${({ theme }) => theme.colors.primary}
  );
  display: flex;
  align-items: center;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const Logo = styled.img`
  cursor: pointer;
  height: 100%;
  margin-right: 1rem;
  filter: grayscale(1) brightness(0) invert(1);
`;
