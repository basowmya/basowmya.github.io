/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import React from 'react';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Zoomin from 'material-ui/svg-icons/action/zoom-in';
import {grey500} from 'material-ui/styles/colors';

export default class ItemThumbnail extends React.Component {

  constructor(props) {
    super(props);
    this.state = { imageIndex: 0 };
  }

  handleImageTap() {
    this.props.onChange(this.state.imageIndex);
    this.props.onTouchTap();
  }

  render() {
    let item = this.props.item,
      multipleImages = item.images.small.length > 1,

      imgHeight = 48,
      buttonPadding = 5,
      styles = {
        button: {minWidth: (imgHeight + 2 * buttonPadding) + 'px'},
        container: {padding: '9px'},
        paper: {display: 'inline-block', marginBottom: '20px'}
      };

    // TODO: conditionally apply margin-top
    return (
      <Paper zDepth={3} style={styles.paper}>
        <Thumbnail
          alt={item.name}
          src={item.images.small[this.state.imageIndex]}
          onTouchTap={this.handleImageTap} style={{cursor: 'pointer'}}
        />
        {
          item.imageCount > 1 ? (
            <div style={styles.container}>
              <FlatButton
                label='&#x25c4;'
                primary={true}
                style={styles.button}
                onTouchTap={
                  () => {
                    this.setState({
                      imageIndex: (this.state.imageIndex || item.imageCount) - 1
                    });
                  }
                }
              />
              {
                item.images.small.map((src, index) => (
                  <FlatButton
                    primary={true}
                    style={styles.button}
                    key={src}
                    onTouchTap={ () => { this.setState({imageIndex: index}); } }
                  >
                    <img
                      alt={item.name} src={src} key={src}
                      width='auto' height={imgHeight + 'px'}
                    />
                  </FlatButton>
                ))
              }
              <FlatButton
                label='&#x25ba;'
                primary={true}
                style={styles.button}
                onTouchTap={() => {
                  this.setState({
                    imageIndex: (this.state.imageIndex + 1) % item.imageCount
                  });
                }}
              />
            </div>
          ) : (
            <div style={styles.container} onTouchTap={this.handleImageTap}>
              <Zoomin className='vertical-align' color={grey500}/>
              <span>Click for a larger view</span>
            </div>
          )
        }
      </Paper>
    );
  }
}
