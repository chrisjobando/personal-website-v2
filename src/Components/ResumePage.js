import React, { Component } from 'react';

// Section Background
import Background from '../img/skills-bg.jpg';

// Resume PDF
import Picture from '../img/resume.jpg';
import File from '../downloads/resume.pdf';

// Styling
import '../SASS/resume-pg.sass';

// Creates Section Styling
const myStyles = {
  backgroundImage: `url(${Background})`,
  minHeight: '100vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

class Resume extends Component {
  render() {
    return (
      <div className="resume" style={ myStyles }>
        <div className="rect">
          <title>my resume</title>
          <a href={File}
            download="Resume.pdf">
              <button>
              Download the PDF
            </button>
          </a>
          <br/>
          <img src={Picture} alt=""/>
        </div>
      </div>
    );
  }
}

export default Resume;
