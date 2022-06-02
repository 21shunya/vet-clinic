import React from 'react';
import role from '../login';
import { TableSwitchingButton } from './TableSwitchingButton';

export const ButtonList: React.FC = () => {
  let tableNames: string[] = [];
  const r = role.get();

  if (['Igor'].indexOf(r) != -1 ){ tableNames = [ 'animals', 'appointments', 'clinics', 'services', 'users'];}
  else if (['Jim', 'Olivia', 'Scarlett', 'Hayley', 'James', 'Mac', 'Michael', 'Britney', 'Rhianna', 'Justin_B'].indexOf(r) != -1) {tableNames = [ 'animals', 'appointments', 'users', 'services'];}
  else if (['Pam', 'Justin_T', 'Paul', 'John', 'George', 'Ringo'].indexOf(r) != -1) {tableNames = [ 'animals', 'appointments'];}


  return (
    <div className='btn-list-wrapper'>
      {tableNames.map((btnName, index) => {
        return <TableSwitchingButton key={index} btnName={btnName} />;
      })}
    </div>
  );
};