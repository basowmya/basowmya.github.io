/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var React = require('react'),
  Router = require('react-router'),
  routes = require('./routes');

Router.run(routes, function (Root) {
  React.render(<Root/>, document.body);
});
