import React from 'react';

interface ItemProps {
  item: string
}

export const TableCell: React.FC<ItemProps> = (props) => {
  return (
    <div className='table-cell-wrapper'>
      {props.item}
    </div>
  );
};