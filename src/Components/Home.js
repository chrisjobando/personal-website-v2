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
        <title>chris obando</title>
        <Header title="Christopher Obando" />
        <Projects />
        <Notes title="Sign up for Chris' Notes!" />
        <Social />
        <Skills title="Skills" />
      </div>
    );
  }
}

export default Home;
