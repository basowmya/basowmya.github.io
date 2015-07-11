/*
 * Copyright (c) 2015, Dheeraj V S. All rights reserved.
 */

var React = require('react'),
  Navbar = require('react-bootstrap').Navbar,
  Nav = require('react-bootstrap').Nav,
  NavItem = require('react-bootstrap').NavItem,
  DropdownButton = require('react-bootstrap').DropdownButton,
  MenuItem = require('react-bootstrap').MenuItem;

var App = React.createClass({
  render: function () {
    return <Navbar brand="Sowmya's Art Gallery">
      <Nav>
        <NavItem eventKey={1} href='#'>Home</NavItem>
        <DropdownButton eventKey={2} title='Gallery'>
          <MenuItem eventKey='1'>Oil Paintings</MenuItem>
          <MenuItem eventKey='2'>Kalamkari</MenuItem>
          <MenuItem eventKey='3'>Zentangles</MenuItem>
          <MenuItem eventKey='4'>Others</MenuItem>
        </DropdownButton>
        <NavItem eventKey={3} href='#'>About</NavItem>
        <NavItem eventKey={4} href='#'>Contact</NavItem>
      </Nav>
    </Navbar>;
  }
});

React.render(<App name="Dheeraj"></App>,
  document.getElementById('app'));
