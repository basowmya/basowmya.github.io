/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */
import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import data from '../data';

export default class PopoverExampleSimple extends React.Component {

   constructor(props) {
     super(props);

     this.state = {
       open: false,
     };
   }

   menuItems = data.categories.map(({id, name}) => (
     <MenuItem
       key={id}
       label="Gallery"
       primaryText={name}
       value={id}
     />
   ));

   handleTouchTap = (event) => {
     // This prevents ghost click.
     event.preventDefault();

     this.setState({
       open: true,
       anchorEl: event.currentTarget,
     });
   };

   handleRequestClose = () => {
     this.setState({
       open: false,
     });
   };

   render() {
     return (
       <div>
         <FlatButton
           onTouchTap={this.handleTouchTap}
           label="Gallery"
         />
         <Popover
           open={this.state.open}
           anchorEl={this.state.anchorEl}
           anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
           targetOrigin={{horizontal: 'left', vertical: 'top'}}
           onRequestClose={this.handleRequestClose}
         >
           <Menu>
            {this.menuItems}
           </Menu>
         </Popover>
       </div>
     );
   }
 }
// import React from 'react';
// import data from '../data';
//
// import DropDownMenu from 'material-ui/DropDownMenu';
// import MenuItem from 'material-ui/MenuItem';
//
// export default class CategoryDropDown extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {value: 0};
//   }
//
//   menuItems = //[
//   //   <MenuItem
//   //     key={0}
//   //     label="Gallery"
//   //     primaryText="Gallery"
//   //     value={0}
//   //   />
//   // ].concat(
//     data.categories.map(({id, name}) => (
//       <MenuItem
//         key={id}
//         label="Gallery"
//         primaryText={name}
//         value={id}
//       />
//     ));
//   // );
//
//   handleChange = (event, index, value) => this.setState({value});
//
//   render() {
//     return (
//       <DropDownMenu value={this.state.value} onChange={this.handleChange}>
//         {this.menuItems}
//       </DropDownMenu>
//     );
//   }
// }
