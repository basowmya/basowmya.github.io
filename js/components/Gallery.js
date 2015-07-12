/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var React = require('react'),
  data = require('../data');

var Gallery = React.createClass({
  render: function () {
    return (
      <div>Gallery: {this.props.params.name}</div>
    );
  }
});

module.exports = Gallery;
