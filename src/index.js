import React from 'react';
import ReactDOM from 'react-dom';
import './SASS/index.sass';

//import App from './App';
import Navigation from './Components/Navigation';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Navigation />, document.getElementById('root'));
serviceWorker.unregister();
