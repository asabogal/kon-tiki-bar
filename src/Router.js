import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import 'babel-polyfill'


import HomePage from './pages/HomePage';

function App() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Kon-Tiki Greenport</title>
        <meta name="description" content="Kon-Tiki Restaurant and Bar at The Gallery Hotel" />
        <meta name="keywords" cpntent="greenport, restaurant, bar, gallery hotel, gallery, hotel" />
      </Helmet>

      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={HomePage}/>
        </Switch>
      </HashRouter>

    </React.Fragment>


  );
}

export default App;
