import styled from 'styled-components';
import ReactSelect from 'react-select';

export const Container = styled.div`
  margin-bottom: 1.5rem;
`;

export const StyledSelect = styled(ReactSelect)`
  > div {
    width: 100%;
    background: #fff;
    color: ${({ theme }) => theme.colors.mediumDark};
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 1px solid ${({ theme }) => theme.colors.light};
    -webkit-appearance: none;
    font-size: 1rem;
    padding: 2px 15px;

    &.error {
      border-color: ${({ theme }) => theme.colors.danger};
    }
  }
`;

interface ILabel {
  htmlFor: string;
}

export const Label = styled.span<ILabel>`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 0.9rem;
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bolder;
`;
