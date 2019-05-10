import React, { Component } from 'react';
import Navbar from '../components/layout/Navbar';
import LandingImage from '../components/layout/LandingImage'

class HomePage extends Component {
  render() {
    return (
     <React.Fragment>
        <Navbar/>
        <LandingImage/>
     </React.Fragment> 
    );
  }
}

export default HomePage;