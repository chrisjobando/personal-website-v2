// Initial Import
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styling
import '../SASS/navigation.sass';

// Main HTML
class Navigation extends Component {
  render() {
    return (
      <nav>
        <h2 className="logo">{ this.props.logoTitle }</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
