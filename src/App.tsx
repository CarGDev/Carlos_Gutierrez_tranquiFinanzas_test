import React, { ChangeEvent, FC, useState } from 'react';
import Names from './components/getPeople/divMocks'
import './App.css';



const App: FC = () => {
  return (
    <div className="App">
      <Names />
    </div>
  );
}

export default App;
