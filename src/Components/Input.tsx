import React from 'react';

interface InputProps {
  item: string
}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <div className='input-wrapper'>
      <label>{props.item}</label>
      <input type='text' />
    </div>
  );
};