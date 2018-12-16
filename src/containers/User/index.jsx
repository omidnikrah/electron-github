// @flow
import React, { Component, Fragment } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Form, Field } from 'react-final-form';
import gql from 'graphql-tag';
import { Query, withApollo } from 'react-apollo';
import Loading from '../../components/Loading';
import RepositoryItem from '../../components/RepositoryItem';
import UserPageStyles from './styles';
import UserItem from './components/UserItem';
import UserSidebar from '../../components/UserSidebar';

type Props = {
  client: any,
  match: any
};

type State = {
  loading: boolean,
  searchTerm: string,
  searchList: any,
  pagination: any
};

const GET_USER = gql`
  query($username: String!) {
    repositoryOwner(login: $username) {
      login
      ... on User {
        bio
        avatarUrl
        name
        email
        websiteUrl
        location
        company
        repositories(first: 100) {
          totalCount
          nodes {
            name
            description
            forkCount
            stargazers {
              totalCount
            }
            primaryLanguage {
              color
              name
            }
          }
        }
        followers {
          totalCount
        }
        following {
          totalCount
        }
      }
    }
  }
`;

class UserPage extends Component<Props, State> {
  render() {
    const {
      match: {
        params: { username }
      }
    } = this.props;
    return (
      <UserPageStyles>
        <Query query={GET_USER} variables={{ username }}>
          {({ loading, error, data }) => {
            if (loading) return <Loading />;
            if (error) return `Error! ${error.message}`;

            if (data) {
              const { repositoryOwner } = data;

              return (
                <Fragment>
                  <UserSidebar data={repositoryOwner} />
                  <div id="repositories-container">
                    <header id="repositories--header">
                      <h3>Respositories</h3>
                      <span>{repositoryOwner.repositories.totalCount} repositories has created so far</span>
                    </header>
                    <div id="repositories--item">
                      {repositoryOwner.repositories.nodes.map((repository : any, index : number) => (
                        <RepositoryItem data={repository} key={index} />
                      ))}
                    </div>
                  </div>
                </Fragment>
              );
            }
            return true;
          }}
        </Query>
      </UserPageStyles>
    );
  }
}

export default withApollo(UserPage);
