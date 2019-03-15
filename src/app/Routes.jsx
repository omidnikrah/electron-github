import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import GlobalStyles from './global-styles';
import HomePage from '../containers/Home';
import UserPage from '../containers/User';
import FollowersPage from '../containers/Followers';
import FollowingsPage from '../containers/Followings';

export default () => (
  <React.Fragment>
    <GlobalStyles />
    <HashRouter>
      <React.Fragment>
        <Route path="/" component={HomePage} exact />
        <Route path="/user/:username" component={UserPage} exact />
        <Route path="/followers/:username" component={FollowersPage} exact />
        <Route path="/followings/:username" component={FollowingsPage} exact />
      </React.Fragment>
    </HashRouter>
  </React.Fragment>
);
