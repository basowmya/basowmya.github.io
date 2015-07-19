/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var React = require('react'),
  bootstrap = require('react-bootstrap'),
  Thumbnail = bootstrap.Thumbnail,
  Grid = bootstrap.Grid,
  Row = bootstrap.Row,
  Col = bootstrap.Col,
  mui = require('material-ui'),
  Paper = mui.Paper,
  // Card = mui.Card,
  // CardMedia = mui.CardMedia,
  // CardTitle = mui.CardTitle,
  _ = require('lodash'),
  data = require('../data');

// var ItemDescription = React.createClass({
//   render: function () {
//     return (
//       <div>
//       {this.props.item.name}
//       {this.props.item.price}
//       </div>
//     );
//   }
// });

// <Card key={item.id}>
//   <CardMedia>
//     <img src={item.images.small[0]} alt={item.name}/>
//   </CardMedia>
//   <CardTitle title={item.name} subtitle={item.price}/>
// </Card>

var Gallery = React.createClass({
  render: function () {
    var cols = _.map(
        _.filter(data.items, {category: this.props.params.id}),
        function (item, index) {
          var col = [
            <Col xs={6} sm={4}>
              <Paper zDepth={3} href='#'>
                <Thumbnail key={item.id} alt={item.name} src={item.images.small[0]}>
                  <p className='item-name'>{item.name}</p>
                  <p className='item-price'>{item.price}</p>
                </Thumbnail>
              </Paper>
            </Col>
          ];

          if ((index % 2) !== 0) {
            col.push(<div className='clearfix visible-xs-block'></div>);
          }
          if (((index + 1) % 3) === 0) {
            col.push(<div className='clearfix visible-sm-block'></div>);
          }

          return col;
        });

    return <Grid><Row>{cols}</Row></Grid>;
  }
});

module.exports = Gallery;
