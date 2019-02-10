import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NewsHeaderCard } from 'react-ui-cards';

// Section Background
import Background from '../img/about-bg.jpg';

// Other Images
import ShadowKnight from '../img/ShadowKnight.png';

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
          <Link to="/ShadowKnightGBA">
            <NewsHeaderCard title="Shadow Knight"
              author="A GameBoy Advance Game Programmed in C"
              thumbnail={ ShadowKnight }>
            </NewsHeaderCard>
          </Link>
      </div>
    );
  }
}

export default Portfolio;
