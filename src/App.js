import React, { useState } from 'react';
import './App.scss';

function App() {
  let [count, setCount] = useState(0);
  
  const handleIncrementClick = (e) => {
    e.preventDefault();
    return setCount(count + 1);
  }
  const handleDecrementClick = (e) => {
    e.preventDefault();
    return setCount(count - 1);
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          { count }
        </h1>
        <button
          onClick={(e)=>handleIncrementClick(e)}>
            Increment Count
          </button>
          <button
            onClick={(e)=>handleDecrementClick(e)}>
            Decrement Count
          </button>

      </header>
    </div>
  );
}

export default App;
