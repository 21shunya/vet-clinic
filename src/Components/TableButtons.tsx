import React, { useContext } from 'react';
import ModalCtx from '../ModalCtx';

interface TableButtonsProps {
  onRemove: () => Promise<void>
}

export const TableButtons: React.FC<TableButtonsProps> = (props) => {

  const { changeVisibility } = useContext(ModalCtx);

  return (
    <div className='table-btns'>
      <button className='btn-wrapper' onClick={changeVisibility}>
        <img src='update.svg'/>
      </button>
      <button className='btn-wrapper' onClick={props.onRemove}>
        <img src='delete.svg'/>
      </button>
    </div>
  );
};