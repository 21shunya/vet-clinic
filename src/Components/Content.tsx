import React, { useState } from 'react';
import { ButtonList } from './ButtonList';
import { Table } from './Table';

export const Content: React.FC = () => {

  return (
    <div className='content_wrapper'>
      <ButtonList />
      <Table />
      <div>
        add new item
      </div>
    </div>
  );
};