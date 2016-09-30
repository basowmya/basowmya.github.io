/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Routes from './components/Routes';

// Needed for onTouchTap; Can go away when react 1.0 release
// Check this repo: https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

render(Routes, document.getElementById('app'));
