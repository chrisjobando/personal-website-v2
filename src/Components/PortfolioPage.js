import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Section Background
import Background from '../img/about-bg.jpg';

// Other Images
import ShadowKnight from '../img/ShadowKnight.png';

// Styling
import '../SASS/portfolio-pg.sass';

// Creates Section Styling
const myStyles = {
  backgroundImage: `url(${Background})`,
  height: '100vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio" style={ myStyles }>
        <title>my projects</title>
        <h1>Featured Projects:</h1>
        <Link to="/shadowKnightGBA">
          <p>Shadow Knight</p>
          <img src={ ShadowKnight } alt="Shadow Knight"></img>
        </Link>
      </div>
    );
  }
}

export default Portfolio;
