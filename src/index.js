import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './SASS/index.sass';

//import App from './App';
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import * as serviceWorker from './serviceWorker';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation logoTitle="React Project" />
        <Header title="Stylish Portfolio" button="Find Out More" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
