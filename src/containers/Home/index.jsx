// @flow
import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import githubLogo from './assets/logo.svg';
import HomeStyles from './styles';
import UserItem from './components/UserItem';

type Props = {};

const SEARCH_USER = gql`
{
  search (query: "omid", type: USER, first: 100){
    edges {
      node {
        ... on User {
          name
          avatarUrl
      		repositories {
            totalCount
          }
        }
      }
    }
  }
}
`;

export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    return (
      <HomeStyles>
        <img className="github--logo" src={githubLogo} alt="GitHub logo" />
        <h2 className="title">Type Username, Press Enter</h2>
        <Query query={SEARCH_USER}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;

            const userList = data.search.edges.map((user : any, index : any) => (
              <UserItem name={user.node.name} key={index} />
            ));
            
            return userList;
          }}
        </Query>
        <Form
          onSubmit={(values) => {
            console.log(values);
          }}
          render={({ handleSubmit, pristine, invalid }) => (
            <form onSubmit={handleSubmit} className="search--form">
              <div className="input-wrapper">
                {/* $FlowFixMe */}
                <Field
                  name="firstName"
                  className="search--input"
                  component="input"
                  placeholder="Enter Username"
                />
                <button type="submit" className="search--submit" disabled={pristine || invalid} />
              </div>
            </form>
          )}
        />
      </HomeStyles>
    );
  }
}
