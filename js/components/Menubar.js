/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import React from 'react';
import data from '../data';

import CategoryDropDown from './CategoryDropDown';
import HomeIcon from 'material-ui/svg-icons/action/home';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar/Toolbar';
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup';
import ToolbarTitle from 'material-ui/Toolbar/ToolbarTitle';

export default () => (
  <Toolbar>
    <ToolbarGroup firstChild={true} float="left">
      <IconButton>
        <HomeIcon />
      </IconButton>
      <CategoryDropDown />
      {/*<ToolbarTitle text="About" />
      <ToolbarTitle text="Contact" />*/}
    </ToolbarGroup>
  </Toolbar>
);
