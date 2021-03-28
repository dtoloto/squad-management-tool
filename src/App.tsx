import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles';
import theme from './styles/theme';
import Routes from './routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { TeamsProvider } from './context/TeamsContext';

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <TeamsProvider>
          <Routes />
        </TeamsProvider>
        <Footer>2020 - All rights reserved</Footer>
      </ThemeProvider>
    </Router>
  );
};

export default App;
