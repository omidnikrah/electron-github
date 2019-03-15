// @flow
import React, { Component, Fragment } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Form, Field } from "react-final-form";
import gql from "graphql-tag";
import { Query, withApollo } from "react-apollo";
import Loading from "../../components/Loading";
import UserSidebar from "../../components/UserSidebar";
import FollowingsWrapper from './styles';

const GET_FOLLOWINGS = gql`
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
        followers {
          totalCount
        }
        following(first: 100, after: $nextPage) {
          totalCount
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


const FollowingsPage = (props : any) => {
  const {
    match: {
      params: { username }
    }
  } = props;
  return (
    <FollowingsWrapper>
      <Query query={GET_FOLLOWINGS} variables={{ username, nextPage: null }}>
        {({ loading, error, data, fetchMore }) => {
          if (loading) return <Loading />;
          if (error) return `Error! ${error.message}`;
  
          if (data) {
            const { repositoryOwner } = data;
            if (repositoryOwner) {
              return (
                <Fragment>
                  <UserSidebar data={repositoryOwner} isFollowingsPage />
                  <div id="repositories-container">
                    <header id="repositories--header">
                      <h3>Followings</h3>
                    </header>
                    
                  </div>
                </Fragment>
              );
            }
          }
          return true;
        }}
      </Query>
    </FollowingsWrapper>
  );
}

export default FollowingsPage;