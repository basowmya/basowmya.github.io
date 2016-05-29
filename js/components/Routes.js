/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import React from 'react';
import {
  Router, Route, hashHistory, IndexRoute, applyRouterMiddleware
}
from 'react-router';
import useScroll from 'react-router-scroll';
import ga from 'react-ga';

import App from './App';
import Home from './Home';
import Gallery from './Gallery';
import Item from './Item';
import About from './About';
import Contact from './Contact';

ga.initialize('UA-78467354-1');

function logPageView() {
  const hash = window.location.hash;
  ga.pageview(hash.substr(0, hash.indexOf('?')));
}

export default (
  <Router
    history={hashHistory}
    onUpdate={logPageView}
    render={applyRouterMiddleware(useScroll())}
  >
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path='gallery/:id' component={Gallery} />
      <Route path='item/:id' component={Item} />
      <Route path='about' component={About}/>
      <Route path='contact' component={Contact}/>
    </Route>
  </Router>
);
