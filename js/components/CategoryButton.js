/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class CategoryButton extends React.Component {
  render() {
    return (
      <RaisedButton
        className='vertical-align'
        linkButton={true}
        href={'#/gallery/' + this.props.category.id}
        label={this.props.category.name + '\u00A0\u00A0\u25BA'}
        primary={true}
      />
    );
  }
}
