/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import React from 'react';
import ItemGrid from './ItemGrid';
import {categories, items} from '../data';

export default class Home extends React.Component {

  render() {
    const {name, id} = categories.filter(({id}) => id === this.props.params.id)[0];

    return (
      <div
        style={{
          boxShadow: '0px 2px 1px -1px #D0D0D0'
        }}
      >
        <div
          style={{
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
