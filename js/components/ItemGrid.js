/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import {Component, PropTypes} from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import Link from 'react-router/lib/Link';
import {transparent} from 'material-ui/styles/colors';

export default class ItemGrid extends Component {

  static contextTypes = {
    muiTheme: PropTypes.object
  }

  render() {
    let styles = {
      center: {
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    };

    let props = this.props;

    let cols = props.items.map((item, index) => {
      return (
        <Link
          key={item.id}
          className={
            `flex-item ${props.singleRow ? `flex-item-${index}` : ''}`
          }
          to={'/item/' + item.id}
          style={{
            textDecoration: 'none',
            ...styles.center
          }}
        >
          <Card
            className={`${item.outOfStock} ? ribbon-box : ''`}
            zDepth={3}
          >
            <CardMedia>
              <img
                src={item.images.small[0]}
                alt={item.name}
              />
            </CardMedia>
            { props.showDetails &&
                <CardTitle
                  subtitle={item.name}
                  subtitleStyle={{
                    color: this.context.muiTheme.palette.primary1Color,
                    textAlign: 'center'
                  }}
                />
            }
            { item.outOfStock &&
              <div className='ribbon'>
                <span>SOLD OUT</span>
              </div>
            }
          </Card>
        </Link>
      );
    });

    return (
      <div
        style={{
          ...this.props.style,
          boxSizing: 'border-box',
          display: 'flex',
          alignContent: 'flex-start',
          alignItems: 'flex-start',
          flexWrap: props.singleRow ? 'nowrap' : 'wrap',
          marginBottom: '20px'
        }}
      >
        {cols}
      </div>
    );
  }
}
