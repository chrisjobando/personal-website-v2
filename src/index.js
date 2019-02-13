// Initial Imports
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTopRoute from './Components/ScrollToTopRoute';

// Styling
import './SASS/index.sass';

// Components
import Navigation from './Components/Navigation';
import NavDrawer from './Components/NavDrawer/NavDrawer';
import Backdrop from './Components/Backdrop/Backdrop';

// Router Components
import Home from './Components/Home';
import AboutMe from './Components/AboutPage';
import Resume from './Components/ResumePage';
import Portfolio from './Components/PortfolioPage';
import Contact from './Components/ContactPage';
import GameBoy from './Components/ShadowKnightPage';
import SpotifyApp from './Components/SpotifyAppPage';

// Misc Import
import * as serviceWorker from './serviceWorker';

// Main HTML
class App extends Component {
  state = {
    navDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { navDrawerOpen: !prevState.navDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ navDrawerOpen: false });
  };

  render() {
    let backdrop;
    if (this.state.navDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div>
        <Router>
          <div style={{ height: '100%' }}>
            <Navigation drawerClickHandler={this.drawerToggleClickHandler} />
            <NavDrawer show={this.state.navDrawerOpen} />
            {backdrop}
            <ScrollToTopRoute path='/' exact component={ Home }/>
            <ScrollToTopRoute path='/about' exact component={ AboutMe }/>
            <ScrollToTopRoute path='/resume' exact component={ Resume }/>
            <ScrollToTopRoute path='/portfolio' exact component={ Portfolio }/>
            <ScrollToTopRoute path='/contact' exact component={ Contact }/>
            <ScrollToTopRoute path='/shadowKnightGBA' exact component={ GameBoy }/>
            <ScrollToTopRoute path='/spotifyApp' exact component={ SpotifyApp }/>
          </div>
        </Router>
      </div>
    );
  }
}

// Renders app
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
