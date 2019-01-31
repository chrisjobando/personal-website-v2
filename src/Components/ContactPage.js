import React, { Component } from 'react';

// Section Background
import Background from '../img/header-bg.jpg';

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
        <div className="rect">
          <title>contact me</title>
          <h1>Shoot Me An Email</h1>
        </div>
      </div>
    );
  }
}

export default Contact;
