import React from 'react';

interface TableButtonProps {
  btnName: string;
}

export const TableButton: React.FC<TableButtonProps> = (props) => {
  return <button className='table-btn'>{ props.btnName }</button>;
};