import React, { Component } from 'react';
import Navbar from '../components/navigation/Navbar';

import gif from '../resources/Images/kt_gif.gif'

class HomePage extends Component {
  render() {
    return (
     <React.Fragment>
        <Navbar/>
        <div>
          <img style={{width: '100%'}} src={gif}/>
        </div>
     </React.Fragment> 
    );
  }
}

export default HomePage;