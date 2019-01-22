import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Styling
import './SASS/index.sass';

// Components
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import Projects from './Components/Projects';

// Misc.
import * as serviceWorker from './serviceWorker';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation logoTitle="Christopher Obando" />
        <Header title="Christopher Obando" button="Read My Bio" />
        <Projects />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
