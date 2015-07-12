/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var React = require('react'),
  Grid = require('react-bootstrap').Grid,
  Row = require('react-bootstrap').Row,
  Col = require('react-bootstrap').Col,
  Thumbnail = require('react-bootstrap').Thumbnail,
  data = require('../data');

var Categories = React.createClass({
  render: function () {
    var cols = data.categories.map(function (category, index) {
      var col = [
        <Col xs={6} sm={4}>
          <Thumbnail href='#' alt={category.name} src={category.image} />
        </Col>
      ];

      if ((index % 2) !== 0) {
        col.push(<div className="clearfix visible-xs-block"></div>);
      }
      if (((index + 1) % 3) === 0) {
        col.push(<div className="clearfix visible-sm-block"></div>);
      }

      return col;
    });

    return <Grid><Row>{cols}</Row></Grid>;
  }
});

var Home = React.createClass({
  render: function () {
    return <Categories/>;
  }
});

module.exports = Home;
