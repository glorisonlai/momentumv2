import React from 'react';
import './App.css';
import Background from './background/background';

function App() {
  return (
    <div className="App">
      <Background />
      <div className="to-do" />
      <div className="weather" />
      <div className="body" />
      <div className="settings" />
    </div>
  );
}

export default App;
