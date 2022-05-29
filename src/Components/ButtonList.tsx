import React from 'react';
import { TableSwitchingButton } from './TableSwitchingButton';

export const ButtonList: React.FC = () => {
  const tableNames = [ 'animals', 'appointments', 'clinics', 'services', 'users'];

  return (
    <div className='btn-list-wrapper'>
      {tableNames.map((btnName, index) => {
        return <TableSwitchingButton key={index} btnName={btnName} />;
      })}
    </div>
  );
};