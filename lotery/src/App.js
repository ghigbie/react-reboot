import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lottery  from './Lottery';

function App() {
  return (
    <div className="App">
      <Lottery />
      <br/>
      <Lottery 
        title="Mini Lotto"
        maxBalls="4"
        maxNumber="10"
      />
     </div>
  );
}

export default App;
