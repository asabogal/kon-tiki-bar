import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import 'babel-polyfill'

import Layout from './containers/Layout'
import HomePage from './pages/HomePage';

function App() {
  return (
    <React.Fragment>
     <Layout/>

      <HashRouter basename="/">
      <Switch>
          <Route exact path="/" component={HomePage}/>
        </Switch>
      </HashRouter>
    </React.Fragment>


  );
}

export default App;
