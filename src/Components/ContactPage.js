import React, { Component } from 'react';

// Section Background
import Background from '../img/header-bg.jpg';
import Picture from '../img/contact-pg-pic.jpg';

// Styling
import '../SASS/contact-pg.sass';

// Creates Section Styling
const myStyles = {
  backgroundImage: `url(${Background})`,
  height: '100vh',
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
        <br/>
        <img src={ Picture } alt=""/>
        <p></p>
        
      </div>
    );
  }
}

export default Contact;
