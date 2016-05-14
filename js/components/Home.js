/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import React from 'react';
import sampleSize from 'lodash/sampleSize';
import data from '../data';
import ItemGrid from './ItemGrid';

export default class Home extends React.Component {
  render() {
    return (
      <div>{
        data.categories.map(category => {
          let items = sampleSize(
            data.items.filter(item => item.category === category.id),
            4
          );

          return (
            <div key={category.id} >
              <h3>{category.name}</h3>
              <ItemGrid items={items} singleRow={true}/>
            </div>
          );
        })
      }</div>
    );
    // {_.chain(panels).rest().shuffle().concat(_.first(panels)).value()}
  }
}
