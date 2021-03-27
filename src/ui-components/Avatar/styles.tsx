import styled from 'styled-components';

interface IProps {
  featured?: boolean;
}

export const Container = styled.div<IProps>`
  width: 100%;
  border-radius: 100%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.primary};
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.5rem;
  border: 2px solid ${({ theme }) => theme.colors.secondary};

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  &:before {
    content: '';
    position: absolute;
    width: calc(100% + 16px);
    height: calc(100% + 16px);
    top: -10px;
    left: -10px;
    border: 2px dashed #c185f1;
    box-shadow: 0 0 15px ${({ theme }) => theme.colors.primary},
      inset 0 0 15px ${({ theme }) => theme.colors.primary};
    border-radius: 100%;
    background: transparent;
    display: ${({ featured }) => (featured ? 'block' : 'none')};
  }
`;
