// @flow
import React, { Component } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
// import type { Store } from '../reducers/types';
import Routes from './Routes';

type Props = {
	store: any,
	history: {}
};

const fragmentMatcher = new IntrospectionFragmentMatcher({
	introspectionQueryResultData: {
		__schema: {
			types: [] // no types provided
		}
	}
});

const cache = new InMemoryCache({ fragmentMatcher });

const client = new ApolloClient({
	uri: 'https://api.github.com/graphql',
	headers: {
		Authorization: `bearer d02f91b990bf37b75caed8343f6ea7519eaadb62`
	},
	cache
});

export default class Root extends Component<Props> {
	render() {
		const { history } = this.props;
		return (
			<ApolloProvider client={client}>
				<BrowserRouter>
					<Routes />
				</BrowserRouter>
			</ApolloProvider>
		);
	}
}
