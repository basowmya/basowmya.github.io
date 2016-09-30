/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class CategoryButton extends Component {
  static propTypes = {
    category: PropTypes.object
  };

  render() {
    const {category} = this.props;

    return (
      <RaisedButton
        label={category.name}
        href={`#/gallery/${category.id}`}
        primary={true}
        style={{
          marginBottom: '24px'
        }}
      />
    );
  }
}
