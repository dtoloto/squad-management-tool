import styled from 'styled-components';

interface IProps {
  span?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

export const Container = styled.div<IProps>`
  grid-column-start: span ${({ xxl, span }) => xxl || span || 1};

  @media screen and (max-width: 1500px) {
    grid-column-start: span ${({ xl, span }) => xl || span || 1};
  }

  @media screen and (max-width: 1300px) {
    grid-column-start: span ${({ lg, span }) => lg || span || 1};
  }

  @media screen and (max-width: 1200px) {
    grid-column-start: span ${({ lg, span }) => lg || span || 1};
  }

  @media screen and (max-width: 900px) {
    grid-column-start: span ${({ md, span }) => md || span || 1};
  }

  @media screen and (max-width: 700px) {
    grid-column-start: span ${({ sm, span }) => sm || span || 1};
  }

  @media screen and (max-width: 450px) {
    grid-column-start: span ${({ xs, span }) => xs || span || 1};
  }
`;
