import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { NewsHeaderCard } from 'react-ui-cards';

// Section Background
import Background from '../img/about-bg.jpg';

// Other Images
import ShadowKnight from '../img/ShadowKnight.png';
import SpotifyApp from '../img/SpotifyApp.png';

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
        <title>my projects</title>
        <h1>Featured Projects:</h1>
        <NavLink to="/spotifyApp">
          <NewsHeaderCard title="Spotify Stats"
            author="A ReactJS App using the Spotify Web API"
            thumbnail={ SpotifyApp }>
          </NewsHeaderCard>
        </NavLink>
        <NavLink to="/ShadowKnightGBA">
          <NewsHeaderCard title="Shadow Knight"
            author="A GameBoy Advance Game Programmed in C"
            thumbnail={ ShadowKnight }>
          </NewsHeaderCard>
        </NavLink>
      </div>
    );
  }
}

export default Portfolio;
