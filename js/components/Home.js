/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import sampleSize from 'lodash/sampleSize';
import {categories, items} from '../data';
import CategoryButton from './CategoryButton';
import ItemGrid from './ItemGrid';

export default class Home extends React.Component {
  render() {
    return (
      <div>{
        categories.map(category => {
          let categoryItems = items.filter(item => item.category === category.id);
          let sampleItems = sampleSize(categoryItems, 4);

          return (
            <div
              key={category.id}
              style={{
                boxShadow: '0px 2px 1px -1px #D0D0D0'
              }}
            >
              <CategoryButton category={category} />
              <ItemGrid items={sampleItems} singleRow={true} />
            </div>
          );
        })
      }</div>
    );
  }
}
