import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [firstCount, updateFirstCount] = useState(0);
  const [secondCount, updateSecondCount] = useState(100);

  function handleFirstCounter() {
    if (firstCount + 1 > 10) {
      return updateFirstCount(0);
    }

    updateFirstCount(firstCount + 1);
  }

  return (
    <div className="App">
      <div>
        <p>First counter: {firstCount}</p>
        <button onClick={handleFirstCounter}>Update First Counter</button>
        <p>Second counter: {secondCount}</p>
        <button onClick={() => updateSecondCount(secondCount + 1)}>
          Update Second Counter
        </button>
      </div>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
