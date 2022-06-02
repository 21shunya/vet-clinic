import React from 'react';
import { Content } from './Components/Content';
import { Header } from './Components/Header';

export const HomePage: React.FC = () => {
  return <div>
    <Header />
    <Content />
  </div>;
};