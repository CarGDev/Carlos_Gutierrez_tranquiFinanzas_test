import React, { FC } from 'react';
import Layout from './layout/Layout'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Votes from './pages/votes/votes'
import Main from './pages/main/main'
import NotFound from './pages/NotFound/NotFound'

import './assets/App.css';


const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/lista-de-votaciones/' component={Votes} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
