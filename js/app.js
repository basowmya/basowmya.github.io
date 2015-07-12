/*
 * Copyright (c) 2015, Dheeraj V S. All rights reserved.
 */

var React = require('react'),
  Router = require('react-router'),
  Route = Router.Route,
  RouteHandler = Router.RouteHandler,
  DefaultRoute = Router.DefaultRoute,
  Navbar = require('react-bootstrap').Navbar,
  Nav = require('react-bootstrap').Nav,
  NavItem = require('react-bootstrap').NavItem,
  DropdownButton = require('react-bootstrap').DropdownButton,
  MenuItem = require('react-bootstrap').MenuItem,
  Grid = require('react-bootstrap').Grid,
  Row = require('react-bootstrap').Row,
  Col = require('react-bootstrap').Col,
  Thumbnail = require('react-bootstrap').Thumbnail,
  data = require('./data');

var Navigation = React.createClass({
  render: function () {
    return (
      <Navbar brand="Sowmya's Art Gallery">
        <Nav>
          <NavItem eventKey={1} href='#'>Home</NavItem>
          <DropdownButton eventKey={2} title='Gallery'>
            {
              data.categories.map(function (category, index) {
                return (
                  <MenuItem key={category.id} eventKey={index + 1}>
                    {category.name}
                  </MenuItem>
                );
              })
            }
          </DropdownButton>
          <NavItem eventKey={3} href='#'>About</NavItem>
          <NavItem eventKey={4} href='#'>Contact</NavItem>
        </Nav>
      </Navbar>
    );
  }
});

var Footer = React.createClass({
  render: function () {
    return (
      <footer>
        <p>Copyright &copy; 2015, Sowmya B A</p>
      </footer>
    );
  }
});

var Categories = React.createClass({
  render: function () {
    var cols = data.categories.map(function (category, index) {
      var col = [
        <Col xs={6} sm={4}>
          <Thumbnail href='#' alt={category.name} src={category.image} />
        </Col>
      ];

      if ((index % 2) !== 0) {
        col.push(<div className="clearfix visible-xs-block"></div>);
      }
      if (((index + 1) % 3) === 0) {
        col.push(<div className="clearfix visible-sm-block"></div>);
      }

      return col;
    });

    return <Grid><Row>{cols}</Row></Grid>;
  }
});

var Home = React.createClass({
  render: function () {
    return <Categories/>;
  }
});

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Navigation/>
        <RouteHandler/>
        <Footer/>
      </div>
    );
  }
});

var routes = (
  <Route handler={App}>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, function (Root) {
  React.render(<Root/>, document.body);
});
//React.render(<App data={data}/>, document.getElementById('app'));
