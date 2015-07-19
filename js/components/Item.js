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
      href = self.makeHref('gallery', category),
      similarItems = _.sample(_.filter(data.items, function (obj) {
        return obj.category === item.category && obj.id !== item.id;
      }), 4);

    return (
      <div>
        <Panel header={<h3>{item.name}</h3>}>
          <Grid>
            <Row>
              <Col xs={12} sm={6}>
                <Paper zDepth={3}>
                  <Thumbnail alt={item.name} src={item.images.small[0]}>
                    <p>Click for a larger view</p>
                  </Thumbnail>
                </Paper>
              </Col>
              <Col xs={12} sm={6}>
                <p>{item.description}</p>
                <p>{item.size[0]} x {item.size[1]} inches ({(item.size[0] * 2.54).toFixed(1)} x {(item.size[1] * 2.54).toFixed(1)} cm)</p>
                <p>{item.price}</p>
                { item.outOfStock ? <p>Currently out of stock; Contact artist to place an order.</p> : ''}
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
          <CategoryGrid items={similarItems}/>
      </Panel>
    </div>
    );
  }
});

module.exports = ItemView;
