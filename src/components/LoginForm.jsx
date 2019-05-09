import React, { useState } from 'react';

const LoginForm = (props) => {
  const [username, setUsername] = useState('')
  const [address, setAddress] = useState('')
  const [theUser, setUser] = useState({})

  function login(e) {
    e.preventDefault();
    setUser({username: username, address: address})
  }

  const {} = props
  return (
    <div className="login-form">
      <form onSubmit={login}>
        <input onChange={({target}) => setUsername(target.value)} type="text" name="username" value={username}/>
        <input onChange={({target}) => setAddress(target.value)} type="text" name="address" value={address}/>
        <button onClick={login} type="submit">Login</button>
      </form>
      {theUser && <h2>current username: {theUser.username}</h2>}
      {theUser && <h2>current address: {theUser.address}</h2>}
    </div>
  )
}

export default LoginForm
