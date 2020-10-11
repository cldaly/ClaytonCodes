import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/scroll-to-top';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <ScrollToTop />
  </BrowserRouter>
  , document.getElementById('root')
);