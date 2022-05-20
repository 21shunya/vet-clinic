import React from 'react';
import { ButtonList } from './ButtonList';

export const Content: React.FC = () => {
  return (
    <div className='content_wrapper'>
      <ButtonList />
      <div>
        table
      </div>
      <div>
        add new item
      </div>
    </div>
  );
};