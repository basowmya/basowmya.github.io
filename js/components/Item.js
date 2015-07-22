/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var React = require('react'),
  bootstrap = require('react-bootstrap'),
  Panel = bootstrap.Panel,
  Modal = bootstrap.Modal,
  Thumbnail = bootstrap.Thumbnail,
  Grid = bootstrap.Grid,
  Row = bootstrap.Row,
  Col = bootstrap.Col,
  mui = require('material-ui'),
  Paper = mui.Paper,
  Colors = mui.Styles.Colors,
  Zoomin = require('material-ui/lib/svg-icons/action/zoom-in'),
  CategoryButton = require('./CategoryButton'),
  ItemGrid = require('./ItemGrid'),
  currency = require('../currency'),
  _ = require('lodash'),
  data = require('../data');

var ItemView = React.createClass({
  getInitialState: function () {
    return { showModal: false };
  },

  closeModal: function () {
    this.setState({ showModal: false });
  },

  openModal: function () {
    this.setState({ showModal: true });
  },

  render: function () {
    var item = _.find(data.items, 'id', this.props.params.id),
      category = _.find(data.categories, 'id', item.category),
      similarItems = _.chain(data.items)
        .filter(function (obj) {
          return obj.category === item.category && obj.id !== item.id;
        })
        .sample(4).value();

    return (
      <div>
        <Panel header={<h3>{item.name}</h3>}>
          <Grid>
            <Row>
              <Col xs={12} sm={6}>
                <Paper zDepth={3} onClick={this.openModal}>
                  <Thumbnail alt={item.name} src={item.images.small[0]}>
                    <div>
                      <Zoomin className='vertical-align' color={Colors.grey500}/>
                      <span>Click for a larger view</span>
                    </div>
                  </Thumbnail>
                </Paper>
              </Col>
              <Col xs={12} sm={6}>
                <p className='item-description'>{item.description}</p>
                <p className='item-size'>{item.size[0]} x {item.size[1]} inches ({(item.size[0] * 2.54).toFixed(1)} x {(item.size[1] * 2.54).toFixed(1)} cm)</p>
                <p className='item-price'>{currency(item.price)}</p>
                { item.outOfStock ? <p>Currently out of stock; Contact artist to place an order.</p> : ''}
              </Col>
            </Row>
          </Grid>
        </Panel>

        <Panel header={
          <div>
            <span className='h4'>Similar items in </span>
            <CategoryButton category={category} />
          </div>
        }>
          <ItemGrid items={similarItems} showDetails={true} />
      </Panel>

      <Modal show={this.state.showModal} onHide={this.closeModal}>
        <div onClick={this.closeModal}>
          <img alt={item.name} src={item.images.large[0]} className='center-block' />
        </div>
      </Modal>
    </div>
    );
  }
});

module.exports = ItemView;
