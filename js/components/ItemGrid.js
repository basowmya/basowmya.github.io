/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import React from 'react';
import data from '../data';

import CategoryButton from './CategoryButton';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Paper from 'material-ui/Paper';
import Link from 'react-router/lib/Link';
import currency from '../currency';

export default class ItemGrid extends React.Component {
  render() {
    let props = this.props;

    let cols = props.items.map((item, index) => {
      let colClassName = props.singleRow ?
        (index < 2 ? '' :
          index < 3 ? 'hidden-xs' :
          index < 4 ? 'hidden-xs hidden-sm' :
                      'hidden-xs hidden-sm hidden-md hidden-lg') : '';

      var col = [
        <Col key={item.id} xs={6} sm={4} md={3} className={colClassName} style={{textAlign: 'center'}}>
          <Paper zDepth={3} style={{display: 'inline-block', marginBottom: '20px', marginTop: '20px'}}>
            <Link to={'item/' + item.id}>
              <Thumbnail key={item.id} src={item.images.small[0]} alt={item.name}>
                {
                  props.showDetails ? (
                    <div>
                      <p className='item-name'>{item.name}</p>
                      <p className='item-price'>{currency(item.price)}</p>
                    </div>
                  ) : ''
                }
              </Thumbnail>
            </Link>
          </Paper>
        </Col>
      ];

      if (!props.singleRow) {
        if ((index + 1) % 2 === 0) {
          col.push(<div className='clearfix visible-xs-block'></div>);
        }
        if ((index + 1) % 3 === 0) {
          col.push(<div className='clearfix visible-sm-block'></div>);
        }
        if ((index + 1) % 4 === 0) {
          col.push(<div className='clearfix visible-md-block visible-lg-block'></div>);
        }
      }

      return col;
    });

    return <Grid><Row>{cols}</Row></Grid>;
  }
}
