import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={increment}>Increment</button>
        <p>{count}</p>
      </header>
    </div>
  );
}

export default App;
