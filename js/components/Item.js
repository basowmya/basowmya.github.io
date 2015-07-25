/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var React = require('react'),
  State = require('react-router').State,
  bootstrap = require('react-bootstrap'),
  Panel = bootstrap.Panel,
  Modal = bootstrap.Modal,
  Thumbnail = bootstrap.Thumbnail,
  Grid = bootstrap.Grid,
  Row = bootstrap.Row,
  Col = bootstrap.Col,
  ButtonGroup = bootstrap.ButtonGroup,
  mui = require('material-ui'),
  Paper = mui.Paper,
  FlatButton = mui.FlatButton,
  Colors = mui.Styles.Colors,
  Zoomin = require('material-ui/lib/svg-icons/action/zoom-in'),
  Email = require('material-ui/lib/svg-icons/communication/email'),
  CategoryButton = require('./CategoryButton'),
  ItemGrid = require('./ItemGrid'),
  currency = require('../currency'),
  _ = require('lodash'),
  data = require('../data');

var ItemView = React.createClass({

  mixins: [State],

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
        .sample(4).value();

    function getItemPath() {
      var loc = window.location;
      return loc.href.replace(loc.hash, '') + loc.hash;
    }

    function getShareText() {
      return "Take a look at this item from Sowmya's Art Gallery: " + getItemPath();
    }

    function getShareSubject() {
      return "Sowmya's Art Gallery";
    }

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
                <p className='item-description'>{item.description}</p>
                <p className='item-size'>
                  {item.size[0]} x {item.size[1]} inches ({(item.size[0] * 2.54).toFixed(1)} x {(item.size[1] * 2.54).toFixed(1)} cm)
                </p>
                <p className='item-price'>{currency(item.price)}</p>
                { item.outOfStock ? <p>Out of stock; Contact artist to place an order.</p> : ''}

                <ButtonGroup>
                <FlatButton label='WhatsApp' linkButton={true}
                href={'whatsapp://send?text=' + getShareText()}
                data-action='share/whatsapp/share' style={styles.ShareButton}>
                  <img src='img/whatsapp.png' alt='WhatsApp' width='32px' height='32px' style={styles.whatsAppImg}/>
                </FlatButton>

                <FlatButton label='Email' linkButton={true}
                href={'mailto:?body=' + getShareText() +'&subject=' + getShareSubject()} target='_blank' style={styles.ShareButton}>
                  <Email className='vertical-align' style={styles.emailIcon} color={Colors.blue500} />
                </FlatButton>
                </ButtonGroup>
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
