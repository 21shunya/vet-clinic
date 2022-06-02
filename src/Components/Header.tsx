import React from 'react';
import { NavLink } from 'react-router-dom';
import role from '../login';


export const Header: React.FC = () => {
  const title = role.get();
  let userRole = 'Admin';

  if (['Igor'].indexOf(title) != -1 ){ userRole = 'Admin';}
  else if (['Jim', 'Olivia', 'Scarlett', 'Hayley', 'James', 'Mac', 'Michael', 'Britney', 'Rhianna', 'Justin_B'].indexOf(title) != -1) { userRole = 'Doctor';}
  else if (['Pam', 'Justin_T', 'Paul', 'John', 'George', 'Ringo'].indexOf(title) != -1) { userRole = 'Client';}

  return ( 
    <div className='header'>
      <div className='title-name'>
        role: {userRole}
        <span> | </span>
        name: {title}
      </div>
      <NavLink to='/login'>
        <button className='exit-button'>
        выйти
        </button>
      </NavLink>
    </div>
  );
};