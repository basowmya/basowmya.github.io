/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Menubar from './Menubar';
import Footer from './Footer';
import {grey300} from 'material-ui/styles/colors';

export default class App extends React.Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: getMuiTheme({
        palette: {
        }
      })
    };
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: grey300
        }}
      >
        <Menubar location={this.props.location} />
        <div
        className='container'
          style={{
            boxSizing: 'border-box',
            marginRight: 'auto',
            marginLeft: 'auto',
            padding: '16px'
          }}
        >
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}
