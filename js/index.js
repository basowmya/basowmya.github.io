/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Routes from './components/Routes';

// Needed for onTouchTap; Can go away when react 1.0 release
// Check this repo: https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const appEl = document.getElementById('app');
ReactDOM.render(Routes, appEl);

// Prevent context menu and drag on img elements to prevent saving images
const preventDefaultForImg = (e) => {
  if (e.srcElement.nodeName === 'IMG') {
    e.preventDefault();
  }
};

document.body.addEventListener('contextmenu', preventDefaultForImg);
document.body.addEventListener('dragstart', preventDefaultForImg);
