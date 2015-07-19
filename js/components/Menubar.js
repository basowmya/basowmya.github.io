/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var React = require('react'),
  Navigation = require('react-router').Navigation,
  Navbar = require('react-bootstrap').Navbar,
  Nav = require('react-bootstrap').Nav,
  NavItem = require('react-bootstrap').NavItem,
  DropdownButton = require('react-bootstrap').DropdownButton,
  MenuItem = require('react-bootstrap').MenuItem,
  data = require('../data');

var Menubar = React.createClass({
  mixins: [Navigation],

  render: function () {
    var self = this;

    function handleSelect(key) {
      self.transitionTo('/gallery/' + key);
    }

    return (
      <Navbar brand="Sowmya's Art Gallery">
        <Nav>
          <NavItem eventKey={1} href={'#'}>Home</NavItem>
          <DropdownButton eventKey={2} title='Gallery' onSelect={handleSelect}>
            {
              data.categories.map(function (category) {
                return (
                  <MenuItem key={category.id} eventKey={category.name}>
                    {category.name}
                  </MenuItem>
                );
              })
            }
          </DropdownButton>
          <NavItem eventKey={3} href='#about'>About</NavItem>
          <NavItem eventKey={4} href='#'>Contact</NavItem>
        </Nav>
      </Navbar>
    );
  }
});

module.exports = Menubar;
