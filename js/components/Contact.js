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
  request = require('superagent');

var Contact = React.createClass({

  getInitialState: function () {
    return {
      name: '', email: '', phone: '', message: '',
      _subject: '[Sowmya Art Gallery]'
      // _cc: 'dheerajvs@gmail.com',
     };
  },

  handleNameChange: function (e) {
    this.setState({name: e.target.value});
  },
  handleEmailChange: function (e) {
    this.setState({email: e.target.value});
  },
  handlePhoneChange: function (e) {
    this.setState({phone: e.target.value});
  },
  handleMessageChange: function (e) {
    this.setState({message: e.target.value});
  },
  handleSubmit: function (e) {
    var formData = this.state;
    console.log(JSON.stringify(formData));
    request.post('//formspree.io/dheerajvs@gmail.com')
      .send(formData)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        console.log('err: ' + JSON.stringify(err));
        console.log('res: ' + JSON.stringify(res));
      });
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
            floatingLabelText='Name' onChange={this.handleNameChange}/>
            <TextField style={styles.textfield} name='_replyto' type='email'
            floatingLabelText='Email' onChange={this.handleEmailChange}/>
            <TextField style={styles.textfield} name='phone' type='tel'
            floatingLabelText='Phone Number' onChange={this.handlePhoneChange}/>
            <TextField style={styles.textfield} name='message' multiLine={true} rows={3}
            floatingLabelText='Message' onChange={this.handleMessageChange}/>
            <CardActions>
              <RaisedButton label='Submit' primary={true} onTouchTap={this.handleSubmit}/>
            </CardActions>
          </form>
        </Card>
      </div>
    );
  }
});

module.exports = Contact;
