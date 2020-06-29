import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link to="/">
          Listagem
          <span>&nbsp;</span>
        </Link>
        <Link to="/import">Importar</Link>
        <nav>
          <span>&nbsp;</span>
        </nav>
      </nav>
    </header>
  </Container>
);

export default Header;
