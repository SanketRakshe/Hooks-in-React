import './App.css'
import React, { useState, useEffect, useMemo } from 'react';


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




// useEffect hook example for data fetching side effect --------------------

// function App() {
  
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(null);

//   useEffect(() => {
//       fetch('https://jsonplaceholder.typicode.com/posts/1')
//       .then((response) => response.json())
//       .then((json) => {
//         setData(json);
//         setLoading(false);
//       })
//   }, []);


//   return (
//       <div>

//         <h1>data.title</h1>
//         <div>data.body</div>

//       </div>
//   )
// };



// function App() {

//   const [todos, setTodos] = useState([]);

//   useEffect(()=> {
//       fetch('https://sum-server.100xdevs.com/todos')
//       .then(async function(response) {
//           const json = await response.json();
//           setTodos(json.todos);
//       })
//   }, [])

//   return (
//       <div>
//           {/* {todos.map(todo => <Todo key={todo.id} title={todo.title} description = {todo.description} />)} */}

//           {
 //           //  todos.map( (todo) => {
//                 return (
//                   <Todo key={todo.id} title={todo.title} description={ todo.description} />
//                 )
//               })
//           }

//       </div>
//   )
// }

// function Todo({title, description}) {
//   return (
//     <>
//       <h1>{title}</h1>
//       <p>{description}</p>
    
//     </>
//   )
// }


// function App() {

//   const [todos, setTodos] = useState([]);
//   const [id, setId] = useState(1);

//   useEffect(()=> {
//       fetch('https://sum-server.100xdevs.com/todo?id=' +id)
//       .then(async function(response) {
//           const json = await response.json();
//           setTodos(json.todos);
//       })
//   }, [id])

//   function handelclick(newId) {
//     setId(newId)
//   }

//   return (
//     <div>
//       <div>
//             <button onClick={handelclick(1)}>1</button>
//             <button onClick={handelclick(2)}>2</button>
//             <button onClick={handelclick(3)}>3</button>
//             <button onClick={handelclick(4)}>4</button>
//         </div>

//         <div>
//             {todos.map((todo) => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
//         </div>
//     </div> 
      
//   )
// }

// function Todo({title, description}) {
//   return (
//     <>
//       <h1>{title}</h1>
//       <p>{description}</p>
//     </>
//   )
// }


// import PropTypes from 'prop-types';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [id, setId] = useState(1);

//   useEffect(() => {
//     fetch("https://sum-server.100xdevs.com/todo?id=" + id)
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json);
//         if (json.todos) {
//           setTodos(json.todos);
//         } else {
//           setTodos([]); // Handle case where no todos are returned
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setTodos([]); // Optionally handle error by setting todos to an empty array
//       });
//   }, [id]);

//   const handleButtonClick = (newId) => {
//     setId(newId);
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={() => handleButtonClick(1)}>Load Todos 1</button>
//         <button onClick={() => handleButtonClick(2)}>Load Todos 2</button>
//         <button onClick={() => handleButtonClick(3)}>Load Todos 3</button>
//         <button onClick={() => handleButtonClick(4)}>Load Todos 4</button>
//       </div>

//       <div>
//         {todos.length > 0 ? (
//           todos.map((todo) => (
//             <Todo key={todo.id} title={todo.title} description={todo.description} />
//           ))
//         ) : (
//           <p>No todos available for the selected ID.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h2>{title}</h2>
//       <p>{description}</p>
//     </div>
//   );
// }

// Todo.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };



//useMemo Hook implementation ----------------------------------------------------------------


// function calculateFactorial(n) {
//   if(n<=1) {
//     return 1;
//   }
//   return n* calculateFactorial(n-1);
// }

// function App() {
//   const [input, setInput] = useState(5);
//   const [number, setNumber] = useState(5);

//   const factorial = useMemo(() => {
//     console.log("Calculating calculator....");
//     return calculateFactorial(number);
//   },[number]);

//   return (
//     <div>
//       <h1>Factorial Calculator:</h1>

//       <input type='number' value={input} onChange={(e) => setInput(Number(e.target.value))}></input>

//       <button onClick={ () => setNumber(input)}> calculate factorial</button>

//       <p>Factorial of a {number} is {factorial}</p>
//     </div>
//   )
// }



function App() {
  
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const count = useMemo(() => {
    let count = 0;
    for(let i=0; i<=Number(inputValue); i++) {
      count = count + i;
    }
    return count;
  }, [inputValue])

  return (
    <div>
      <input type='number' onChange={(e) => {
        setInputValue(e.target.value)
      }} placeholder='find the sum from 1 to n' />

      <br />

      <p>Sum is {count}</p>

      <br />

      <button onClick={() => setCounter(counter+1)} > Counter {counter} </button>

    </div>
  )
}

export default App;

