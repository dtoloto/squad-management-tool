import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles';
import theme from './styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Teste</h1>
      {/* <Routes /> */}
    </ThemeProvider>
  );
};

export default App;
