import styled from 'styled-components';

export const Container = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  position: relative;

  &:after {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    border-radius: 100%;
    transform: translateX(-50%) translateY(-50%);
    width: calc(100% + 3px);
    height: calc(100% + 3px);
    border: 1px dashed rgba(255, 255, 255, 0.5);
  }
`;
