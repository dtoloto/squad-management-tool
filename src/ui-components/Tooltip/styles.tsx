import styled from 'styled-components';

export const Container = styled.span`
  position: relative;

  &:hover {
    > div {
      opacity: 1;
    }
  }
`;

export const Balloon = styled.div`
  transition-delay: 0.3s;
  position: absolute;
  top: calc(-100% - 15px);
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  color: #fff;
  font-weight: lighter;
  font-size: 0.7rem;
  padding: 5px 7px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: rgba(0, 0, 0, 0.7);

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid rgba(0, 0, 0, 0.7);
    left: 50%;
    bottom: -5px;
    transform: translateX(-50%);
  }
`;
