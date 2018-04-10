import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import formatElapsedTime from './formatElapsedTime';

class App extends Component {
  render() {
    let result = formatElapsedTime(100000000);

    return (
      <div className="App">
        <h2> {result} </h2>
      </div>
    )
  }
}

export default App;
