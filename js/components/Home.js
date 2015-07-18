/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var React = require('react'),
  _ = require('lodash'),
  bootstrap = require('react-bootstrap'),
  Button = bootstrap.Button,
  Panel = bootstrap.Panel,
  Thumbnail = bootstrap.Thumbnail,
  Grid = bootstrap.Grid,
  Row = bootstrap.Row,
  Col = bootstrap.Col,
  mui = require('material-ui'),
  Paper = mui.Paper,
  RaisedButton = mui.RaisedButton,
  FlatButton = mui.FlatButton,
  data = require('../data');

var Carousel = React.createClass({
  render: function () {
    var cols = _.map(
        _.filter(data.items, {category: this.props.category.id}),
        function (item, index) {
          return (
            <Col xs={6} sm={4} md={3} lg={2}
            className={
              index < 2 ? '' :
              index < 3 ? 'hidden-xs' :
              index < 4 ? 'hidden-xs hidden-sm' :
              index < 6 ? 'hidden-xs hidden-sm hidden-md' :
                          'hidden-xs hidden-sm hidden-md hidden-lg'
            }>
              <Paper zDepth={3}>
                <Thumbnail key={item.id} href={'#'} alt={item.name} src={item.images.small[0]} />
              </Paper>
            </Col>
          );
        }
      );

    return <Grid><Row>{cols}</Row></Grid>;
  }
});

var Categories = React.createClass({
  render: function () {
    var panels = data.categories.map(function (category, index) {
      return (
        <Panel key={category.id} header={
          <div>
            <RaisedButton label={category.name} primary={true} />
            <FlatButton className={'pull-right'} label={'See more of ' + category.name} primary={true} />
          </div>
        }>
          <Carousel category={category}/>
        </Panel>
      );
    });
    return (
      <div>{panels}</div>
    );
  }
});

var Home = React.createClass({
  render: function () {
    return <Categories/>;
  }
});

module.exports = Home;
