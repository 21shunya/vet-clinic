import React, { useContext, useState } from 'react';
import ModalCtx from '../ModalCtx';
import { Input } from './Input';

interface ModalProps {
  keys: string[]
  document: object
  onUpdate: (newDoc: object) => Promise<void>
}

export const UpdateModal: React.FC<ModalProps> = (props) => {
  const [document, setDocument] = useState<Record<string, any>>(props.document);

  const { changeVisibility } = useContext(ModalCtx);

  function onChangeHandler(_key: string, _value: string) {
    const key = _key;
    const value = _value;
    console.log(key, value);
    const newDocument = document;
    newDocument[key] = value;
    setDocument(newDocument);
    console.log(document);
  }

  return (
    <div className='modal-wrapper'>
      <div className='modal-content'>
        {props.keys?.map((item, index) => {
          return ( 
            <Input 
              key={index} 
              item={item} 
              defaultValue={props.document[item as keyof object]} 
              onChangeHandler={onChangeHandler} 
            />);
        })}
        <button onClick={props.onUpdate.bind(null, document)}>Сохранить</button>
        <button onClick={changeVisibility}>Отменить</button>
      </div>
    </div>);
};

