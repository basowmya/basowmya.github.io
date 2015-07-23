/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var React = require('react'),
  Router = require('react-router'),
  Navigation = Router.Navigation,
  RaisedButton = require('material-ui').RaisedButton;

var CategoryButton = React.createClass({
  mixins: [Navigation],

  render: function () {
    var href = this.makeHref('gallery', this.props.category);

    return <RaisedButton className='vertical-align' linkButton={true} href={href} label={this.props.category.name + '\u00A0\u00A0\u25BA'} primary={true} />;
  }
});

module.exports = CategoryButton;
