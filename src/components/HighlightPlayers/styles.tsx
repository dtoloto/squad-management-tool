import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const FirstCard = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 50%;
  }
`;

export const SecondCard = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 50%;
  }
`;
