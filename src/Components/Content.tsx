import React, { useEffect, useState } from 'react';
import DataService from '../API/DataService';
import { ButtonList } from './ButtonList';
import { CreateForm } from './CreateForm';
import { Table } from './Table';

export const Content: React.FC = () => {
  const [tableData, setData] = useState<object[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await DataService.getAll();
    setData(response) ;
  }

  const keys: string[] = [];
  
  {tableData.map((document) => {
    console.log('a', tableData, document);
    {Object.keys(document).map((item) => {
      if (keys.includes(item)) return;
      else keys.push(item);
    });}
  });}
  console.log(keys);

  return (
    <div className='content_wrapper'>
      <ButtonList />
      <Table keys={keys} tableData={tableData}/>
      <CreateForm keys={keys} />
    </div>
  );
};