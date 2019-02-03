// Initial Import
import React  from 'react';
import { Link } from 'react-router-dom';

// Styling
import '../SASS/navigation.sass';

// Toolbar Button
import ToggleButton from './NavDrawer/ToggleButton';

// Main HTML
const Navigation = props => (
  <div className="toolbar">
    <nav className="toolbar-nav">
      <div className="toggle-button">
        <ToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar-logo"><Link to="/">Christopher Obando</Link></div>
      <div className="spacer" />
      <div className="toolbar-nav-items">
        <ul className="navBar">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navigation;
