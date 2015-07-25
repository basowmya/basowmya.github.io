/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var React = require('react'),
  Router = require('react-router'),
  routes = require('./routes'),
  injectTapEventPlugin = require('react-tap-event-plugin');

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

Router.run(routes, function (Root) {
  React.render(<Root/>, document.body);
});

// Prevent context menu on img elements to prevent saving images
document.body.addEventListener('contextmenu', function (e) {
  if (e.srcElement.nodeName === 'IMG') {
    e.preventDefault();
  }
});
