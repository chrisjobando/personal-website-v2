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
              <i class="fas fa-gamepad" />
            </span>
            <h4>Shadow Knight (CS2261)</h4>
            <p>A Mode-0 GameBoy game developed in C</p>
          </div>
          <div>
            <span>
              <i class="fas fa-mobile-alt" />
            </span>
            <h4>Donation Tracker App (CS2340)</h4>
            <p>Java-based Android App to track donations</p>
            <p>to non-profit organizations in Atlanta</p>
          </div>
          <div>
            <span>
              <i class="fas fa-solar-panel" />
            </span>
            <h4>Caulum Diagnostics (GC 2017)</h4>
            <p>MATLAB-based program to monitor solar panel statistics</p>
            <p>& warns home-owners of possible damage to their panels</p>
          </div>
          <div>
            <span>
              <i class="fab fa-react" />
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
