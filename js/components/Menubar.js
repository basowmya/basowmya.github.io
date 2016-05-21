/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import {Tabs, Tab} from 'material-ui/Tabs';

// import HomeIcon from 'material-ui/svg-icons/action/home';
// import PhotoIcon from 'material-ui/svg-icons/image/photo';
// import PersonIcon from 'material-ui/svg-icons/social/person';
// import ContactIcon from 'material-ui/svg-icons/communication/contact-mail';

import {categories} from '../data';

export default class Menubar extends React.Component {

  static contextTypes = {
    muiTheme: React.PropTypes.object
  }

  constructor(props, context) {
    super(props, context);
    this.state = { open: false };
  }

  anchorEl = undefined;

  getMenuItems = (props) => categories.map(({id, name}) => (
    <MenuItem
      key={id}
      href={'#/gallery/' + id}
      linkButton
      primaryText={name}
      value={id}
      style={
        props.location.pathname === '/gallery/' + id ?
        { color: this.context.muiTheme.palette.accent1Color } : {}
      }
    />
  ));

  getTabValue = (pathname) => (
    (pathname.lastIndexOf('/gallery/', 0) === 0 ||
      pathname.lastIndexOf('/item/', 0) === 0) ?
    '/gallery/' : pathname
  );

  handleGalleryActive = () => this.setState({ open: true });
  handleRequestClose = () => this.setState({ open: false });

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: getMuiTheme().tabs.backgroundColor
        }}
      >
        <Tabs
          style={{
            maxWidth: '960px',
            width: '100%'
          }}
          value={this.getTabValue(this.props.location.pathname)}
        >
          <Tab
            label="Home"
            value="/"
            href="#/"
            linkButton
          />
          <Tab
            label={"Gallery" + "\u00A0\u25BE"}
            value="/gallery/"
            onActive={this.handleGalleryActive}
            ref={(el) => { this.anchorEl = ReactDOM.findDOMNode(el); }}
          />
          <Tab
            label="About"
            value="/about"
            href="#/about"
            linkButton
          />
          <Tab
            label="Contact"
            value="/contact"
            href="#/contact"
            linkButton
          />
        </Tabs>

        <Popover
          open={this.state.open}
          anchorEl={this.anchorEl}
          onRequestClose={this.handleRequestClose}
          anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'middle', vertical: 'top'}}
          animation={PopoverAnimationVertical}
          style={{transformOrigin: 'left top'}}
        >
          <Menu
            onChange={() => this.setState({open: false})}
          >
            {this.getMenuItems(this.props)}
          </Menu>
        </Popover>
      </div>
    );
  }
}
