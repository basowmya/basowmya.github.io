/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var React = require('react'),
  Router = require('react-router'),
  Navigation = Router.Navigation,
  bootstrap = require('react-bootstrap'),
  Panel = bootstrap.Panel,
  mui = require('material-ui'),
  Paper = mui.Paper,
  RaisedButton = mui.RaisedButton,
  CategoryGrid = require('./CategoryGrid'),
  _ = require('lodash'),
  data = require('../data');

var Categories = React.createClass({
  mixins: [Navigation],

  render: function () {
    var self = this;
    var panels = data.categories.map(function (category) {
      var href = self.makeHref('gallery', category),
        items = _.chain(data.items)
          .filter({category: category.id})
          .sample(4).value();

      return (
        <Panel key={category.id} header={
          <RaisedButton linkButton={true} href={href} label={category.name} primary={true} />
        }>
          <CategoryGrid items={items}/>
        </Panel>
      );
    });
    return (
      <div>
        {_.chain(panels).rest().shuffle().concat(_.first(panels)).value()}
      </div>
    );
  }
});

var Home = React.createClass({
  render: function () {
    return <Categories/>;
  }
});

module.exports = Home;
