import React, { FC } from 'react';
import Layout from './layout/Layout'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Names from './components/getPeople/divMocks'
import './App.css';


const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/lista-de-votaciones' component={Names} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
