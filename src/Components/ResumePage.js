import React, { Component } from 'react';
import Iframe from 'react-iframe';

// Section Background
import Background from '../img/skills-bg.jpg';

// Styling
import '../SASS/resume-pg.sass';

// Creates Section Styling
const myStyles = {
  backgroundImage: `url(${Background})`,
  height: '130vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

class Resume extends Component {
  render() {
    return (
      <div className="resume" style={ myStyles }>
          <Iframe
            url="https://resume.creddle.io/embed/hriqjcweh5p"
            width="850px"
            height="1100px"
            id="resume"
            className="myResume"
            display="initial"
            position="relative"
            allowFullScreen
          />
      </div>
    );
  }
}

export default Resume;
