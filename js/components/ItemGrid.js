/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import Link from 'react-router/lib/Link';
import {transparent} from 'material-ui/styles/colors';

export default class ItemGrid extends React.Component {

  static contextTypes = {
    muiTheme: React.PropTypes.object
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
        <div
          key={item.id}
          className={`flex-item ${props.singleRow ? `flex-item-${index}` : ''}`}
        >
            <Link
              to={'/item/' + item.id}
              style={{
                textDecoration: 'none',
                ...styles.center
              }}
            >
              <Card
                zDepth={3}
              >
                <CardMedia>
                  <img src={item.images.small[0]} />
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
              </Card>
            </Link>
          {/*<div
            style={{
              display: 'flex',
              textAlign: 'center',
              width: '100%'
            }}
          >
            {props.showDetails ? item.name : ''}
          </div>*/}
        </div>
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
