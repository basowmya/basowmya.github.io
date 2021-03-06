/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import React from 'react';
import Avatar from 'material-ui/Avatar';
import {Card, CardActions, CardHeader, CardText, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import typography from 'material-ui/styles/typography';
import {testimonials} from '../data';

export default class About extends React.Component {

  static contextTypes = {
    muiTheme: React.PropTypes.object
  }

  render = () => (
    <div>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              src='img/sowmya.jpg'
              size={48}
            />
          }
          title='About the Artist'
          titleStyle={{
            fontSize: 18
          }}
          subtitle='Sowmya B A'
          subtitleStyle={{
            fontSize: 16
          }}
          style={{
            paddingBottom: 0
          }}
          textStyle={{
            paddingRight: 0
          }}
        />

        <CardText
          style={{
            lineHeight: 1.5
          }}
        >
          <p>
            <span
              style={{
                float: 'left',
                fontSize: '42px',
                lineHeight: 1,
                paddingRight: '4px'
              }}
            >
            B
            </span>
            orn and brought up in Bangalore, Sowmya had always shown precocious talent in the fields of art and athletics. She forayed into fine-arts at the age of ten and has never stopped learning.
          </p>
          <p>She began her professional career in the IT industry, worked at a number of startups in engineering and business development positions and also founded a software company of her own. Despite a successful career, she found her true calling as a fine-arts painter.</p>
          <p>Sowmya's repertoire now extends from traditional oil paintings and tanjore paintings to kalamkari, murals and zentangles. She conducts workshops on kalamkari, fabric painting and zentangles. So far she has trained several hundred students.</p>
          <h3>Awards &amp; Workshops</h3>
          <ul>
            <li>1998, Prize winner at Mysore Dussehra Exhibition for "Unity is Fruits of Diversity"</li>
            <li>1999, Conducted fabric painting workshop organised by Pidilite for students of vocational course at Sri Jayachamarajendra Polytechnic, Bangalore</li>
            <li>2015, Conducted a demonstration of stencil art at Cosmopolitan Club, Bangalore</li>
            <li>2016, Exhibited her works at Manjari Ladies Association, Bangalore</li>
          </ul>
        </CardText>

        <CardActions>
          <RaisedButton
            href='#/contact'
            label='Contact the artist'
            primary={true}
          />
        </CardActions>
      </Card>

      <div
        style={{
          color: this.context.muiTheme.palette.primary1Color,
          fontSize: '24px',
          margin: '32px 0 24px',
          textAlign: 'center',
          width: '100%'
        }}
      >
        Testimonials
      </div>
      <div
        style={{
          display: 'flex',
          alignContent: 'flex-start',
          alignItems: 'stretch',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '20px'
        }}
      >
        {testimonials.map(({quote, author, profession}) => (
          <Card
            key={author}
            containerStyle={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            style={{
              display: 'flex',
              boxSizing: 'border-box',
              flex: '0 1 auto',
              maxWidth: '198px',
              margin: '0 16px 16px'
            }}
          >
            <CardText>
              <span
                style={{
                  display: 'inline',
                  fontSize: '64px',
                  fontFamily: 'sans-serif',
                  float: 'left',
                  lineHeight: 0,
                  margin: '20px 4px 0 0'
                }}
              >
                {'\u201C'}
              </span>
              <span
                style={{
                  display: 'inline-block',
                  lineHeight: 1.4,
                  textAlign: 'center'
                }}>
                {quote}
              </span>
              <span
              style={{
                display: 'inline',
                fontSize: '64px',
                fontFamily: 'sans-serif',
                float: 'right',
                lineHeight: 0,
                margin: '32px 0 -32px'
              }}
              >
              {'\u201D'}
              </span>
            </CardText>
            <CardTitle
              title={author}
              subtitle={profession}
            />
          </Card>
        ))
        }
      </div>

      <footer
        style={{
          color: this.context.muiTheme.palette.primary1Color,
          fontSize: '11px',
          fontWeight: typography.fontWeightLight,
          textAlign: 'center'
        }}
      >
        Website handcrafted with &#x2665; by Dheeraj V S
      </footer>
    </div>
  );
}
