// @flow
import React, { Component, Fragment } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Form, Field } from "react-final-form";
import gql from "graphql-tag";
import { Query, withApollo } from "react-apollo";
import Loading from "../../components/Loading";
import UserSidebar from "../../components/UserSidebar";
import UsersWrapper from "../../components/UsersWrapper";
import FollowersWrapper from './styles';

const GET_FOLLOWERS = gql`
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
        following {
          totalCount
        }
        followers(first: 100, after: $nextPage) {
          totalCount
          pageInfo {
            hasNextPage
            endCursor
          }
          nodes {
            name
            login
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


const FollowersPage = (props : any) => {
  const {
    match: {
      params: { username }
    }
  } = props;
  return (
    <FollowersWrapper>
      <Query query={GET_FOLLOWERS} variables={{ username, nextPage: null }}>
        {({ loading, error, data, fetchMore }) => {
          if (loading) return <Loading />;
          if (error) return `Error! ${error.message}`;
  
          if (data) {
            const { repositoryOwner } = data;
            if (repositoryOwner) {
              return (
                <Fragment>
                  <UserSidebar data={repositoryOwner} isFollowersPage />
                  <div id="repositories-container">
                    <header id="repositories--header">
                      <h3>Followers</h3>
                    </header>
                    <UsersWrapper
                      data={repositoryOwner.followers.nodes}
                      hasLoadMore={
                        repositoryOwner.followers.pageInfo.hasNextPage
                      }
                      onLoadMore={() => {
                        fetchMore({
                          variables: {
                            nextPage:
                              repositoryOwner.followers.pageInfo.endCursor
                          },
                          updateQuery: (prev, { fetchMoreResult }) => {
                            if (!fetchMoreResult) return prev;
                            return {
                              repositoryOwner: {
                                ...prev.repositoryOwner,
                                followers: {
                                  ...fetchMoreResult.repositoryOwner
                                    .followers,
                                  nodes: [
                                    ...prev.repositoryOwner.followers
                                      .nodes,
                                    ...fetchMoreResult.repositoryOwner
                                      .followers.nodes
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
    </FollowersWrapper>
  );
}

export default FollowersPage;