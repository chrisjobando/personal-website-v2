// Initial Imports
import React, { Component } from 'react';

// Section Background
import Background from '../img/bg-masthead.jpg';

// Styling
import '../SASS/header.sass';

// Creates Section Styling
const myStyles = {
  backgroundImage: `url(${Background})`,
  height: '50vh',
  backgroundSize: 'cover',
};

// Main HTML
class Header extends Component {
  render() {
    return (
      <header style={ myStyles }>
        <h1>{ this.props.title }</h1>
        <p>Web Developer, Programmer, Designer, & Filmmaker</p>
        <a href="#button">{ this.props.button }</a>
      </header>
    );
  }
};

export default Header;
