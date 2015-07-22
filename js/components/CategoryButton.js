/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var React = require('react'),
  Router = require('react-router'),
  Navigation = Router.Navigation,
  mui = require('material-ui'),
  Paper = mui.Paper,
  RaisedButton = mui.RaisedButton;

var CategoryButton = React.createClass({
  mixins: [Navigation],

  render: function () {
    var href = this.makeHref('gallery', this.props.category);

    return <RaisedButton className='vertical-align' linkButton={true} href={href} label={this.props.category.name + '\u00A0\u00A0\u25B6'} primary={true} />;
  }
});

module.exports = CategoryButton;
