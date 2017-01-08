/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Menubar from './Menubar';
import Footer from './Footer';
import Snackbar from 'material-ui/Snackbar';
import {grey300} from 'material-ui/styles/colors';

export default class App extends React.Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      autoHideDuration: 4000,
      snackbarAction: '',
      snackbarMessage: '',
      openSnackbar: false
    };
  }

  handleServiceWorkerEvent(e) {
    if (e.detail) {
      if (e.detail.newContent) {
        this.setState({
          autoHideDuration: 0,
          snackbarAction: 'Refresh',
          snackbarMessage: 'New content available.',
          openSnackbar: true,
        });
      }
      else if (e.detail.offlineReady) {
        this.setState({
          autoHideDuration: 4000,
          snackbarMessage: 'Content is now available offline.',
          openSnackbar: false
        });
      }
    }
  }

  handleActionTouchTap() {
    this.handleRequestClose();
    window.location.reload();
  }

  handleRequestClose() {
    this.setState({
      openSnackbar: false
    });
  }

  componentDidMount() {
    document.addEventListener('serviceWorker', this.handleServiceWorkerEvent.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('serviceWorker', this.handleServiceWorkerEvent.bind(this));
  }

  getChildContext() {
    const backgroundColor = '#e0d5cd';
    const primary1Color = '#8b4513';
    const accent1Color = 'rgba(254, 249, 246, 0.75)'; //'#fef9f6';
    const accent2Color = 'rgb(254, 249, 246)';

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
        tabs: {
          backgroundColor: 'rgba(0,0,0,0)',
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
        <Snackbar
          open={this.state.openSnackbar}
          action={this.state.snackbarAction}
          autoHideDuration={this.state.autoHideDuration}
          message={this.state.snackbarMessage}
          onActionTouchTap={this.handleActionTouchTap.bind(this)}
          onRequestClose={this.handleRequestClose.bind(this)}
        />
      </div>
    );
  }
}
