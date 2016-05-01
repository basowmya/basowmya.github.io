/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import Menubar from './Menubar';
import Footer from './Footer';

export default class App extends React.Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: getMuiTheme(LightBaseTheme)
    };
  }

  render() {
    return (
      <div>
        <Menubar/>
          {this.props.children}
        <Footer/>
      </div>
    );
  }
}
