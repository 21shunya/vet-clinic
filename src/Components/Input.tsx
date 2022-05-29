import React, { useState } from 'react';

interface InputProps {
  item: string
  defaultValue?: string
  onChangeHandler: (_key: string, _value: string) => void
}

export const Input: React.FC<InputProps> = (props) => {
  const [value, setValue] = useState<string>(props.defaultValue || '');
  
  function test(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    props.onChangeHandler(props.item, event.target.value);
  }
  
  return (
    <div className='input-wrapper'>
      <label>{props.item}</label>
      <input 
        type='text'
        id='input-item'
        value={value}
        onChange={test}        
      />
    </div>
  );
};