/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import Link from 'react-router/lib/Link';

export default class ItemGrid extends React.Component {
  render() {
    let styles = {
      paper: {
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    };

    let props = this.props;

    let cols = props.items.map((item, index) => {
      return (
        <div
          key={item.id}
          className={'flex-item flex-item-' + index}
        >
          <Paper
            zDepth={3}
            style={styles.paper}
          >
            <Link to={'item/' + item.id}>
              <Card>
                <CardMedia>
                  <img src={item.images.small[0]} />
                </CardMedia>
                { props.showDetails ? <CardTitle subtitle={item.name} /> : ''}
              </Card>
            </Link>
          </Paper>
        </div>
      );
    });

    return (
      <div
        style={{
          boxSizing: 'border-box',
          display: 'flex',
          alignContent: 'flex-start',
          alignItems: 'flex-start',
          flexWrap: props.singleRow ? 'nowrap' : 'wrap',
          justifyContent: 'space-around'
        }}
      >
        {cols}
      </div>
    );
  }
}

// export default class ItemGrid extends React.Component {
//   render() {
//     let props = this.props;
//
//     let cols = props.items.map((item, index) => {
//       let colClassName = props.singleRow ?
//         (index < 2 ? '' :
//           index < 3 ? 'hidden-xs' :
//           index < 4 ? 'hidden-xs hidden-sm' :
//                       'hidden-xs hidden-sm hidden-md hidden-lg') : '';
//
//       var col = [
//         <Col key={item.id} xs={6} sm={4} md={3} className={colClassName} style={{textAlign: 'center'}}>
//           <Paper zDepth={3} style={{display: 'inline-block', marginBottom: '20px', marginTop: '20px'}}>
//             <Link to={'item/' + item.id}>
//               <Card>
//                 <CardMedia>
//                   <img src={item.images.small[0]} />
//                 </CardMedia>
//                 <CardTitle subtitle={item.name} />
//               </Card>
//             </Link>
//           </Paper>
//         </Col>
//       ];
//
//       // if (!props.singleRow) {
//       //   if ((index + 1) % 2 === 0) {
//       //     col.push(<div className='clearfix visible-xs-block'></div>);
//       //   }
//       //   if ((index + 1) % 3 === 0) {
//       //     col.push(<div className='clearfix visible-sm-block'></div>);
//       //   }
//       //   if ((index + 1) % 4 === 0) {
//       //     col.push(<div className='clearfix visible-md-block visible-lg-block'></div>);
//       //   }
//       // }
//
//       return col;
//     });
//
//     return <Grid><Row>{cols}</Row></Grid>;
//   }
// }
