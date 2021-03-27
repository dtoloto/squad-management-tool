import styled from 'styled-components';

export const Container = styled.label`
  height: 135px;
  display: block;
  overflow-y: auto;
  width: 100%;
  background: #fff;
  padding: 10px 15px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.light};
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 0.9rem;
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bolder;
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 1rem;
  border: 0;
  padding: 3px 0;
  padding-left: 10px;
`;
