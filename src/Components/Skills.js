// Initial Imports
import React, { Component } from 'react';

// Section Background
import Background from '../img/skills-bg.jpg';

// Styling
import '../SASS/skills.sass';

// Creates Section Styling
const myStyles = {
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center bottom',
};

// Main HTML
class Skills extends Component {
  render() {
    return (
      <div className="skills" style={ myStyles }>
        <div className="rect">
          <h1>Skills</h1>
          <div className='row'>
            <div className="subrow">
              <span>
                <i className="far fa-file-code"/>
              </span>
              <h4>PROGRAMMING</h4>
                <ul>
                  <li>Java</li>
                  <li>JavaFX</li>
                  <li>C</li>
                  <li>C++</li>
                  <li>Command Line</li>
                  <li>Git</li>
                  <li>Python</li>
                  <li>MATLAB</li>
                </ul>
            </div>
            <div className="subrow">
              <span>
                <i className="fas fa-laptop-code"/>
              </span>
              <h4>WEB DESIGN</h4>
              <ul>
                <li>React.js</li>
                <li>JavaScript</li>
                <li>Sass</li>
                <li>Pug</li>
                <li>Gulp</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Jekyll</li>
              </ul>
            </div>
            <div className="subrow">
              <span>
                <i className="fas fa-mobile"/>
              </span>
              <h4>APP DESIGN</h4>
              <ul>
                <li>Android Studio</li>
                <li>Angular</li>
                <li>TypeScript</li>
                <li>Sass</li>
              </ul>
            </div>
            <div className="subrow">
              <span>
                <i className="fas fa-video" />
              </span>
              <h4>VIDEO PRODUCTION</h4>
              <ul>
                <li>Adobe Premiere</li>
                <li>Adobe After Effects</li>
              </ul>
            </div>

            <div className="subrow">
              <span>
                <i className="fas fa-paint-brush" />
              </span>
              <h4>GRAPHIC DESIGN</h4>
                <ul>
                  <li>Inkscape</li>
                  <li>Adobe Photoshop</li>
                  <li>GIMP</li>
                  <li>POV Ray</li>
                  <li>Blender</li>
                  <li>Autodesk Maya</li>
                </ul>
            </div>
            <div className="subrow">
              <span>
                <i className="fas fa-desktop" />
              </span>
              <h4>OPERATING SYSTEMS</h4>
              <ul>
                <li>Linux Ubuntu</li>
                <li>Microsoft Windows</li>
                <li>macOS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Skills;
