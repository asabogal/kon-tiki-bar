import React from 'react';
import NavBar from '../components/layout/Navbar'
import Helmet from 'react-helmet'

const Layout = () => {
  return (
    <div>
      <Helmet>
        <title>Kon-Tiki Greenport</title>
        <meta name="description" content="Kon-Tiki Restaurant and Bar at The Gallery Hotel" />
        <meta name="keywords" cpntent="greenport, restaurant, bar, gallery hotel, gallery, hotel" />
      </Helmet>
      <NavBar/> 
    </div>
  );
};

export default Layout;