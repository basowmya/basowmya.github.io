/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var React = require('react'),
  mui = require('material-ui'),
  Card = mui.Card,
  CardTitle = mui.CardTitle,
  CardActions = mui.CardActions,
  RaisedButton = mui.RaisedButton,
  TextField = mui.TextField,
  Snackbar = mui.Snackbar,
  LinearProgress = mui.LinearProgress,
  _ = require('lodash'),
  request = require('superagent');

var Contact = React.createClass({

  getInitialState: function () {
    return {
      _subject: '[Sowmya Art Gallery]',
      // _cc: 'dheerajvs@gmail.com',
      isLoading: false,
      snackbarMessage: ''
     };
  },

  handleNameChange: function (e) {
    this.setState({
      name: e.target.value,
      errorTextName: ''
    });
  },
  handleEmailChange: function (e) {
    this.setState({
      email: e.target.value,
      errorTextEmail: ''
    });

    if (!this.state.phone && this.state.errorTextPhone) {
      this.setState({errorTextPhone: ''});
    }
  },
  handlePhoneChange: function (e) {
    this.setState({
      phone: e.target.value,
      errorTextPhone: ''
    });

    if (!this.state.email && this.state.errorTextEmail) {
      this.setState({errorTextEmail: ''});
    }
  },
  handleMessageChange: function (e) {
    this.setState({
      message: e.target.value,
      errorTextMessage: ''
    });
  },

  handleSubmit: function (e) {
    if (!this.validateForm()) {
      return;
    }

    var formData = _.pick(this.state,
      ['name', 'email', 'phone', 'message', '_subject', '_cc']);

    this.setState({isLoading: true});

    request
      .post('//formspree.io/dheerajvs@gmail.com')
      .send(formData)
      // .query(formData)
      .type('json')
      .accept('json')
      .end(function (err, res) {
        var errText = (err.response && err.response.body && err.response.body.error) ||
          'unknown error';

        console.log('err: ' + JSON.stringify(err));
        console.log('res: ' + JSON.stringify(res));

        this.setState({isLoading: false});

        if (err) {
          this.setState({
            snackbarMessage: 'Error ' + (err.status || '(unknown status)') + ': ' + errText
          });
        }
        else {
          this.setState({snackbarMessage: 'Thanks for your message!'});
          this.setState({name: null, email: null, phone: null, message: null});
        }

        this.refs.snackbar.show();
      }.bind(this));
  },

  validateForm: function () {
    var state = this.state,
      isValid = true;

    if (!state.name) {
      this.setState({errorTextName: 'Name is required'});
      isValid = false;
    }
    if (!state.email && !state.phone) {
      this.setState({
        errorTextEmail: 'Either email or phone is required',
        errorTextPhone: 'Either email or phone is required'
      });
      isValid = false;
    }
    if (state.email && !/\S+@\S+/.test(state.email)) {
      this.setState({errorTextEmail: 'Email address is invalid'});
      isValid = false;
    }
    if (state.phone && state.phone.length < 8) {
      this.setState({errorTextPhone: 'Phone number is invalid'});
      isValid = false;
    }
    if (!state.message) {
      this.setState({errorTextMessage: 'Message is required'});
      isValid = false;
    }

    return isValid;
  },

  render: function () {
    var styles = {
      textfield: {
        display: 'block',
        margin: '0 16px'
      }
    };

    return (
      <div className='container'>
        <Card>
          <CardTitle title='Contact the Artist' titleStyle={{fontSize: 24}}/>
          <form action='http://formspree.io/sowmya.ba@gmail.com'>
            <TextField style={styles.textfield} name='name'
            floatingLabelText='Name' onChange={this.handleNameChange}
            errorText={this.state.errorTextName}/>

            <TextField style={styles.textfield} name='_replyto' type='email'
            floatingLabelText='Email' onChange={this.handleEmailChange}
            errorText={this.state.errorTextEmail}/>

            <TextField style={styles.textfield} name='phone' type='tel'
            floatingLabelText='Phone Number' onChange={this.handlePhoneChange}
            errorText={this.state.errorTextPhone}/>

            <TextField style={styles.textfield} name='message' multiLine={true} rows={3}
            floatingLabelText='Message' onChange={this.handleMessageChange}
            errorText={this.state.errorTextMessage}/>

            <CardActions>
              <RaisedButton label='Submit' primary={true}
              disabled={this.state.isLoading} onTouchTap={this.handleSubmit}/>
              {this.state.isLoading ? <LinearProgress/> : <span/>}
              <Snackbar ref='snackbar' message={this.state.snackbarMessage}/>
            </CardActions>
          </form>
        </Card>
      </div>
    );
  }
});

module.exports = Contact;
