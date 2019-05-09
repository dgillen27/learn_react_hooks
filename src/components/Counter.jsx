import React from 'react';

const Counter = (props) => {
  return (
    <div className="counter">
      <button onClick={props.increment}>Increment</button>
      <h1>{props.count / 2 }</h1>
      <h2>{props.count * 2}</h2>
    </div>
  )
}

export default Counter;
