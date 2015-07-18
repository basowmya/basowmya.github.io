/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var React = require('react'),
  Router = require('react-router'),
  RouteHandler = Router.RouteHandler,
  Menubar = require('./Menubar'),
  Footer = require('./Footer'),
  mui = require('material-ui'),
  ThemeManager = new mui.Styles.ThemeManager();

var App = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

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
