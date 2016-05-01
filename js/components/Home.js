/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import React from 'react';
import sampleSize from 'lodash/sampleSize';
import data from '../data';

import CategoryButton from './CategoryButton';
import ItemGrid from './ItemGrid';
import Panel from 'react-bootstrap/lib/Panel';

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
            <Panel
              key={category.id}
              header={ <CategoryButton category={category} /> }
            >
              <ItemGrid items={items} singleRow={true}/>
            </Panel>
          );
        })
      }</div>
    );
    // {_.chain(panels).rest().shuffle().concat(_.first(panels)).value()}
  }
}
