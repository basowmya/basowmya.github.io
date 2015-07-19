/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var React = require('react'),
  Router = require('react-router'),
  Link = Router.Link,
  bootstrap = require('react-bootstrap'),
  Thumbnail = bootstrap.Thumbnail,
  Grid = bootstrap.Grid,
  Row = bootstrap.Row,
  Col = bootstrap.Col,
  mui = require('material-ui'),
  Paper = mui.Paper,
  _ = require('lodash'),
  data = require('../data');

var CategoryGrid = React.createClass({
  render: function () {
    var cols = _.map(
        _.filter(data.items, {category: this.props.category.id}),
        function (item, index) {
          return (
            <Col key={index} xs={6} sm={4} md={3} lg={2}
            className={
              index < 2 ? '' :
              index < 3 ? 'hidden-xs' :
              index < 4 ? 'hidden-xs hidden-sm' :
              index < 6 ? 'hidden-xs hidden-sm hidden-md' :
                          'hidden-xs hidden-sm hidden-md hidden-lg'
            }>
              <Paper zDepth={3}>
                <Link to='item' params={item}>
                  <Thumbnail key={item.id} href='#' alt={item.name} src={item.images.small[0]} />
                </Link>
              </Paper>
            </Col>
          );
        }
      );

    return <Grid><Row>{cols}</Row></Grid>;
  }
});

module.exports = CategoryGrid;
