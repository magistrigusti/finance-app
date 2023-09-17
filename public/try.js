// App

/* 

import Header from './components/Header/Header';
import { Router } from './routes/Router';

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;


*/



// Router

/* 
import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Stocks from '../pages/Stocks/Stocks';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/stocks' element={<Stocks />} />

      <Route path='*' element={<div>Page not found</div>} />
    </Routes>
  )
} 
*/


// Header

/* 
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
*/


// Logo

/*
 import React from 'react';
import style from './Logo.module.css';

const Logo = () => {
  return (
    <div className={style.logo}>
      <div className={style.title}>TDF</div>
      <div className={style.subtitle}>TonDeV Finance</div>
    </div>
  );
};

export default Logo; 
*/