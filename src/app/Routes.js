import React from 'react';
import { Switch, Route } from 'react-router';
import routes from '../constants/routes';
import App from './App';
import GlobalStyles from './global-styles';
import HomePage from '../containers/HomePage';

export default () => (
  <App>
    <GlobalStyles />
    <Switch>
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
