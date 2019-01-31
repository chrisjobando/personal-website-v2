// Initial Imports
import React, { Component } from 'react';

// Section Background
import Background from '../img/skills-bg.jpg';

// Styling
import '../SASS/skills.sass';

// Creates Section Styling
const myStyles = {
  backgroundImage: `url(${Background})`,
  height: '80vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center bottom',
};

// Main HTML
class Skills extends Component {
  render() {
    return (
      <header style={ myStyles }>
        <h1>{ this.props.title }</h1>
        <div className="row">
          <div className="subrow">
            <span>
              <i className="fas fa-desktop" />
            </span>
            <h4>PLATFORMS</h4>
            <ul>
              <li>Linux Ubuntu</li>
              <li>Microsoft Windows</li>
              <li>macOS</li>
            </ul>
          </div>
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
              <li>Angular 7</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>SASS</li>
              <li>Pug</li>
              <li>Gulp</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Jekyll</li>
              <li>Atom</li>
              <li>Sublime Text 3</li>
            </ul>
          </div>
          <div className="subrow">
            <span>
              <i className="fas fa-paint-brush" />
            </span>
            <h4>GRAPHIC DESIGN</h4>
              <ul>
                <li>Inkscape</li>
                <li>GIMP</li>
                <li>Adobe Photoshop</li>
                <li>POV Ray</li>
                <li>Blender</li>
                <li>Autodesk Maya</li>
              </ul>
          </div>
          <div className="subrow">
            <span>
              <i className="fas fa-globe" />
            </span>
            <h4>LANGUAGES</h4>
            <ul>
              <li>Native Spanish</li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
};

export default Skills;
