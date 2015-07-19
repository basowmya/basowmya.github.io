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
  Item = require('./components/Item'),
  About = require('./components/About'),
  Contact = require('./components/Contact');

var routes = (
  <Route handler={App}>
    <DefaultRoute handler={Home}/>
    <Route name='item' path='item/:id' handler={Item}/>
    <Route name='gallery' path='gallery/:id' handler={Gallery}/>
    <Route name='about' path='about' handler={About}/>
    <Route name='contact' path='contact' handler={Contact}/>
  </Route>
);

module.exports = routes;
