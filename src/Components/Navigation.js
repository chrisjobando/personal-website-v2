import React, { Component } from 'react';
import '../SASS/navigation.sass';

class Navigation extends Component {
  render() {
    const sections = ['Home', 'About', 'Resume', 'Portfolio', 'Contact'];
    const navLinks = sections.map(section => <li><a href={'#' + section }>{ section }</a></li>);
    return (
      <nav>
        <h2 className="logo">{ this.props.logoTitle }</h2>

        <ul>
          {navLinks}
        </ul>
      </nav>

    );
  }
}

export default Navigation;
