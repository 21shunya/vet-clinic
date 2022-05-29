import React, { useState } from 'react';
import DataService from '../API/DataService';
import { Input } from './Input';

interface FormProps {
  keys: string[]
}

export const CreateForm: React.FC<FormProps> = (props) => {
  const [document, setDocument] = useState<Record<string, any>>({});

  function addHandler(_key: string, event: React.ChangeEvent<HTMLInputElement>) {
    const key = _key;
    const value = event.target.value;
    const newDocument = document;
    newDocument[key] = value;
    setDocument(newDocument);
  }

  async function createDocument() {
    await DataService.setAnimal(document);
  }

  return (
    <div className='create-form-wrapper'>
      {props.keys?.map((item, index) => {
        return(<Input key={index} item={item} addHandler={addHandler} />);
      })}
      <button className='form-btn' onClick={createDocument}>Создать</button>
    </div>
  );
};