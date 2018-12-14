import React from 'react';
import { Route } from 'react-router-dom';
import routes from '../constants/routes';
import GlobalStyles from './global-styles';
import HomePage from '../containers/Home';

export default () => (
  <React.Fragment>
    <GlobalStyles />
    {/* <Switch> */}
      <Route path={routes.HOME} component={HomePage} />
    {/* </Switch> */}
  </React.Fragment>
);
