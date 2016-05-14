/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import React from 'react';
import data from '../data';

// import Grid from 'react-bootstrap/lib/Grid';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import Panel from 'react-bootstrap/lib/Panel';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardText, CardTitle} from 'material-ui/Card';
import Paper from 'material-ui/Paper';

// import ItemThumbnail from './ItemThumbnail';

// bootstrap = require('react-bootstrap'),
// Modal = bootstrap.Modal,
// ButtonToolbar = bootstrap.ButtonToolbar,
// ButtonGroup = bootstrap.ButtonGroup,
// mui = require('material-ui'),
// Toolbar = mui.Toolbar,
// ToolbarGroup = mui.ToolbarGroup,
// ToolbarTitle = mui.ToolbarTitle,
// IconButton = mui.IconButton,
// Colors = mui.Styles.Colors,
// Snackbar = mui.Snackbar,
// AddShoppingCart = require('material-ui/lib/svg-icons/action/add-shopping-cart'),
// Email = require('material-ui/lib/svg-icons/communication/email'),
// CategoryButton = require('./CategoryButton'),
// ItemGrid = require('./ItemGrid'),
// ItemThumbnail = require('./ItemThumbnail'),
// currency = require('../currency'),
// _ = require('lodash'),

export default class Item extends React.Component {

  // imageIndex: 0;
  //
  // getInitialState: function () {
  //   return { showModal: false };
  // },
  //
  // closeModal: function () {
  //   this.setState({ showModal: false });
  // },
  //
  // openModal: function () {
  //   this.setState({ showModal: true });
  // },
  //
  // handleBuy: function () {
  //   this.refs.snackbar.show();
  // },

  render() {
    // let styles = {
    //   shareButton: {
    //     textTransform: 'none'
    //   }
    // };

    let item = data.items.filter(({id}) => id === this.props.params.id)[0];

    // category = _.find(data.categories, 'id', item.category),
    // similarItems = _.chain(data.items)
    //   .filter(function (obj) {
    //     return obj.category === item.category && obj.id !== item.id;
    //   })
    //   .sample(4).value(),
    //
    let size = [
      item.size[0], ' x ', item.size[1], ' inches (',
      Math.round(item.size[0] * 2.54), ' x ',
      Math.round(item.size[1] * 2.54),' cm)'
    ].join('');

    let itemPath = (() => {
      var loc = window.location;
      return loc.href.replace(loc.hash, '') + loc.hash;
    })();

    let shareText = "Take a look at this item from Sowmya's Art Gallery: " + itemPath;
    let shareSubject = "Sowmya's Art Gallery";

    return (
        <Grid>
          <Row>
            <Col xs={12} sm={6} style={{textAlign: 'center'}}>
              {/*<ItemThumbnail
                item={item}
                key={item.id}
              />*/}
              <Paper zDepth={3} style={{display: 'inline-block', marginBottom: '20px', marginTop: '20px'}}>
                <Card>
                  <CardMedia>
                    <img src={item.images.small[0]} />
                  </CardMedia>
                  <CardTitle subtitle={item.name} />
                </Card>
              </Paper>
            </Col>
            {/*
              {onTouchTap={this.openModal}
              onChange={function (index) { this.imageIndex = index; }.bind(this)} }
          */}
            <Col xs={12} sm={6}>
            <Card>
              <CardHeader
                title={item.name}
                subtitle={item.description}
              />

              <CardText>
                <p>{size}</p>
                { item.outOfStock ? <p>Out of stock (available as commissioned work)</p> : ''}
              </CardText>

              <CardActions>
                <RaisedButton
                  label='Enquire'
                  primary={true}
                />
              </CardActions>
            </Card>
            {/*
              <ButtonToolbar>
                <ButtonGroup>
                </ButtonGroup>
                <ButtonGroup>

                  <FlatButton label='Email' linkButton={true} primary={true}
                  target='_blank' tooltip='Email' tooltipPosition='top-center'
                  href={'mailto:?body=' + shareText +'&subject=' + shareSubject}
                  style={styles.shareButton}>
                    <Email color={Colors.pinkA200} className='vertical-align'/>
                  </FlatButton>
                </ButtonGroup>
              </ButtonToolbar>
              */}
            </Col>
          </Row>
        </Grid>
    );
  }
}

// {/*<Panel
//   header={
//     <div>
//       <span className='h4'>Similar items in </span>
//       <CategoryButton category={category} />
//     </div>
//   }
// >
//   <ItemGrid items={similarItems} showDetails={true} />
// </Panel>
//
// <Modal show={this.state.showModal} onHide={this.closeModal}>
//   <img alt={item.name} src={item.images.large[this.imageIndex]}
//   className='center-block img-responsive' onTouchTap={this.closeModal} />
// </Modal>
//
// <Snackbar ref='snackbar' message='This feature is not yet implemented.'
// autoHideDuration={2000} />*/}


// <p className='item-heading'>{item.name}</p>
// <p>{item.description}</p>
// <p>{size}</p>
// {/*<p className='item-price'>{currency(item.price)}</p>*/}
// { item.outOfStock ? <p>Out of stock<br/>Available as commissioned work</p> : ''}
// <RaisedButton label='Enquire' primary={true}>
//   {/*<AddShoppingCart color={Colors.white} className='vertical-align'/>*/}
// </RaisedButton>
// <FlatButton
//   label='WhatsApp'
//   linkButton={true}
//   primary={true}
//   href={'whatsapp://send?text=' + shareText}
// >
//   <img
//     src='img/whatsapp.png' alt='WhatsApp'
//     width='24px' height='24px'
//   />
// </FlatButton>
