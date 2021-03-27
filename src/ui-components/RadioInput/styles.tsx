import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 1.5rem;
`;

interface IStyledInput {
  [string: string]: any;
}

export const StyledInput = styled.input<IStyledInput>`
  -webkit-appearance: none;
  border: 1px solid ${({ theme }) => theme.colors.light};
  margin-right: 0.5rem;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  padding: 2px;
  border: 1px solid ${({ theme }) => theme.colors.light};
  position: relative;

  &:checked {
    border-color: ${({ theme }) => theme.colors.secondary};
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      border-radius: 100%;
      width: calc(100% - 5px);
      height: calc(100% - 5px);
      background: linear-gradient(
        to bottom,
        ${({ theme }) => theme.colors.secondary},
        ${({ theme }) => theme.colors.primary}
      );
    }
  }
`;

interface ILabel {
  htmlFor: string;
}

export const Label = styled.span<ILabel>`
  color: ${({ theme }) => theme.colors.mediumLight};
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-weight: 400;
  margin-right: 1rem;

  &.checked {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const TitleLabel = styled.span`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 0.9rem;
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bolder;
`;
