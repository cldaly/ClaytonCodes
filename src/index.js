import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from 'react-router-dom';
import ScrollToTop from './components/_helpers/scroll-to-top';
import history from './components/_helpers/history';

ReactDOM.render(
  <Router history={history}>
    <App />
    <ScrollToTop />
  </Router>
  , document.getElementById('root')
);