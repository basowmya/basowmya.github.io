/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var React = require('react'),
  Router = require('react-router'),
  Navigation = Router.Navigation,
  mui = require('material-ui'),
  Card = mui.Card,
  CardHeader = mui.CardHeader,
  CardActions = mui.CardActions,
  CardText = mui.CardText,
  Avatar = mui.Avatar,
  RaisedButton = mui.RaisedButton;

var About = React.createClass({
  mixins: [Navigation],

  render: function () {
    var href = this.makeHref('contact');

    return (
      <div className='container'>
        <Card>
           <CardHeader
             title='About the Artist'
             titleStyle={{fontSize: 24}} textStyle={{verticalAlign: 'middle'}}
             avatar={
               <Avatar src='img/sowmya.jpg' size={64} className='vertical-align' />
             }/>
           <CardText>
             <p><span className="drop-caps">B</span>orn and brought up in Bangalore, Sowmya had always shown precocious talent in the fields of art and athletics. She forayed into fine-arts at the age of ten and has never stopped learning.</p>
             <p>She began her professional career in the IT industry, worked at a number of startups in engineering and business development positions and also founded a software company of her own. Despite a successful career, she found her true calling as a fine-arts painter.</p>
             <p>Sowmya's repertoire now extends from traditional oil paintings and tanjore paintings to kalamkari, murals and zentangles. She conducts workshops on kalamkari, fabric painting and zentangles. So far she has trained several hundred students.</p>
             <h3>Awards &amp; Workshops</h3>
             <ul>
               <li>1998, Prize winner at Mysore Dussehra Exhibition for "Unity is Fruits of Diversity"</li>
               <li>1999, Conducted fabric painting workshop organised by Pidilite for students of vocational course at Sri Jayachamarajendra Polytechnic, Bangalore</li>
               <li>2015, Conducted a demonstration of stencil art at Cosmopolitan Club, Bangalore</li>
             </ul>
           </CardText>
           <CardActions>
             <RaisedButton linkButton={true} href={href} label='Contact the artist' primary={true} />
           </CardActions>
         </Card>
       </div>
    );
  }
});

module.exports = About;
