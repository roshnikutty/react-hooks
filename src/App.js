import React, { useState } from 'react';
import './App.scss';

const App = () => {
  let [count, setCount] = useState(0);

  const handleClick = (e, actionType) => {
    e.preventDefault();
    return actionType === 'up' ? setCount(count + 1) : setCount(count - 1);
  }


  return (
    <div className='App'>
      <div className='App-header'>
        <h1>
          {count}
        </h1>
        <div className='flex'>
          <button
          className='btn-style'
            onClick={(e) => handleClick(e, 'up')}>
            Increment Count
          </button>
          <button
            className='btn-style'
            onClick={(e) => handleClick(e, 'down')}>
            Decrement Count
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
