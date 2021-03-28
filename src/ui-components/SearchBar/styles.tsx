import styled from 'styled-components';

export const Container = styled.label`
  width: 100%;
  padding: 10px 15px;
  margin: 10px 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: #fff;
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.mediumDark};
  border: 1px solid ${({ theme }) => theme.colors.light};
  margin-bottom: 1.5rem;

  svg {
    width: 16px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0 8px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: #fff;
  border: 0;
  outline: 0;
  color: ${({ theme }) => theme.colors.mediumDark};
  font-size: 1rem;
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 0.9rem;
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bolder;
`;
