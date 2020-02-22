import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Info from './components/info.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-header"> -- re-playlist -- </h1>
        <div className="header"> 
          <p> video </p>
          <p> song title </p>
          <p> artist </p>
        </div>

        <Info />

      </div>
    );
  }
}

export default App;
