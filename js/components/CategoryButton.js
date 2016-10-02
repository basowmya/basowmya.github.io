/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class CategoryButton extends React.Component {
  static propTypes = {
    category: React.PropTypes.object
  };

  render() {
    const {category} = this.props;

    return (
      <RaisedButton
        label={category.name}
        href={`#/gallery/${category.id}`}
        primary={true}
        style={{
          marginBottom: '24px',
          marginRight: '16px'
        }}
      />
    );
  }
}
