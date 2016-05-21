/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import Link from 'react-router/lib/Link';

export default class ItemGrid extends React.Component {
  render() {
    let styles = {
      paper: {
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
          <Paper
            zDepth={3}
            style={styles.paper}
          >
            <Link
              to={'item/' + item.id}
              style={{
                textDecoration: 'none'
              }}
            >
              <Card>
                <CardMedia>
                  <img src={item.images.small[0]} />
                </CardMedia>
                { props.showDetails &&
                    <CardTitle
                      title={item.name}
                      titleStyle={{
                        fontSize: '20px',
                        textAlign: 'center'
                      }}
                    />
                }
              </Card>
            </Link>
          </Paper>
        </div>
      );
    });

    return (
      <div
        style={{
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
