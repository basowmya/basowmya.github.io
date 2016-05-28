/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import React from 'react';
import Avatar from 'material-ui/Avatar';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import pick from 'lodash/pick';
import request from 'superagent';

export default class Contact extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      _subject: '[Sowmya Art Gallery]',
      _cc: 'dheerajvs@gmail.com',
      isLoading: false,
      snackbarMessage: '',
      openSnackbar: false
    };
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
      errorTextName: ''
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
      errorTextEmail: ''
    });

    if (!this.state.phone && this.state.errorTextPhone) {
      this.setState({errorTextPhone: ''});
    }
  };

  handlePhoneChange = (e) => {
    this.setState({
      phone: e.target.value,
      errorTextPhone: ''
    });

    if (!this.state.email && this.state.errorTextEmail) {
      this.setState({errorTextEmail: ''});
    }
  };

  handleMessageChange = (e) => {
    this.setState({
      message: e.target.value,
      errorTextMessage: ''
    });
  };

  handleRequestClose = () => {
    this.setState({
      openSnackbar: false,
    });
  };

  handleSubmit = (e) => {
    if (!this.validateForm()) {
      return;
    }

    let formData = pick(
      this.state,
      ['name', 'email', 'phone', 'message', '_subject', '_cc']
    );

    this.setState({isLoading: true});

    request
      .post('//formspree.io/sowmya.ba@gmail.com')
      .send(formData)
      .type('form')
      .accept('json')
      .end((err, res) => {
        this.setState({isLoading: false});

        if (err) {
          let errText = (err.response && err.response.body && err.response.body.error) ||
            'unknown error';
          this.setState({
            snackbarMessage: `Error ${(err.status || '(unknown status)')}: {$errText}`
          });
        }
        else {
          this.setState({snackbarMessage: 'Thanks for your message!'});
          // TODO: Set two-way data-binding
          this.setState({name: null, email: null, phone: null, message: null});
        }

        this.setState({openSnackbar: true});
      });
  };

  validateForm() {
    let state = this.state,
      isValid = true;

    if (!state.name) {
      this.setState({errorTextName: 'Name is required'});
      isValid = false;
    }
    if (!state.email && !state.phone) {
      this.setState({
        errorTextEmail: 'Either email or phone number is required',
        errorTextPhone: 'Either email or phone number is required'
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
  }

  render() {
    let styles = {
      textfield: {
        display: 'block',
        margin: '0 16px'
      }
    };

    return (
        <Card>
          <CardTitle
            title='Contact the Artist'
            titleStyle={{fontSize: 24}}
          />
          <form
            action='http://formspree.io/sowmya.ba@gmail.com'
          >
            <TextField
              style={styles.textfield}
              name='name'
              floatingLabelText='Name'
              onChange={this.handleNameChange}
              errorText={this.state.errorTextName}
            />
            <TextField
              style={styles.textfield}
              name='_replyto'
              type='email'
              floatingLabelText='Email'
              onChange={this.handleEmailChange}
              errorText={this.state.errorTextEmail}
            />
            <TextField
              style={styles.textfield}
              name='phone'
              type='tel'
              floatingLabelText='Phone Number'
              onChange={this.handlePhoneChange}
              errorText={this.state.errorTextPhone}
            />
            <TextField
              style={styles.textfield}
              name='message'
              multiLine={true}
              rows={2}
              floatingLabelText='Message'
              onChange={this.handleMessageChange}
              errorText={this.state.errorTextMessage}
            />
            <CardActions
              style={{
                marginTop: '8px'
              }}
            >
              <RaisedButton
                label='Submit'
                primary={true}
                disabled={this.state.isLoading}
                onTouchTap={this.handleSubmit}
              />
              {this.state.isLoading ? <LinearProgress/> : <span/>}
              <Snackbar
                open={this.state.openSnackbar}
                message={this.state.snackbarMessage}
                autoHideDuration={3000}
                onRequestClose={this.handleSnackbarClose}
              />
            </CardActions>
          </form>
        </Card>
    );
  }
}
