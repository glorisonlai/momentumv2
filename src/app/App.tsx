import React from 'react';
import './App.css';
import Background from './background/background';
import Body from './body/body';

const App: React.FunctionComponent = () => (
  <div className="App">
    <Background />
    <div className="to-do" />
    <div className="weather" />
    <Body />
    <div className="settings" />
  </div>
);

export default App;
