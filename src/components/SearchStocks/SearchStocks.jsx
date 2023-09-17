import React, { useState } from 'react';
import style from './SearchStocks.module.css';

const SearchStocks = () => {
  const [value, setValue] = useState('');
    console.log(value);
  return (
    <div className={style.searchBlock}>
      <input className={style.input} 
          onChange={(event) => setValue(event.target.value)}
          type='text' 
          placeholder='search' 
          value={value}
      />
    </div>
  );
};

export default SearchStocks;