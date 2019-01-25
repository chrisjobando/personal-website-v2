// Initial Imports
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Styling
import './SASS/index.sass';

// Components
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Social from './Components/Social';
import Notes from './Components/Notes';

// Misc.
import * as serviceWorker from './serviceWorker';

// Main HTML
class App extends Component {
  render() {
    return (
      <div>
        <Navigation logoTitle="Christopher Obando" />
        <Header title="Christopher Obando" button="Read My Bio" />
        <Projects />
        <Skills title="Skills" button="See My Resume"/>
        <Social />
        <Notes title="Sign up for Chris' Notes!"/>
      </div>
    );
  }
}

// Renders app
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
