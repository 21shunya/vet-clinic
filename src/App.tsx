import React, { useState } from 'react';
import { Content } from './Components/Content';
import { Header } from './Components/Header';
// import { Navbar } from './Components/NavBar';

const  App: React.FC = () => {
  const [todos, setTodos] = useState([]);

  const addHandler = (title: string) => {
    console.log('add', title);
  };
  
  return (
    <div className="App">
      {/* ggggggggggggg
      <Navbar onAdd={addHandler} /> */}
      <Header />
      <Content />
    </div>
  );
};

export default App;
