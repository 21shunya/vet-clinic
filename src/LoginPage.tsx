import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import DataService from './API/DataService';
import { Input } from './Components/Input';
import Role from './login';

export const LoginPage: React.FC = () => {
  const [document, setDocument] = useState<Record<string, any>>({});

  function onChangeHandler(_key: string, _value: string) {
    const key = _key;
    const value = _value;
    const newDocument = document;
    newDocument[key] = value;
    setDocument(newDocument);
  }
  const nav = useNavigate();

  async function login() {
    if ((await DataService.doLogin(document) as any).connected) {
      Role.set(document.login);
      nav('/');
    }
  }

  return (
    <div className='login-card-wrapper'>
      <div className='login-card-content'>
        <Input item='login' onChangeHandler={onChangeHandler}/>
        <Input item='password' onChangeHandler={onChangeHandler}/>
        <div>
          <button className='exit-button' onClick={login}>Войти</button>
        </div>
      </div>
    </div>
  );
};