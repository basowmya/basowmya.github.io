/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var React = require('react'),
  Router = require('react-router'),
  Route = Router.Route,
  DefaultRoute = Router.DefaultRoute,
  App = require('./components/App'),
  Home = require('./components/Home'),
  Gallery = require('./components/Gallery'),
  About = require('./components/About');

var routes = (
  <Route handler={App}>
    <DefaultRoute handler={Home}/>
    <Route name='gallery' path='gallery/:name' handler={Gallery}/>
    <Route name='about' path='about' handler={About}/>
  </Route>
);

module.exports = routes;
