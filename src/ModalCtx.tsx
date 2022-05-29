import React, { createContext } from 'react';

const defaultValue = {
  changeVisibility() {
    console.log('');
  },
  visible: false
};

const ModalCtx = createContext(defaultValue);

export default ModalCtx;