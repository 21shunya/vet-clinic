import React, { createContext } from 'react';

function selectTable(value: string) {
  void(value);
}
const TableCtx = createContext({selectTable});

export default TableCtx;