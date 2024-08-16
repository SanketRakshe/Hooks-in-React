import './App.css'
import React, { useState, useEffect } from 'react';


// Example for useState hook --------------------------------
// function App() {

//   const [count, setCount] = useState(0);

//   function increment() {
//       setCount(count+1);
//   }

//   function Decrement() {
//       setCount(count-1);
//   }

//   return (
//       <div>
//           <div>{count}</div>
//           <button onClick={increment}>Increment</button>
//           <button onClick={Decrement}>Decrement</button>
//       </div>
//   )
// }


// useEffect hook example for data fetching side effect
function App() {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
  }, []);


  return (
      <div>

        <h1>data.title</h1>
        <div>data.body</div>

      </div>
  )
};

export default App
