/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import React from 'react';
import {items, categories} from '../data';
import sampleSize from 'lodash/sampleSize';
import CategoryButton from './CategoryButton';
import Contact from './Contact';
import ItemGrid from './ItemGrid';

import Dialog from 'material-ui/Dialog';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton/IconButton';
import MenuItem from 'material-ui/MenuItem';
import EmailIcon from 'material-ui/svg-icons/communication/mail-outline';
import WhatsAppIcon from '../../img/whatsapp';
import WarningIcon from 'material-ui/svg-icons/alert/warning';
import ShareIcon from 'material-ui/svg-icons/social/share';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardMedia, CardText, CardTitle} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import {Popover} from 'material-ui/Popover';

export default class Item extends React.Component {

  static contextTypes = {
    muiTheme: React.PropTypes.object
  }

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
    this.setState({openEnquire: true});
  };

  handleCloseEnquire = () => this.setState({openEnquire: false});

  handleOpenLargeImage = (event) => {
    event.preventDefault();
    this.setState({openLargeImage: true});
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
      center: {
        marginLeft: 'auto',
        marginRight: 'auto'
      }
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
    const shareSubject = 'Sowmya\'s Art Gallery';

    return (
      <div>
        <div
          style={{
            boxSizing: 'border-box',
            boxShadow: this.context.muiTheme.palette.boxShadow,
            display: 'flex',
            alignContent: 'flex-start',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            justifyContent: 'center',
            paddingBottom: '16px'
          }}
        >
          <div
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flex: '0 1 auto',
              padding: '8px 24px 20px'
            }}
          >
              <Card
                onTouchTap={this.handleOpenLargeImage}
                style={{
                  cursor: 'pointer',
                  ...styles.center
                }}
                zDepth={3}
              >
                <CardMedia>
                  <img
                    src={item.images.small[0]}
                    alt={item.name}
                  />
                </CardMedia>
              </Card>
          </div>

          <div
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flex: '1 1 320px',
              padding: '8px 24px 24px'
            }}
          >
            <Card
              style={styles.center}
            >
              <CardTitle
                title={item.name}
                subtitle={item.media}
              />
              <CardText
                style={{
                  paddingTop: 0
                }}
              >
                <span
                  style={{
                    lineHeight: 1.5
                  }}
                >
                {item.description}
                </span>
                <p>{size}</p>
                { item.outOfStock &&
                    <p>
                      <WarningIcon
                        style={{
                          width: '16px',
                          height: '16px',
                          marginRight: '8px',
                          verticalAlign: 'middle'
                        }}
                      />
                      Out of stock {item.unavailable ? '' : '(available as commissioned work)'}
                    </p>
                }
              </CardText>
              <CardActions>
                <RaisedButton
                  label='Enquire'
                  primary={true}
                  linkButton={true}
                  href='#/contact'
                />
                <FlatButton
                  label='Share'
                  icon={<ShareIcon />}
                  onTouchTap={this.handleOpenShare}
                />
              </CardActions>
            </Card>
          </div>
        </div>

        <div
        style={{
          marginTop: '24px'
        }}
        >
          <span
            style={{
              color: this.context.muiTheme.palette.primary1Color,
              fontSize: '20px',
              marginRight: '16px'
            }}
          >
            More items in
          </span>
          <CategoryButton category={categories.filter(({id}) => id === item.category)[0]} />
        </div>

        <ItemGrid
          items={this.moreItems}
          singleRow={true}
          showDetails={true}
          style={{
            boxShadow: this.context.muiTheme.palette.boxShadow
          }}
        />

        <Popover
          open={this.state.openShare}
          anchorEl={this.state.shareAnchorEl}
          onRequestClose={this.handleCloseShare}
          style={{
            backgroundColor: this.context.muiTheme.palette.accent2Color
          }}
        >
          <MenuItem
            primaryText='Email'
            leftIcon={ <EmailIcon
              style={{ fill: this.context.muiTheme.palette.primary1Color }}
            /> }
            linkButton
            href={`mailto:?body=${shareText}&subject=${shareSubject}`}
            target='_blank'
            innerDivStyle={{
              paddingLeft: '56px'
            }}
          />
          <MenuItem
            primaryText='WhatsApp'
            leftIcon={ <WhatsAppIcon
              style={{ fill: this.context.muiTheme.palette.primary1Color }}
            /> }
            linkButton
            href={`whatsapp://send?text=${shareText}`}
            innerDivStyle={{
              paddingLeft: '56px'
            }}
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
            padding: 0
          }}
          contentClassName="img-dialog-content"
        >
          <div
            onTouchTap={this.handleCloseLargeImage}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              maxHeight: 'inherit'
            }}
          >
            <img
              src={item.images.large[0]}
              alt={item.name}
              style={{
                maxWidth: '100%',
                maxHeight: 'inherit'
              }}
            />
          </div>
        </Dialog>
      </div>
    );
  }
}
