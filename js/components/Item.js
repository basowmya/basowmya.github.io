/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var React = require('react'),
  bootstrap = require('react-bootstrap'),
  Router = require('react-router'),
  Navigation = Router.Navigation,
  Panel = bootstrap.Panel,
  Thumbnail = bootstrap.Thumbnail,
  Grid = bootstrap.Grid,
  Row = bootstrap.Row,
  Col = bootstrap.Col,
  mui = require('material-ui'),
  Paper = mui.Paper,
  RaisedButton = mui.RaisedButton,
  CategoryGrid = require('./CategoryGrid'),
  _ = require('lodash'),
  data = require('../data');

var ItemView = React.createClass({
  mixins: [Navigation],

  render: function () {
    var self = this,
      item = _.find(data.items, 'id', this.props.params.id),
      category = _.find(data.categories, 'id', item.category),
      href = self.makeHref('gallery', category);

    return (
      <div>
        <Panel header={<h3>{item.name}</h3>}>
          <Grid>
            <Row>
              <Col xs={12} sm={6}>
                <Paper zDepth={3}>
                  <Thumbnail alt={item.name} src={item.images.small[0]} />
                </Paper>
              </Col>
              <Col xs={12} sm={6}>
                <p>{item.description}</p>
                <p>{item.size}</p>
                <p>{item.price}</p>
              </Col>
            </Row>
          </Grid>
        </Panel>
        <Panel header={
          <span>
            <span className='h3'>Similar items in </span>
            <RaisedButton linkButton={true} href={href} label={category.name} primary={true} />
          </span>
        }>
          <CategoryGrid category={category}/>
      </Panel>
    </div>
    );
  }
});

module.exports = ItemView;
