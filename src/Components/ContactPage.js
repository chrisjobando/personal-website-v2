import React, { Component } from 'react';

// Section Background
import Background from '../img/header-bg.jpg';

// Picture
import Picture from '../img/about-pg-pic.jpg';

// Styling
import '../SASS/contact-pg.sass';

// Creates Section Styling
const myStyles = {
  backgroundImage: `url(${Background})`,
  height: '90vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

class Contact extends Component {
  render() {
    return (
      <div className="contact" style={ myStyles }>
        <title>contact me</title>
        <h1>Shoot Me An Email!</h1>
        <a href="mailto:chrisjobando@gatech.edu">
          chrisjobando@gatech.edu
        </a>
        <p></p>
        <img src={ Picture } alt="Me" />
      </div>
    );
  }
}

export default Contact;
