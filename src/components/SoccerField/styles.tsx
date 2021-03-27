import styled from 'styled-components';

interface IProps {
  layout: 'vertical' | 'horizontal';
}

const horizontal = 'calc(9 / 16 * 100%)';
const vertical = 'calc(16 / 9 * 100%)';

export const Container = styled.div<IProps>`
  width: 100%;
  padding-top: ${({ layout }) =>
    layout === 'horizontal' ? horizontal : vertical};
  background: blue;
  position: relative;

  background: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.colors.secondary} -50%,
    ${({ theme }) => theme.colors.primary} 110%
  );

  &:before {
    content: '';
    position: absolute;
    height: ${({ layout }) => (layout === 'horizontal' ? '100%' : '1px')};
    width: ${({ layout }) => (layout === 'horizontal' ? '1px' : '100%')};
    background: rgba(255, 255, 255, 0.3);
    top: ${({ layout }) => (layout === 'horizontal' ? '0' : '50%')};
    left: ${({ layout }) => (layout === 'horizontal' ? '50%' : '0')};
  }

  &:after {
    content: '';
    position: absolute;
    height: 70px;
    width: 70px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    top: 50%;
    left: 50%;
    border-radius: 100%;
    transform: translateX(-50%) translateY(-50%);
  }
`;
