import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import 'babel-polyfill'

import './App.css';

function App() {
  return (
    <div>
      <Helmet>
        <title>Kon-Tiki Greenport</title>
        <meta name="description" content="Kon-Tiki Restaurant and Bar at The Gallery Hotel" />
        <meta name="keywords" cpntent="greenport, restaurant, bar, gallery hotel, gallery, hotel" />
      </Helmet>

    </div>
    
  );
}

export default App;
