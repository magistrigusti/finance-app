import React from 'react';
import style from './Logo.module.css';

const Logo = () => {
  return (
    <div className={style.logo}>
      <div className={style.title}>TDF</div>
      <div className={style.subtitle}>TonDev Finance</div>
    </div>
  );
};

export default Logo;