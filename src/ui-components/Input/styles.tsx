/* eslint-disable prettier/prettier */
import styled from 'styled-components';


export const Container = styled.div`
  margin-bottom: 1rem;
`;

interface IStyledInput {
  [string: string]: any;
}

export const StyledInput = styled.input<IStyledInput>`
  width: 100%;
  background: #fff;
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.mediumDark};
  border-radius: ${({ theme }) => theme.borderRadius};
  -webkit-appearance: none;
  border: 1px solid  ${({ theme }) => theme.colors.light};
  font-size: 1rem;


  &.error {
    border:1px solid ${({ theme }) => theme.colors.secondary};
  }
`;

interface ILabel {
  htmlFor: string;
}

export const Label = styled.span<ILabel>`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 0.9rem;
  display: block;
  margin-bottom: .5rem;
  font-weight: bolder;

  &.error {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
