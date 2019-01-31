// Initial import
import React, { Component } from 'react';

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
              <a href="/shadowKnightGBA" rel="noopener noreferrer">
                <i className="fas fa-gamepad" />
              </a>
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
            <span className="react">
              <a href="https://github.com/chrisjobando/personal-website"
                target="_blank" rel="noopener noreferrer">
                <i className="fab fa-react" />
              </a>
            </span>
            <h4>React App Site (Personal Ongoing)</h4>
            <p>Gaining familiarity with React.js framework,</p>
            <p>self-teaching JavaScript</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
