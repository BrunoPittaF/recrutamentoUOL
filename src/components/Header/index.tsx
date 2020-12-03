import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderBar } from './styles';


const Header: React.FC = () => {
  return (
    <HeaderBar>
      <Link to="/">Bem vindo</Link>
    </HeaderBar>
    );
}

export default Header;

