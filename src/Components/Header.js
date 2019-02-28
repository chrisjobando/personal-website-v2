// Initial Imports
import React, { Component } from 'react';

// Section Background
import Background from '../img/header-bg.jpg';
import Picture from '../img/headshot.gif';

// Styling
import '../SASS/header.sass';

// Creates Section Styling
const myStyles = {
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

// Main HTML
class Header extends Component {
  render() {
    return (
      <header style={ myStyles }>
        <img src={ Picture } alt="headshot"></img>
        <h1>{ this.props.title }</h1>
        <h2>Web Developer, Programmer, Designer, & Filmmaker</h2>
      </header>
    );
  }
};

export default Header;
