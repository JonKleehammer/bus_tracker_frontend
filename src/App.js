import React from 'react';
import logo from './logo.svg';
import RoutesButton from './components/routesbutton.js'
import UserButton from './components/userButton.js'

import './App.css';


function App() {
  return (
    <div className="App">
      <RoutesButton/>
      <UserButton/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to HELLO WORLD.<br/>
          test2
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
