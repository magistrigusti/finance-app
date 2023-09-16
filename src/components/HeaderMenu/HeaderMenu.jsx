import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './HeaderMenu.module.css';

const HeaderMenu = () => {
  return (
    <div>
      <nav>
        <ul className={style.list}>
          <li>
            <NavLink className={({isActive}) => isActive ? style.active : null} to='/'>Main</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? style.active : null} to='/stocks'>Stock</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMenu;