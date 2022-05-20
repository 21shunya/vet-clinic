import React from 'react';

export const Header: React.FC = () => {
  return ( 
    <div className='header'>
      <div className='title-name'>
        Admin Vasya
      </div>
      <button className='exit-button'>
        выйти
      </button>
    </div>
  );
};