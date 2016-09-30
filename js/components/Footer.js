/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import {Component, PropTypes} from 'react';
import typography from 'material-ui/styles/typography';

export default class Footer extends Component {

  static contextTypes = {
    muiTheme: PropTypes.object
  }

  render = () => (
    <footer
      style={{
        color: this.context.muiTheme.palette.primary1Color,
        fontSize: '11px',
        fontWeight: typography.fontWeightLight,
        marginBottom: '16px',
        textAlign: 'center'
      }}
    >
      Copyright &copy; 2016, Sowmya B A
    </footer>
  );
}
