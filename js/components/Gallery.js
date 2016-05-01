/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import React from 'react';
import ItemGrid from './ItemGrid';
import data from '../data';

export default class Home extends React.Component {

  render() {
    return (
      <ItemGrid
        items={
          data.items.filter(({category}) => category === this.props.params.id)
        }
        showDetails={true}
      />
    );
  }
}
