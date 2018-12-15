// @flow
import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Form, Field } from 'react-final-form';
import gql from 'graphql-tag';
import { Query, withApollo } from 'react-apollo';
import Loading from '../../components/Loading';
import githubLogo from './assets/logo.svg';
import HomeStyles from './styles';
import UserItem from './components/UserItem';

type Props = {
  client: any,
  match : any,
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
    const { match: { params: { username } } } = this.props;
    return (
      <HomeStyles>
        
        <Query query={GET_USER} variables={{ username }}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;

            if (data) {
              const { repositoryOwner } = data;
            
              return (
                <React.Fragment>
                  <img src={repositoryOwner.avatarUrl} width={100} alt="GitHub logo" />
                  <span>{repositoryOwner.name}</span>
                  <p>{repositoryOwner.bio}</p>
                  <span>{repositoryOwner.location}</span>
                  <a href={repositoryOwner.websiteUrl}>WebSite</a>
                  <span>{repositoryOwner.company}</span>
                  <span>{repositoryOwner.location}</span>
                  <br />
                  -----------------
                  <br />
                  <span>Followers: {repositoryOwner.followers.totalCount}</span>
                  <span>Followings: {repositoryOwner.following.totalCount}</span>
                  <button type="button" onClick={history.back}>
                    Back
                  </button>
                </React.Fragment>
              );
            }
          }}
        </Query>
      </HomeStyles>
    );
  }
}

export default withApollo(UserPage);
