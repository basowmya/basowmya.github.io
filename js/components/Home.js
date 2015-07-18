/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var React = require('react'),
  _ = require('lodash'),
  bootstrap = require('react-bootstrap'),
  Button = bootstrap.Button,
  Panel = bootstrap.Panel,
  Thumbnail = bootstrap.Thumbnail,
  mui = require('material-ui'),
  Paper = mui.Paper,
  RaisedButton = mui.RaisedButton,
  Slick = require('react-slick'),
  data = require('../data');

var Carousel = React.createClass({
  render: function () {
    var settings = {
        arrows: true,
        centerPadding: '600px',
        dots: true,
        draggable: true,
        infinite: false,
        lazyLoad: true,
        slidesToShow: 5,
        slidesToScroll: 4,
        speed: 500,
        responsive: [{
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                dots: false
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                dots: false
            }
        }]
    },
      thumbnails = _.map(
        _.filter(data.items, {category: this.props.category.id}),
        function (item) {
          return (
            <Paper zDepth={3}>
              <Thumbnail key={item.id} href={'#'} alt={item.name} src={item.images.small[0]} />
            </Paper>
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

// <Panel key={category.id} header={<Button>{category.name}</Button>}>

var Categories = React.createClass({
  render: function () {
    var panels = data.categories.map(function (category, index) {
      return (
        <Panel key={category.id} header={<RaisedButton label={category.name} primary={true} />}>
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
