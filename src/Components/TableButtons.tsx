import React from 'react';

interface TableButtonsProps {
  onRemove: () => Promise<void>
}

export const TableButtons: React.FC<TableButtonsProps> = (props) => {
  return (
    <div className='table-btns'>
      <button className='btn-wrapper'>
        <img src='update.svg'/>
      </button>
      <button className='btn-wrapper' onClick={props.onRemove}>
        <img src='delete.svg'/>
      </button>
    </div>
  );
};