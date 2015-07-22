/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var React = require('react'),
  bootstrap = require('react-bootstrap'),
  Panel = bootstrap.Panel,
  CategoryButton = require('./CategoryButton'),
  ItemGrid = require('./ItemGrid'),
  _ = require('lodash'),
  data = require('../data');

var Categories = React.createClass({
  render: function () {
    var panels = data.categories.map(function (category) {
      var items = _.chain(data.items)
          .filter({category: category.id})
          .sample(4).value();

      return (
        <Panel key={category.id} header={
          <CategoryButton category={category} />
        }>
          <ItemGrid items={items} singleRow={true}/>
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
