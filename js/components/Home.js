/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import sampleSize from 'lodash/sampleSize';
import {categories, items} from '../data';
import CategoryButton from './CategoryButton';
import ItemGrid from './ItemGrid';

export default class Home extends Component {

  static contextTypes = {
    muiTheme: PropTypes.object
  }

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
                boxShadow: this.context.muiTheme.palette.boxShadow
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
