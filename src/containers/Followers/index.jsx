// @flow
import React, { Component, Fragment } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Form, Field } from "react-final-form";
import gql from "graphql-tag";
import { Query, withApollo } from "react-apollo";
import Loading from "../../components/Loading";
import UserSidebar from "../../components/UserSidebar";

const FOLLOWERS = gql`
  query($username: String!, $nextPage: String) {
    repositoryOwner(login: $username) {
      ... on User {
        followers(first: 100, after: $nextPage) {
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
