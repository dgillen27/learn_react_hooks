import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>
        <Counter increment={increment}/>
      </header>
    </div>
  );
}

export default App;
