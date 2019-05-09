import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import LoginForm from './components/LoginForm'

function App() {
  const [count, setCount] = useState(0);
  const [currentUser, setCurrentUser] = useState({name: '', addres: ''})

  function increment() {
    setCount(count + 1)
  }

  function handleLogin(target) {
    target.preventDefault();
    setCurrentUser({name: 'dan'})
    console.log(currentUser);
  }

  useEffect(() => {
    setCount(5)
  })
  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>
        <Counter
          increment={increment}
          count={count}/>
        <LoginForm
          currentUser={currentUser}
          handleLogin={handleLogin}/>
        <h2>Username:{currentUser.name}</h2>
        <h2>Address:</h2>
      </header>
    </div>
  );
}

export default App;
