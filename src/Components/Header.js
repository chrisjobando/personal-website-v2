import React, { Component } from 'react';
import Background from '../img/bg-masthead.jpg';
import '../SASS/header.sass';

const myStyles = {
  backgroundImage: `url(${Background})`,
  height: '50vh',
  backgroundSize: 'cover',
};

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
