/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var React = require('react'),
  Link = require('react-router').Link,
  bootstrap = require('react-bootstrap'),
  Thumbnail = bootstrap.Thumbnail,
  Grid = bootstrap.Grid,
  Row = bootstrap.Row,
  Col = bootstrap.Col,
  mui = require('material-ui'),
  Paper = mui.Paper,
  // IconButton = mui.IconButton,
  // Favorite = require('material-ui/lib/svg-icons/action/favorite'),
  _ = require('lodash'),
  data = require('../data');

  // <IconButton className='float-right' tooltip='Shortlist' touch={true}>
  //   <Favorite/>
  // </IconButton>

var Gallery = React.createClass({
  render: function () {
    var cols = _.map(
        _.filter(data.items, {category: this.props.params.id}),
        function (item, index) {
          var col = [
            <Col xs={6} sm={4} lg={3}>
              <Paper zDepth={3}>
                <Link to='item' params={item}>
                  <Thumbnail key={item.id} alt={item.name} src={item.images.small[0]}>
                    <p className='item-name'>{item.name}</p>
                    <p className='item-price'>{item.price}</p>
                  </Thumbnail>
                </Link>
              </Paper>
            </Col>
          ];

          if ((index + 1) % 2 === 0) {
            col.push(<div className='clearfix visible-xs-block'></div>);
          }
          if ((index + 1) % 3 === 0) {
            col.push(<div className='clearfix hidden-xs hidden-lg'></div>);
          }
          if ((index + 1) % 4 === 0) {
            col.push(<div className='clearfix visible-lg-block'></div>);
          }

          return col;
        });

    return <Grid><Row>{cols}</Row></Grid>;
  }
});

module.exports = Gallery;
