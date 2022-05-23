import React, { useEffect, useState } from 'react';
import DataService from '../API/DataService';
import TableCtx from '../TableCtx';
import { ButtonList } from './ButtonList';
import { CreateForm } from './CreateForm';
import { Table } from './Table';

export const Content: React.FC = () => {
  const [tableData, setData] = useState<object[]>([]);

  useEffect(() => {
    fetchData('Animals');
  }, []);

  async function fetchData(value: string) {
    value === 'Animals' ? setData(await DataService.getAllAnimals()) :  
      value === 'Users' ? setData(await DataService.getAllUsers()) :
        value === 'Clinic' ? setData(await DataService.getAllClinics()) : 
          value === 'Appointment' ? setData(await DataService.getAllAppointments()) :
            value === 'Services' ? setData(await DataService.getAllServices()) : 
              setData([]);
  }

  function selectTable(value: string) {
    fetchData(value);
  }

  const keys: string[] = [];
  
  {tableData.map((document) => {
    {Object.keys(document).map((item) => {
      if (keys.includes(item)) return;
      else keys.push(item);
    });}
  });}

  return (
    <TableCtx.Provider value={{ selectTable }}>
      <div className='content_wrapper'>
        <ButtonList/>
        <Table keys={keys} tableData={tableData}/>
        <CreateForm keys={keys} />
      </div>
    </TableCtx.Provider>
  );
};