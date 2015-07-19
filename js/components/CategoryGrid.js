/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var React = require('react'),
  Router = require('react-router'),
  Link = Router.Link,
  bootstrap = require('react-bootstrap'),
  Thumbnail = bootstrap.Thumbnail,
  Grid = bootstrap.Grid,
  Row = bootstrap.Row,
  Col = bootstrap.Col,
  mui = require('material-ui'),
  Paper = mui.Paper,
  _ = require('lodash');

  // IconButton = mui.IconButton,
  // Favorite = require('material-ui/lib/svg-icons/action/favorite'),
  // <IconButton className='float-right' tooltip='Shortlist' touch={true}>
  //   <Favorite/>
  // </IconButton>

var CategoryGrid = React.createClass({
  render: function () {
    var cols = _.map(this.props.items, function (item, index) {
      var className = this.props.singleRow ?
        (index < 2 ? '' :
          index < 3 ? 'hidden-xs' :
          index < 4 ? 'hidden-xs hidden-sm' :
                      'hidden-xs hidden-sm hidden-md hidden-lg') : '';

      var col = [
        <Col key={item.id} xs={6} sm={4} md={3} className={className}>
          <Paper zDepth={3}>
            <Link to='item' params={item}>
              <Thumbnail key={item.id} src={item.images.small[0]} alt={item.name}>
                {
                  this.props.showDetails ? (
                    <div>
                      <p className='item-name'>{item.name}</p>
                      <p className='item-price'>{item.price}</p>
                    </div>
                  ) : ''
                }
              </Thumbnail>
            </Link>
          </Paper>
        </Col>
      ];

      if (!this.props.singleRow) {
        if ((index + 1) % 2 === 0) {
          col.push(<div className='clearfix visible-xs-block'></div>);
        }
        if ((index + 1) % 3 === 0) {
          col.push(<div className='clearfix hidden-xs hidden-lg'></div>);
        }
        if ((index + 1) % 4 === 0) {
          col.push(<div className='clearfix visible-lg-block'></div>);
        }
      }

      return col;
    }, this);

    return <Grid><Row>{cols}</Row></Grid>;
  }
});

module.exports = CategoryGrid;
