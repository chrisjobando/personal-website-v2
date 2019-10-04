import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { NewsHeaderCard } from 'react-ui-cards';

// Section Background
import Background from '../img/about-bg.jpg';

// Other Images
import ShadowKnight from '../img/ShadowKnight.png';
import SpotifyApp from '../img/SpotifyApp.jpg';
import ComputerGraphics from '../img/ComputerGraphics.png';

// Styling
import '../SASS/portfolio-pg.sass';

// Creates Section Styling
const myStyles = {
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio" style={ myStyles }>
        <div className="rect">
          <title>my projects</title>
          <p>Featured Projects:</p>
          <NavLink to="/SpotifyApp">
            <NewsHeaderCard title="Spotify Stats"
              author="A ReactJS App using the Spotify Web API"
              thumbnail={ SpotifyApp }>
            </NewsHeaderCard>
          </NavLink>
          <NavLink to="/ComputerGraphics">
            <NewsHeaderCard title="Computer Graphics"
              author="Work from my UC3M Course"
              thumbnail={ ComputerGraphics }>
            </NewsHeaderCard>
          </NavLink>
          <NavLink to="/ShadowKnightGBA">
            <NewsHeaderCard title="Shadow Knight"
              author="A GameBoy Advance Game Programmed in C"
              thumbnail={ ShadowKnight }>
            </NewsHeaderCard>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Portfolio;
