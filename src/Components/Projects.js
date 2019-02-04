// Initial import
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styling
import '../SASS/projects.sass';

// Main HTML
class Projects extends Component {

  render() {
    return (
      <div className="projects" >
        <h3>projects</h3>
        <h2>Check Out My Github!</h2>
        <div className="row">
          <div>
            <span>
              <Link to="/shadowKnightGBA">
                <i className="fas fa-gamepad" />
              </Link>
          </span>
            <h4>Shadow Knight (CS2261)</h4>
            <p>A Mode-0 GameBoy game developed in C</p>
          </div>
          <div>
            <span>
              <a href="https://github.com/team-splash/cs-2340/graphs/contributors"
                target="_blank" rel="noopener noreferrer">
                <i className="fas fa-mobile-alt" />
              </a>
            </span>
            <h4>Donation Tracker App (CS2340)</h4>
            <p>Java-based Android App to track donations</p>
            <p>to non-profit organizations in Atlanta</p>
          </div>
          <div>
            <span>
              <a href="http://grandchallenges.gatech.edu/content/caelum-diagnostics"
                target="_blank" rel="noopener noreferrer">
                <i className="fas fa-solar-panel" />
              </a>
          </span>
            <h4>Caulum Diagnostics (GC 2017)</h4>
            <p>MATLAB-based program to monitor solar panel statistics</p>
            <p>& warns home-owners of possible damage to their panels</p>
          </div>
          <div>
            <span>
              <a href="https://chrisjobando.github.io"
                target="_blank" rel="noopener noreferrer">
                <i className="fas fa-desktop" />
              </a>
            </span>
            <h4>Old Web Site (Personal)</h4>
            <p>Gaining familiarity with HTML/CSS and related frameworks </p>
            <p>& basic JavaScript. This site is responsive & uses Gulp</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
