import styled, { keyframes } from 'styled-components';
import theme from '../../../styles/theme';

const loading = keyframes`
  0%{
    background: linear-gradient(
      to right,
      ${theme.colors.extraLight},
      ${theme.colors.light},
      ${theme.colors.light}
    );
  }

  20%{
    background: linear-gradient(
      to right,
      ${theme.colors.light},
      ${theme.colors.extraLight},
      ${theme.colors.light}
    );
  }
  30%{
    background: linear-gradient(
      to right,
      ${theme.colors.light},
      ${theme.colors.light}
      ${theme.colors.extraLight},
    );
  }

  40%, 100%{
    background: linear-gradient(
      to right,
      ${theme.colors.light},
      ${theme.colors.light},
      ${theme.colors.light},
    );
  }
`;

export const PlayerSkeleton = styled.div`
  padding: 32px;
  border-radius: ${theme.borderRadius};
  margin-bottom: 1rem;
  background: linear-gradient(
    to right,
    ${theme.colors.light},
    ${theme.colors.light},
    ${theme.colors.light}
  );
  animation: ${loading} 2s infinite ease;
`;
