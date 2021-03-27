import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
`;

export const Label = styled.p`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1.5rem;
  font-weight: bold;
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
