/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var React = require('react'),
  Router = require('react-router'),
  Navbar = require('react-bootstrap').Navbar,
  Nav = require('react-bootstrap').Nav,
  NavItem = require('react-bootstrap').NavItem,
  DropdownButton = require('react-bootstrap').DropdownButton,
  MenuItem = require('react-bootstrap').MenuItem,
  _ = require('lodash'),
  data = require('../data');

var Menubar = React.createClass({
  mixins: [Router.Navigation, Router.State],

  render: function () {
    var self = this;

    var galleryItems = _.chain(data.categories).rest()
      .concat(data.categories[0]).value()
      .map(function (category) {
        var href = self.makeHref('gallery', category);
        return (
          <MenuItem key={category.id} eventKey={category.id} active={false} >
            {category.name}
          </MenuItem>
        );
      });

    function handleSelect(key) {
      self.transitionTo('gallery', {id: key});
    }

    return (
      <Navbar brand="Sowmya's Art Gallery">
        <Nav>
          <NavItem eventKey={1} href={'#'} active={false}>Home</NavItem>
          <DropdownButton eventKey={2} title='Gallery' onSelect={handleSelect} active={false} >
            {galleryItems}
          </DropdownButton>
          <NavItem eventKey={3} href='#about' active={false}>About</NavItem>
          <NavItem eventKey={4} href='#contact' active={false}>Contact</NavItem>
        </Nav>
      </Navbar>
    );
  }
});

module.exports = Menubar;
