import React from 'react';
import './App.css';
import Background from './background/background';
import Body from './body/body';

const App: React.FunctionComponent = () => (
  <div className="App">
    <Background />
    <Body />
    <div className="settings" />
  </div>
);

export default App;
