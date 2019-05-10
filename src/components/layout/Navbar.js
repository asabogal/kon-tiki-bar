import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'

import navLogo from '../../resources/Images/navLogo.jpg'
import './styles.css'

class Navbar extends Component {
  render() {
   
    return (
      <AppBar class="appBar" position="fixed">
        <ToolBar>
          <img className="navLogo" src={navLogo}/>
        </ToolBar>
      </AppBar>
    );
  }
}

export default Navbar;