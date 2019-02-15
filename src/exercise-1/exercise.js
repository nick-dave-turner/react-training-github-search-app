import React from "react";

import logo from '../resources/logo.svg';
import '../resources/styles.css';

const MOCK_DATA = [
  { id: 1, name: "Brigida Coughlin" },
  { id: 2, name: "Cleotilde Hahn" },
  { id: 3, name: "Barney Delawder" },
  { id: 4, name: "Dara Hennemann" },
  { id: 5, name: "Keri Hogsett" },
  { id: 6, name: "Soila Farley" },
  { id: 7, name: "Dona Henault" },
  { id: 8, name: "Susan Juarez" },
  { id: 9, name: "Janee Scoggins" },
  { id: 10, name: "Claire Tellez" }
];

// Card component.
/**** TASK 3 ****/
/* Add a new Card component */

// CardList component.
/**** TASK 2****/
/* Add a new CardList component */

// Root component.
const App = () => {

  /**** TASK 1****/
  /* Modify App component */

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
};

export default App;