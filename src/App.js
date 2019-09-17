import React from 'react';
import UserButton from './components/userButton.js'
import RoutesMenu from "./components/routesmenu.js";

import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const App = () => {
  return (
    <div className="App">
      <UserButton/>
      <RoutesMenu/>

    </div>
  );
}

export default App;
