import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import 'babel-polyfill'

import gif from '../src/resources/Images/kt_gif.gif' 
import './App.css';

function App() {
  return (
    <div>
      <Helmet>
        <title>Kon-Tiki Greenport</title>
        <meta name="description" content="Kon-Tiki Restaurant and Bar at The Gallery Hotel" />
        <meta name="keywords" cpntent="greenport, restaurant, bar, gallery hotel, gallery, hotel" />
      </Helmet>

      <div>
        <img style={{width: '100%'}} src={gif}/>
      </div>

    </div>


  );
}

export default App;
