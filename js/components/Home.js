/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var React = require('react'),
  _ = require('lodash'),
  bootstrap = require('react-bootstrap'),
  Panel = bootstrap.Panel,
  Thumbnail = bootstrap.Thumbnail,
  Slick = require('react-slick'),
  data = require('../data');

var Carousel = React.createClass({
  render: function () {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    },
      thumbnails = _.map(
        _.filter(data.items, {category: this.props.category.id}),
        function (item) {
          return (
            <Thumbnail key={item.id} href='#' alt={item.name} src={item.images.small[0]} />
          );
        }
      );

    return (
      <Slick {...settings}>
        {thumbnails}
      </Slick>
    );
  }
});

var Categories = React.createClass({
  render: function () {
    var panels = data.categories.map(function (category, index) {
      return (
        <Panel key={category.id} header={category.name}>
          <Carousel category={category}/>
        </Panel>
      );
    });
    return (
      <div>{panels}</div>
    );
  }
});

var Home = React.createClass({
  render: function () {
    return <Categories/>;
  }
});

module.exports = Home;
