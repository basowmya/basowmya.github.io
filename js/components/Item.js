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
  Toolbar = mui.Toolbar,
  ToolbarGroup = mui.ToolbarGroup,
  ToolbarTitle = mui.ToolbarTitle,
  IconButton = mui.IconButton,
  Colors = mui.Styles.Colors,
  Zoomin = require('material-ui/lib/svg-icons/action/zoom-in'),
  Email = require('material-ui/lib/svg-icons/communication/email'),
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
    var styles = {
        ShareButton: {
          // backgroundColor: '#4bbe51',
          // color: 'white',
          textTransform: 'none'
        },
        whatsAppImg: {
          'float': 'left',
          marginLeft: '5px',
          marginTop: '1px'
        },
        emailIcon: {
          'float': 'left',
          verticalAlign: 'middle'
        }
      },

      item = _.find(data.items, 'id', this.props.params.id),
      category = _.find(data.categories, 'id', item.category),
      similarItems = _.chain(data.items)
        .filter(function (obj) {
          return obj.category === item.category && obj.id !== item.id;
        })
        .sample(4).value(),

      size = [
        item.size[0], ' x ', item.size[1], ' inches (',
        Math.round(item.size[0] * 2.54), ' x ',
        Math.round(item.size[1] * 2.54),' cm)'
      ].join(''),

      itemPath = (function() {
        var loc = window.location;
        return loc.href.replace(loc.hash, '') + loc.hash;
      }()),

      shareText = "Take a look at this item from Sowmya's Art Gallery: " + itemPath,
      shareSubject = "Sowmya's Art Gallery";

    return (
      <div>
        <Panel>
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
                <p className='item-heading'>{item.name}</p>
                <p>{item.description}</p>
                <p>{size}</p>
                <p className='item-price'>{currency(item.price)}</p>
                { item.outOfStock ? <p>Available as commissioned work</p> : ''}

                <Toolbar style={{display: 'inline-block', width: 'auto', height: '48px'}}>
                  <ToolbarGroup>
                    <ToolbarTitle className='vertical-align' text='Share via:'
                    style={{fontSize: '14px', lineHeight: '48px'}} />

                    <IconButton href={'whatsapp://send?text=' + shareText}
                    linkButton={true} tooltip='WhatsApp' tooltipPosition='top-center'>
                      <img className='vertical-align' src='img/whatsapp.png' alt='WhatsApp' width='24px' height='24px'/>
                    </IconButton>

                    <IconButton linkButton={true} target='_blank'
                    href={'mailto:?body=' + shareText +'&subject=' + shareSubject}
                    tooltip='Email' tooltipPosition='top-center'>
                      <Email className='vertical-align' color={Colors.blue500} />
                    </IconButton>
                  </ToolbarGroup>
                </Toolbar>
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
        <img alt={item.name} src={item.images.large[0]}
        className='center-block img-responsive' onClick={this.closeModal} />
      </Modal>
    </div>
    );
  }
});

module.exports = ItemView;
