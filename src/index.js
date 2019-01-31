// Initial Imports
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

// Styling
import './SASS/index.sass';

// Components
import Navigation from './Components/Navigation';

// Router Components
import Home from './Components/Home';
import AboutMe from './Components/AboutPage';
import Resume from './Components/ResumePage';
import Portfolio from './Components/PortfolioPage';
import Contact from './Components/ContactPage';

// Misc.
import * as serviceWorker from './serviceWorker';

// Main HTML
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navigation logoTitle="Christopher Obando" />
            <Route path='/' exact component={ Home }/>
            <Route path='/about' exact component={ AboutMe }/>
            <Route path='/resume' exact component={ Resume }/>
            <Route path='/portfolio' exact component={ Portfolio }/>
            <Route path='/contact' exact component={ Contact }/>
          </div>
        </Router>
      </div>
    );
  }
}

// Renders app
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
