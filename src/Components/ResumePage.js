import React, { Component } from 'react';

// Section Background
import Background from '../img/skills-bg.jpg';

// Resume PDF
import File from '../downloads/resume.pdf';

// Styling
import '../SASS/resume-pg.sass';

// Creates Section Styling
const myStyles = {
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

class Resume extends Component {
  render() {
    return (
      <div className="resume" style={ myStyles }>
        <title>my resume</title>
        <object data={File} type="application/pdf" width="100%" height="1100">
            <p>It appears you don't have a PDF plugin for this browser.
             No biggie... you can <a href={File}>click here to
            download the PDF file.</a></p>
        </object>
      </div>
    );
  }
}

export default Resume;
