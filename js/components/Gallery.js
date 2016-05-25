/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import React from 'react';
import ItemGrid from './ItemGrid';
import {categories, items} from '../data';

export default class Home extends React.Component {

  static contextTypes = {
    muiTheme: React.PropTypes.object
  }

  render() {
    const {name, id} = categories.filter(({id}) => id === this.props.params.id)[0];

    return (
      <div
        style={{
          boxShadow: this.context.muiTheme.palette.boxShadow
        }}
      >
        <div
          style={{
            color: this.context.muiTheme.palette.primary1Color,
            fontSize: '24px',
            margin: '8px 0 24px',
            textAlign: 'center',
            width: '100%'
          }}
        >
          {name}
        </div>
        <ItemGrid
          items={
            items.filter(({category}) => category === id)
          }
          showDetails={true}
        />
      </div>
    );
  }
}
