import React, { ChangeEvent, useState } from 'react';

interface InputProps {
  item: string
  addHandler: (_key: string, event: ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = (props) => {

  return (
    <div className='input-wrapper'>
      <label>{props.item}</label>
      <input 
        type='text'
        id='input-item'
        onChange={props.addHandler.bind(null, props.item)}        
      />
    </div>
  );
};