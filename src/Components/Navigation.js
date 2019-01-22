// Initial Import
import React, { Component } from 'react';

// Styling
import '../SASS/navigation.sass';

// Main HTML
class Navigation extends Component {
  render() {
    // Sections for later refereal
    const sections = ['Home', 'About', 'Resume', 'Portfolio', 'Contact'];

    //  Automates link generation using above sections
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
