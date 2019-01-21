import React, { Component } from 'react';
import logo from './logo.svg';
import './SASS/App.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My React Portfolio</h1>
        </header>
        <p className="App-intro">
          This is an application by Christopher Obando
        </p>
      </div>
    );
  }
}

export default App;
