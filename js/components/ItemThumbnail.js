/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var React = require('react'),
  bootstrap = require('react-bootstrap'),
  Thumbnail = bootstrap.Thumbnail,
  mui = require('material-ui'),
  Paper = mui.Paper,
  FlatButton = mui.FlatButton,
  Colors = mui.Styles.Colors,
  Zoomin = require('material-ui/lib/svg-icons/action/zoom-in');

var ItemThumbnail = React.createClass({

  getInitialState: function () {
    return { imageIndex: 0 };
  },

  handleImageTap: function () {
    this.props.onChange(this.state.imageIndex);
    this.props.onTouchTap();
  },

  render: function () {
    var item = this.props.item,
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
        <Thumbnail alt={item.name} src={item.images.small[this.state.imageIndex]}
        onTouchTap={this.handleImageTap} style={{cursor: 'pointer'}}/>

        {item.imageCount > 1 ? (
          <div style={styles.container}>
            <FlatButton label='&#x25c4;' primary={true} style={styles.button}
            onTouchTap={function () {
              this.setState({
                imageIndex: (this.state.imageIndex || item.imageCount) - 1
              });
            }.bind(this)}/>

            {item.images.small.map(function (src, index) {
              return (
                <FlatButton primary={true} style={styles.button} key={src}
                onTouchTap={function () {
                  this.setState({imageIndex: index});
                }.bind(this)}>
                  <img alt={item.name} src={src} key={src}
                  width='auto' height={imgHeight + 'px'}/>
                </FlatButton>
              );
            }.bind(this))}

            <FlatButton label='&#x25ba;' primary={true} style={styles.button}
            onTouchTap={function () {
              this.setState({
                imageIndex: (this.state.imageIndex + 1) % item.imageCount
              });
            }.bind(this)}/>
          </div>
        ) : (
          <div style={styles.container} onTouchTap={this.handleImageTap}>
            <Zoomin className='vertical-align' color={Colors.grey500}/>
            <span>Click for a larger view</span>
          </div>
        )}
      </Paper>
    );
  }
});

module.exports = ItemThumbnail;
