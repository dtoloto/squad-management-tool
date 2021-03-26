import React from 'react';
import { useHistory } from 'react-router-dom';
import Title from '../Title';
import { Container, Logo } from './styles';
import logo from '../../assets/logo.png';

const style = {
  title: { color: '#fff', fontSize: '1.2rem' },
};

const Navbar: React.FC = () => {
  const history = useHistory();

  const navigate = () => {
    history.push('/');
  };

  return (
    <Container>
      <Logo onClick={navigate} src={logo} alt="Squad Management Tool" />
      <Title style={style.title}>Squad Management Tool</Title>
    </Container>
  );
};

export default Navbar;
