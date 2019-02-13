import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavDrawer.sass';

const navDrawer = props => {
  let drawerClasses = 'nav-drawer';
  if (props.show) {
    drawerClasses = 'nav-drawer open';
  }

  return (
    <nav className={drawerClasses}>
      <ul>
          <li><NavLink to="/" exact={true} activeClassName='is-active'>Home</NavLink></li>
          <li><NavLink to="/about" activeClassName='is-active'>About</NavLink></li>
          <li><NavLink to="/resume" activeClassName='is-active'>Resume</NavLink></li>
          <li><NavLink to="/portfolio" activeClassName='is-active'>Portfolio</NavLink></li>
          <li><NavLink to="/contact" activeClassName='is-active'>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default navDrawer;
