import React, { useState } from 'react';
import { ButtonList } from './ButtonList';
import { Table } from './Table';

export const Content: React.FC = () => {

  const tableData = [
    {
      '_id': {
        '$oid': '6245aae075bef986208c19a0'
      },
      'name': 'Igor',
      'surname': 'Kotilevec',
      'patronymic': 'Denisovich',
      'position': 'Administrator',
      'role': 'Admin'
    },
    {
      '_id': {
        '$oid': '6245aae075bef986208c19a1'
      },
      'name': 'Jim',
      'surname': 'Halpert',
      'patronymic': '',
      'position': 'Doctor',
      'role': 'Doctor'
    },
    {  '_id': {    
      '$oid': '6245aae075bef986208c19a2'  },  
    'name': 'Pam',  
      
    'surname': 'Beesley',  
    'patronymic': 'Morgan',  
    'role': 'User',  'animals': [    {      '$oid': '624ff0cf68674b3847f079dd'    },    {      '$oid': '624ea622069dbc1ba320ba07'    },    {      '$oid': '624ea622069dbc1ba320ba10'    },    {      '$oid': '624ea622069dbc1ba320ba11'    }  ]}
  ];

  const keys: string[] = [];
  
  {tableData.map((document) => {
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
      <div>
        add new item
      </div>
    </div>
  );
};