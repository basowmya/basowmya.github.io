/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var React = require('react'),
  ItemGrid = require('./ItemGrid'),
  _ = require('lodash'),
  data = require('../data');

var Gallery = React.createClass({
  render: function () {
    var items = _.filter(data.items, {category: this.props.params.id});
    return <ItemGrid items={items} showDetails={true} />;
  }
});

module.exports = Gallery;
