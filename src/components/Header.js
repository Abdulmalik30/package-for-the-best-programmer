import React from 'react';
import img from '../assets/bg-header-desktop.svg';

const Header = () => {
  return (
    <header className='w-full'>
      <img src={img} className='w-full' />
    </header>
  );
};

export default Header;
