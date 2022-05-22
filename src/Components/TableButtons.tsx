import React from 'react';

export const TableButtons: React.FC = () => {
  return (
    <div className='table-btns'>
      <button className='btn-wrapper'>
        <img src='update.svg'/>
      </button>
      <button className='btn-wrapper'>
        <img src='delete.svg'/>
      </button>
    </div>
  );
};