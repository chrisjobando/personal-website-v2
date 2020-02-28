// Initial Import
import React  from 'react';
import { NavLink } from 'react-router-dom';

// Styling
import '../SASS/navigation.sass';

// Toolbar Button
import ToggleButton from './NavDrawer/ToggleButton';

// Main HTML
const Navigation = props => (
  <div className="toolbar">
    <nav className="toolbar-nav">
      <div className="toolbar-logo"><NavLink to="/">Christopher Obando</NavLink></div>
      <div className="spacer" />
      <div className="toolbar-nav-items">
        <ul className="navBar">
          <li><NavLink to="/" exact={true} activeClassName='is-active'>Home</NavLink></li>
          <li><NavLink to="/about" activeClassName='is-active'>About</NavLink></li>
          <li><NavLink to="/resume" activeClassName='is-active'>Resume</NavLink></li>
          <li><NavLink to="/portfolio" activeClassName='is-active'>Projects</NavLink></li>
        </ul>
      </div>
      <div className="toggle-button">
        <ToggleButton click={props.drawerClickHandler} />
      </div>
    </nav>
  </div>
);

export default Navigation;
