import React from 'react';
import { Input } from './Input';

interface FormProps {
  keys: string[]
}

export const CreateForm: React.FC<FormProps> = (props) => {
  return (
    <div className='create-form-wrapper'>
      {props.keys?.map((item, index) => {
        return (<Input key={index} item={item} />);
      })}
      <button className='form-btn'>Создать</button>
    </div>
  );
};