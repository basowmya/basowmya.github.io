/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var React = require('react'),
  Router = require('react-router'),
  RouteHandler = Router.RouteHandler,
  Menubar = require('./Menubar'),
  Footer = require('./Footer');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Menubar/>
        <RouteHandler/>
        <Footer/>
      </div>
    );
  }
});

module.exports = App;
