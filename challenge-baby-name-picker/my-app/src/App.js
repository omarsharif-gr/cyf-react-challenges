import logo from './logo.svg';
import './App.css';
import BabyNames from './BabyNames';
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <BabyNames/>
      </header>
    </div>
  );
}

export default App;
