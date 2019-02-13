// Initial import
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
          <div className="proj">
            <span>
              <NavLink to="/shadowKnightGBA">
                <i className="fas fa-gamepad" />
              </NavLink>
          </span>
            <h4>Shadow Knight (CS2261)</h4>
            <p>A Mode-0 GameBoy game developed in C</p>
          </div>
          <div className="proj">
            <span>
              <a href="https://github.com/team-splash/cs-2340/graphs/contributors"
                target="_blank" rel="noopener noreferrer">
                <i className="fas fa-mobile-alt" />
              </a>
            </span>
            <h4>Donation Tracker App (CS2340)</h4>
            <p>Java-based Android App to track donations to non-profit organizations in Atlanta</p>
          </div>
          <div className="proj">
            <span>
              <NavLink to="/spotifyApp">
                <i className="fab fa-react" />
              </NavLink>
          </span>
            <h4>Spotify API ReactJS App</h4>
            <p>ReactJS App Development using Spotify Web API, uses OAuth
              to give the user information on their profile, musical preferences,
              and more!</p>
          </div>
          <div className="proj">
            <span>
              <a href="https://chrisjobando.github.io"
                target="_blank" rel="noopener noreferrer">
                <i className="fas fa-desktop" />
              </a>
            </span>
            <h4>Old Web Site (Personal)</h4>
            <p>Gaining familiarity with HTML/CSS and related frameworks & basic JavaScript. This site is responsive & uses Gulp</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
