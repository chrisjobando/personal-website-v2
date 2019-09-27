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
        <div className="project-content">
          <h2>projects</h2>
          <h1>Check Out My <a className='github-link' target="_blank" rel="noopener noreferrer"
            href='https://github.com/chrisjobando'>Github!</a></h1>
          <div className="row">
          <div className="proj">
              <span>
                <NavLink to="/spotifyApp">
                  <div className='react-logo'>
                    <i style={{color: 'rgb(50,205,50)'}} className="fab fa-react" />
                  </div>
                </NavLink>
            </span>
              <h4>Spotify API ReactJS App</h4>
              <p>ReactJS App Development using Spotify Web API, uses OAuth
                to give the user information on their profile, musical preferences,
                and more!</p>
            </div>
            <div className="proj">
              <span>
                <NavLink to="/shadowKnightGBA">
                  <i style={{color: 'rgb(255,69,0)'}} className="fas fa-gamepad" />
                </NavLink>
            </span>
              <h4>Shadow Knight (CS2261)</h4>
              <p>A Mode-0 GameBoy game developed in C</p>
            </div>
            <div className="proj">
              <span>
                <a href="https://chrisjobando.github.io"
                  target="_blank" rel="noopener noreferrer">
                  <i style={{color: 'rgb(236, 184, 7)'}} className="fas fa-desktop" />
                </a>
              </span>
              <h4>Old Web Site (Personal)</h4>
              <p>Gaining familiarity with HTML/CSS and related frameworks & basic JavaScript. This site is responsive & uses Gulp</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
