import React, { useState } from 'react';
import DataService from '../API/DataService';
import { Input } from './Input';

interface FormProps {
  keys: string[]
  tableName: string
}

export const CreateForm: React.FC<FormProps> = (props) => {
  const [document, setDocument] = useState<Record<string, any>>({});

  function onChangeHandler(_key: string, _value: string) {
    const key = _key;
    const value = _value;
    const newDocument = document;
    newDocument[key] = value;
    setDocument(newDocument);
  }

  async function createDocument() {
    await DataService.setDocument(props.tableName, document);
    setDocument({});
  }

  return (
    <div className='create-form-wrapper'>
      {props.keys?.map((item, index) => {
        return(<Input key={index} item={item} onChangeHandler={onChangeHandler} />);
      })}
      <button className='form-btn' onClick={createDocument}>Создать</button>
    </div>
  );
};