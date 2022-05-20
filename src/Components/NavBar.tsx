import React, { useState } from 'react';

interface TodoFormProps {
  onAdd(title: string): void
}

export const Navbar: React.FC<TodoFormProps> = (props) => {

  const [title, setTitle] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key =='Enter') {
      props.onAdd(title);
    }
  };
  
  return (
    <div>
      <label>first input</label>
      <input 
        onChange={changeHandler}
        value={title}
        type='text'
        id='title'
        placeholder='write here'
        onKeyPress={keyPressHandler} />
    </div>
  );
};
