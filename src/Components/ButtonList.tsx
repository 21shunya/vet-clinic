import React from 'react';
import { TableButton } from './TableButton';

export const ButtonList: React.FC = () => {
  const tableNames = [ 'Animals', 'Appointment', 'Clinic', 'Services', 'Users'];

  return (
    <div className='btn-list-wrapper'>
      {tableNames.map((btnName, index) => {
        return <TableButton key={index} btnName={btnName} />;
      })}
    </div>
  );
};