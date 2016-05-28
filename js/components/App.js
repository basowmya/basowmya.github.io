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
    const backgroundColor = '#e0d5cd';
    const primary1Color = '#8b4513';
    const accent1Color = '#fef9f6';

    return {
      muiTheme: getMuiTheme({
        palette: {
          primary1Color: primary1Color,
          accent1Color: accent1Color,
          canvasColor: accent1Color,
          textColor: primary1Color,
          borderColor: primary1Color,
          boxShadow: '0px 2px 1px -1px rgba(139, 69, 19, 0.15)'
        },
        inkBar: {
          backgroundColor: primary1Color
        },
        menuItem: {
          selectedTextColor: backgroundColor
        },
        tabs: {
          backgroundColor: accent1Color,
          textColor: primary1Color,
          selectedTextColor: primary1Color
        }
      })
    };
  }

  render() {
    return (
      <div>
        <Menubar location={this.props.location} />
        <div
          className='container'
          style={{
            boxSizing: 'border-box',
            margin: '0 auto',
            padding: '24px 16px 16px'
          }}
        >
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}
