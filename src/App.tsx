import React, { useState } from 'react';
import { Content } from './Components/Content';
import { Header } from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage'; 
import { LoginPage } from './LoginPage';

const  App: React.FC = () => {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<HomePage />} path="/"  />
          <Route element={<LoginPage />} path="/login"  />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
