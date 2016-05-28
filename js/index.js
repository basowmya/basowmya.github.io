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

 const appElement = document.getElementById('app');

 ReactDOM.render(Routes, appElement);

 // Prevent context menu on img elements to prevent saving images
 appElement.addEventListener('contextmenu', function (e) {
   if (e.srcElement.nodeName === 'IMG') {
     e.preventDefault();
   }
 });
