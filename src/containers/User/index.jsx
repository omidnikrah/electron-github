// @flow
import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Loading from "../../components/Loading";
import RepositoriesWrapper from "./components/RepositoriesWrapper";
import UserPageStyles from "./styles";
import UserSidebar from "../../components/UserSidebar";

type Props = {
  match: any
};

type State = {
  loading: boolean,
  repositories: any,
  pagination: any
};

const GET_USER = gql`
  query($username: String!, $nextPage: String) {
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
        repositories(
          first: 100
          after: $nextPage
          orderBy: { field: UPDATED_AT, direction: DESC }
        ) {
          pageInfo {
            hasNextPage
            endCursor
          }
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
  repositoriesElem: any;

  render() {
    const {
      match: {
        params: { username }
      }
    } = this.props;
    return (
      <UserPageStyles>
        <Query query={GET_USER} variables={{ username, nextPage: null }}>
          {({ loading, error, data, fetchMore }) => {
            if (loading) return <Loading />;
            if (error) return `Error! ${error.message}`;

            if (data) {
              const { repositoryOwner } = data;
              if (repositoryOwner) {
                return (
                  <Fragment>
                    <UserSidebar data={repositoryOwner} />
                    <div id="repositories-container">
                      <header id="repositories--header">
                        <h3>Respositories</h3>
                        <span>
                          {repositoryOwner.repositories.totalCount} repositories
                          has created so far
                        </span>
                      </header>
                      <RepositoriesWrapper
                        data={repositoryOwner.repositories.nodes}
                        hasLoadMore={
                          repositoryOwner.repositories.pageInfo.hasNextPage
                        }
                        onLoadMore={() => {
                          fetchMore({
                            variables: {
                              nextPage:
                                repositoryOwner.repositories.pageInfo.endCursor
                            },
                            updateQuery: (prev, { fetchMoreResult }) => {
                              if (!fetchMoreResult) return prev;
                              return {
                                repositoryOwner: {
                                  ...prev.repositoryOwner,
                                  repositories: {
                                    ...fetchMoreResult.repositoryOwner
                                      .repositories,
                                    nodes: [
                                      ...prev.repositoryOwner.repositories
                                        .nodes,
                                      ...fetchMoreResult.repositoryOwner
                                        .repositories.nodes
                                    ]
                                  }
                                }
                              };
                            }
                          });
                        }}
                      />
                    </div>
                  </Fragment>
                );
              }
            }
            return true;
          }}
        </Query>
      </UserPageStyles>
    );
  }
}

export default UserPage;
