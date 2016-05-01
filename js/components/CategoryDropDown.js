/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import React from 'react';
import data from '../data';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class CategoryDropDown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 0};
  }

  categories = [
    <MenuItem
      key={0}
      primaryText="Gallery"
      value={0}
    />
  ].concat(
    data.categories.map(({id, name}) => (
      <MenuItem
        key={id}
        primaryText={name}
        value={id}
      />
    ))
  );

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <DropDownMenu value={this.state.value} onChange={this.handleChange}>
        {this.categories}
      </DropDownMenu>
    );
  }
}
