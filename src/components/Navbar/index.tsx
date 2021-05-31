import React from 'react';
import { useHistory } from 'react-router-dom';
import Title from '../../ui-components/Title';
import { Container, Logo } from './styles';
import logo from '../../assets/bitspace.svg';

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
    </Container>
  );
};

export default Navbar;
