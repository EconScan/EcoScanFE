import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from '/Users/muham/Documents/uottawahack6/hackathon/scan/ecoscan/src/Components/navbar.js'; // Import the NavBar component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar /> {/* Include the NavBar component here */}
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
}

export default App;

