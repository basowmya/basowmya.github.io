/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import React from 'react';
import CategoryButton from './CategoryButton';
import {categories} from '../data';

export default class OtherCategories extends React.Component {

  static contextTypes = {
    muiTheme: React.PropTypes.object
  }

  static propTypes = {
    categoryId: React.PropTypes.string
  };

  render() {
    const {categoryId} = this.props;

    return (
      <div>
        <div
        style={{
          marginTop: '24px'
        }}
        >
          <span
            style={{
              color: this.context.muiTheme.palette.primary1Color,
              fontSize: '20px',
              marginRight: '16px'
            }}
          >
            Other Categories
          </span>
        </div>
        <div
          style={{
            boxShadow: this.context.muiTheme.palette.boxShadow,
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: '16px'
          }}
        >
          { categories.filter(({id}) => id !== categoryId).map(
            (category) => <CategoryButton key={category.id} category={category}/>
          )}
        </div>
      </div>
    );
  }
}
