// src/App.js
import React from 'react';
import './App.css'; // General styles for the App component
import Header from './components/header'; // Import the Header component
import Body from './components/body';     // Import the Body component

function App() {
  return (
    <div className="App">
      <Header /> {/* Render the Header component */}
      <Body />   {/* Render the Body component */}
    </div>
  );
}

export default App;
