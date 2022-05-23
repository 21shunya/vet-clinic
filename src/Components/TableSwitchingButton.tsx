import React, { useContext } from 'react';
import TableCtx from '../TableCtx';
interface TableButtonProps {
  btnName: string;
}

export const TableSwitchingButton: React.FC<TableButtonProps> = (props) => {
  
  const { selectTable } = useContext(TableCtx);

  return (
    <button className='table-btn' onClick={selectTable.bind(this, props.btnName)}>
      { props.btnName }
    </button>
  );
};