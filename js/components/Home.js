/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import React from 'react';
import sampleSize from 'lodash/sampleSize';
import {categories, items} from '../data';
import ItemGrid from './ItemGrid';

export default class Home extends React.Component {
  render() {
    return (
      <div>{
        categories.map(category => {
          let categoryItems = items.filter(item => item.category === category.id);
          let sampleItems = sampleSize(categoryItems, 4);

          return (
            <div key={category.id} >
              <h3>{category.name}</h3>
              <ItemGrid items={sampleItems} singleRow={true} />
            </div>
          );
        })
      }</div>
    );
  }
}
