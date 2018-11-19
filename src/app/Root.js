// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import type { Store } from '../reducers/types';
import Routes from './Routes';

type Props = {
  store: Store,
  history: {}
};

const client = new ApolloClient({ 
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer 4479095b399544c9ca9c8d80ff7d10f6fc364946`
  },
 });

export default class Root extends Component<Props> {
  render() {
    const { store, history } = this.props;
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Routes />
          </ConnectedRouter>
        </Provider>
      </ApolloProvider>
    );
  }
}
