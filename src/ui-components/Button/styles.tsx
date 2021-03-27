import styled, { keyframes } from 'styled-components';
import { VscLoading } from 'react-icons/vsc';

interface IContainer {
  block: boolean;
  loading: boolean;
}

export const Container = styled.button<IContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  font-weight: 500;
  transition: 0.2s;
  width: ${({ block }) => (block ? '100%' : 'auto')};
  opacity: ${({ loading }) => (loading ? 0.8 : 1)};
  box-shadow: 0 0 7px rgba(242, 41, 91, 0.7);
  color: #fff;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.secondary},
    ${({ theme }) => theme.colors.primary}
  );
  font-size: 1rem;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 12px rgba(242, 41, 91, 0.7);
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

const spin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
`;

const fadeIn = keyframes`
    from {
      opacity: 0;
      transform: scale(0);
    }
    to{
      opacity: 1;
      transform: scale(1);
    }
`;

export const Loading = styled(VscLoading)`
  animation: ${spin} infinite 1s linear, ${fadeIn} 0.2s ease-in;
  margin-right: 10px;
  opacity: 0.8;
`;
