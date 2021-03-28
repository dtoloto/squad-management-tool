import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;

  @media screen and (max-width: 1036px) and (min-width: 900px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const Label = styled.p`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1.5rem;
  font-weight: bold;

  @media screen and (max-width: 1036px) and (min-width: 900px) {
    font-size: 1.3rem;
  }
`;

export const AvatarBox = styled.div`
  width: 120px;
  margin-right: 10px;
`;

export const Score = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  position: relative;

  @media screen and (max-width: 1036px) and (min-width: 900px) {
    margin-bottom: 1.5rem;
  }

  &:after {
    position: absolute;
    content: '';
    width: 50px;
    height: 1px;
    background: #fff;
    left: 0;
    top: 1.5rem;
  }
`;
