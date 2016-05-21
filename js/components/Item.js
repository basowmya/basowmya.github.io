/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import React from 'react';
import {items, categories} from '../data';
import sampleSize from 'lodash/sampleSize';
import ItemGrid from './ItemGrid';
import Contact from './Contact';

import Dialog from 'material-ui/Dialog';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton/IconButton';
import MenuItem from 'material-ui/MenuItem';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import ShareIcon from 'material-ui/svg-icons/social/share';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import {Popover} from 'material-ui/Popover';
// import Zoomin from 'material-ui/svg-icons/action/zoom-in';
// import {grey500} from 'material-ui/styles/colors';

export default class Item extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      openEnquire: false,
      openLargeImage: false,
      openShare: false,
      shareAnchorEl: null
    };
  }

  handleOpenEnquire = (event) => {
    event.preventDefault();
    this.setState({openEnquire: true})
  };

  handleCloseEnquire = () => this.setState({openEnquire: false});

  handleOpenLargeImage = (event) => {
    event.preventDefault();
    this.setState({openLargeImage: true})
  };

  handleCloseLargeImage = () => this.setState({openLargeImage: false});

  handleOpenShare = (event) => {
    event.preventDefault();

    this.setState({
      openShare: true,
      shareAnchorEl: event.currentTarget
    });
  };

  handleCloseShare = () => this.setState({openShare: false});

  render = () => {
    const styles = {
      paper: {
        marginLeft: 'auto',
        marginRight: 'auto'
      }
      // shareButton: {
      //   textTransform: 'none'
      // }
    };

    const item = items.filter(({id}) => id === this.props.params.id)[0];

    if (!this.moreItems || this.itemId !== item.id) {
      this.itemId = item.id;
      this.moreItems = sampleSize(
        items.filter(
          ({id, category}) => category === item.category && id !== item.id
        ),
        4
      );
    }

    const size = `${item.size[0]} x ${item.size[1]} inches ` +
      `(${Math.round(item.size[0] * 2.54)} x ${Math.round(item.size[1] * 2.54)} cm)`;

    const itemPath = (() => {
      const loc = window.location;
      return `${loc.href.replace(loc.hash, '')}${loc.hash}`;
    })();

    const shareText = `Take a look at this item from Sowmya's Art Gallery: ${itemPath}`;
    const shareSubject = "Sowmya's Art Gallery";

    return (
      <div>
        <div
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            alignContent: 'flex-start',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              display: 'flex',
              boxSizing: 'border-box',
              padding: '20px'
            }}
          >
            <Paper
              zDepth={3}
              style={styles.paper}
            >
              <Card onTouchTap={this.handleOpenLargeImage}>
                <CardMedia>
                  <img src={item.images.small[0]} />
                </CardMedia>
                {/*<CardText
                  style={{
                    display: 'flex',
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '12px 16px'
                  }}
                >
                  <Zoomin className='vertical-align' color={grey500}/>
                  <span>Click for a larger view</span>
                </CardText>*/}
              </Card>
            </Paper>
          </div>

          <div
            style={{
              display: 'flex',
              flexGrow: 0,
              padding: '20px'
            }}
          >
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
                  onTouchTap={this.handleOpenEnquire}
                />
                <RaisedButton
                  label='Share'
                  icon={<ShareIcon />}
                  onTouchTap={this.handleOpenShare}
                />
              </CardActions>
            </Card>
          </div>
        </div>

        <div>
          {`More items in ${categories.filter(({id}) => id === item.category)[0].name}`}
        </div>

        <ItemGrid
          items={this.moreItems}
          singleRow={true}
          showDetails={true}
        />

        <Popover
          open={this.state.openShare}
          anchorEl={this.state.shareAnchorEl}
          onRequestClose={this.handleCloseShare}
        >
          <MenuItem
            primaryText='Email'
            leftIcon={<EmailIcon />}
            linkButton
            href={`mailto:?body=${shareText}&subject=${shareSubject}`}
            target='_blank'
          />
          <MenuItem
            primaryText='WhatsApp'
            leftIcon={<EmailIcon />}
            linkButton
            href={`whatsapp://send?text=${shareText}`}
          />
        </Popover>

        <Dialog
          autoScrollBodyContent={true}
          open={this.state.openEnquire}
          onRequestClose={this.handleCloseEnquire}
        >
          <Contact />
        </Dialog>

        <Dialog
          open={this.state.openLargeImage}
          onRequestClose={this.handleCloseLargeImage}
          bodyStyle={{
            padding: 0,
            margin: 0
          }}
          ContentStyle={{
            width: '100%'
          }}
        >
          <img src={item.images.large[0]}
          style={{
            maxWidth: '100%',
            maxHeight: '100%'
          }}
          />
        </Dialog>
      </div>
    );
  }
}
