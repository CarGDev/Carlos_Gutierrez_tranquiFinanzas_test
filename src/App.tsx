import React, { FC } from 'react';
import Layout from './layout/Layout'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Votes from './pages/votes/votes'
import Main from './pages/main/main'
import NotFound from './pages/NotFound/NotFound'
import EntersInput from './pages/enters/enter'

import './assets/App.css';


const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/lista-de-votaciones/' component={Votes} />
          <Route exact path='/focusable-input' component={EntersInput} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
