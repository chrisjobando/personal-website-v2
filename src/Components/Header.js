// Initial Imports
import React, { Component } from 'react';

// Styling
import '../SASS/header.sass';

// Small Headshot
import Picture from '../img/headshot.png';

// Main HTML
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="rect">
          <br style={{ marginTop: '15vh' }} />
          <img src={ Picture } alt=""></img>
          <h1>{ this.props.title }</h1>
          <h2>Web Developer, Programmer, Designer, & Filmmaker</h2>
        </div>

      </div>
    );
  }
};

export default Header;
