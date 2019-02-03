import React from 'react';
import { Link } from 'react-router-dom';

import './NavDrawer.sass';

const navDrawer = props => {
  let drawerClasses = 'nav-drawer';
  if (props.show) {
    drawerClasses = 'nav-drawer open';
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default navDrawer;
