import React from 'react';
import Clicker from './Components/Clicker';
import './App.css';

function App() {
  return (
    <div className="App">
      <Clicker limit={10} win={7}/>
    </div>
  );
}

export default App;
