import React from 'react';
import { TableSwitchingButton } from './TableSwitchingButton';

export const ButtonList: React.FC = () => {
  const tableNames = [ 'Animals', 'Appointment', 'Clinic', 'Services', 'Users'];

  return (
    <div className='btn-list-wrapper'>
      {tableNames.map((btnName, index) => {
        return <TableSwitchingButton key={index} btnName={btnName} />;
      })}
    </div>
  );
};