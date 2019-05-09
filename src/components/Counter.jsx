import React from 'react';

const Counter = (props) => {
  return (
    <div className="counter">
      <button onClick={props.increment}>Increment</button>
    </div>
  )
}

export default Counter;
