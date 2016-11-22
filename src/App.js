import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pomodoro from './Pomodoro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Pomodoro</h2>
        </div>
        <p className="App-intro">
          <Pomodoro/>
        </p>
      </div>
    );
  }
}

export default App;
