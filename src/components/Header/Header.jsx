import React from 'react';
import style from './Header.module.css';  
import Logo from '../Logo/Logo';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

const Header = () => {
  return (
    <div className={style.header}>
      <Logo />

      <HeaderMenu />
    </div>
  );
};

export default Header;