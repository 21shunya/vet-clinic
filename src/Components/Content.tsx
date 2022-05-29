import React, { useEffect, useState } from 'react';
import DataService from '../API/DataService';
import TableCtx from '../TableCtx';
import { ButtonList } from './ButtonList';
import { CreateForm } from './CreateForm';
import { Table } from './Table';

export const Content: React.FC = () => {
  const [tableData, setData] = useState<object[]>([]);
  const [tableName, setTableName] = useState<string>('');

  useEffect(() => {
    fetchData('animals');
  }, []);

  async function fetchData(value: string) {
    setData(await DataService.getAll(value));
    setTableName(value);
  }

  function selectTable(value: string) {
    fetchData(value);
  }

  const keys: string[] = [];
  
  tableData.map((document) => {
    {Object.keys(document).map((item) => {
      if (!keys.includes(item) && item !== '__v' && item !== '_id' ) return keys.push(item);
    });}
  });

  return (
    <TableCtx.Provider value={{ selectTable }}>
      <div className='content_wrapper'>
        <ButtonList/>
        <Table keys={keys} tableData={tableData}/>
        <CreateForm keys={keys} tableName={tableName}/>
      </div>
    </TableCtx.Provider>
  );
};