import './App.css'
import React, { useState } from 'react';


// Example for useState hook --------------------------------
function App() {

  const [count, setCount] = useState(0);

  function increment() {
      setCount(count+1);
  }

  function Decrement() {
      setCount(count-1);
  }

  return (
      <div>
          <div>{count}</div>
          <button onClick={increment}>Increment</button>
          <button onClick={Decrement}>Decrement</button>
      </div>
  )
}

export default App
