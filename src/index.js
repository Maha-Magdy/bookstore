/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Books from './components/Books.js';
import Categories from './components/Categories.js';

// stylesheet
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route path="/Categories">
          <Categories />
        </Route>
        <Route path="/">
          <Books />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
