import React, { useState, useReducer, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // const [value, changeValue] = useState(0);
  const [stateCount, dispatchCount] = useReducer(reducerCount, initialStateCount);
  const [stateClick, dispatchClick] = useReducer(reducerClick, initialStateClick);

  // useEffect(() => {
  //   fetch('https://solomid-resources.s3.amazonaws.com/blitz/tft/data/classes.json')
  //     .then(response => response.json())
  //     .then(console.log);
  // }, []);

  return (
    <div className="App">
      <button
        onClick={() => {
          dispatchCount({ type: 'increment' });
          dispatchClick({ type: 'increment' });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatchCount({ type: 'decrement' });
          dispatchClick({ type: 'increment' });
        }}
      >
        Decrement
      </button>
      <p>State count: {stateCount.count}</p>
      <p>State clicks: {stateClick.clicks}</p>
    </div>
  );
}

const initialStateCount = {
  count: 0
};

const reducerCount = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 10 };
    case 'decrement':
      if (state.count - 10 <= 0) {
        return { count: 0 };
      }
      return { count: state.count - 10 };
    default:
      throw new Error();
  }
};

const initialStateClick = {
  clicks: 0
};

const reducerClick = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { clicks: state.clicks + 1 };
    case 'decrement':
      return { clicks: state.clicks - 1 };
    default:
      throw new Error();
  }
};

export default App;
