// Initial Imports
import React, { Component } from 'react';

// Styling
import '../SASS/index.sass';

// Index Components
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';
import Social from './Social';
import Notes from './Notes';

// Main HTML
class Home extends Component {
  render() {
    return (
      <div>
        <Header title="Christopher Obando" />
        <Projects />
        <Skills title="Skills" />
        <Social />
        <Notes title="Sign up for Chris' Notes!" />
      </div>
    );
  }
}

export default Home;
